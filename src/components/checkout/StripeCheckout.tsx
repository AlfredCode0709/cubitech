import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not defined in environment variables.");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-02-24.acacia",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { cartItems, currency, paymentMethod } = req.body;

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

    // Calculate total amount
    const totalAmount = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );

    /* Stripe expects amount in cents (multiply by 100) */
    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] =
      cartItems.map((item) => ({
        price_data: {
          currency,
          product_data: {
            name: item.name,
            description: item.customizations.length
              ? `Customizations: ${item.customizations.join(", ")}`
              : undefined,
          },
          unit_amount: Math.round(
            item.price * 100,
          ) /* Convert price to cents */,
        },
        quantity: item.quantity,
      }));

    const protocol = req.headers["x-forwarded-proto"] || "http";
    const baseUrl = `${protocol}://${req.headers.host}`;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: supportedPaymentMethods[paymentMethod],
      line_items,
      mode: "payment",
      success_url: `${baseUrl}/success`,
      cancel_url: `${baseUrl}/cancel`,
    });

    res.status(200).json({ sessionId: session.id, totalAmount });
  } catch (error: any) {
    console.error("Stripe Error:", error.message || error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
}
