import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

console.log(process.env.STRIPE_SECRET_KEY);

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not defined in environment variables.");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-02-24.acacia",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const {
      cartItems,
      currency,
      paymentMethod,
      subtotal,
      additionalCosts,
      discount,
      isCubiMart,
    } = req.body;

    console.log(
      "Received checkout request:",
      JSON.stringify(req.body, null, 2)
    );

    if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
      return res.status(400).json({ error: "Invalid or empty cart" });
    }

    if (!currency || typeof currency !== "string") {
      return res.status(400).json({ error: "Invalid or missing currency" });
    }

    if (!paymentMethod || typeof paymentMethod !== "string") {
      return res
        .status(400)
        .json({ error: "Invalid or missing payment method" });
    }

    const supportedPaymentMethods: Record<
      string,
      Stripe.Checkout.SessionCreateParams.PaymentMethodType[]
    > = {
      paynow: ["paynow"],
      card: ["card"],
    };

    if (!supportedPaymentMethods[paymentMethod]) {
      return res.status(400).json({ error: "Unsupported payment method" });
    }

    const toCents = (amount: any) => {
      if (typeof amount !== "number" || isNaN(amount) || amount < 0) {
        throw new Error(`Invalid amount: ${amount}`);
      }
      return Math.round(amount * 100);
    };

    let line_items: Stripe.Checkout.SessionCreateParams.LineItem[] =
      cartItems.map((item) => {
        const description = isCubiMart
          ? `Brand: ${item.brand}, Promotions: ${
              item.promotions?.join(", ") || "None"
            }`
          : `Customizations: ${
              item.customizations?.join(", ") || "None"
            }, Notes: ${item.specialNotes || "None"}`;

        return {
          price_data: {
            currency,
            product_data: {
              name: item.name,
              description,
            },
            unit_amount: toCents(item.price),
          },
          quantity: item.quantity,
        };
      });

    if (additionalCosts > 0) {
      line_items.push({
        price_data: {
          currency,
          product_data: {
            name: "Additional Charges",
            description: "Service fees or other extra costs",
          },
          unit_amount: toCents(additionalCosts),
        },
        quantity: 1,
      });
    }

    const calculatedTotal = subtotal + additionalCosts - discount;

    if (calculatedTotal < 0) {
      return res.status(400).json({ error: "Discount exceeds total cost" });
    }

    const protocol = req.headers["x-forwarded-proto"] || "http";
    const baseUrl = `${protocol}://${req.headers.host}`;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: supportedPaymentMethods[paymentMethod],
      line_items,
      mode: "payment",
      success_url: `${baseUrl}/checkout/success?sessionId={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/checkout/cancel`,
      metadata: {
        subtotal: subtotal.toFixed(2),
        additionalCosts: additionalCosts.toFixed(2),
        discount: discount.toFixed(2),
        total: calculatedTotal.toFixed(2),
      },
    });

    console.log("Checkout session created:", {
      sessionId: session.id,
      totalAmount: calculatedTotal,
      subtotal,
      additionalCosts,
      discount,
      cartItems,
    });

    res.status(200).json({
      status: "success",
      message: "Checkout session created successfully",
      sessionId: session.id,
      success_url: session.url,
    });
  } catch (error: any) {
    console.error("Stripe Error:", error.message || error);
    res.status(500).json({
      status: "error",
      message: "Failed to create checkout session",
      error: error.message || "Internal Server Error",
    });
  }
}
