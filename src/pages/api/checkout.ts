import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
  throw new Error("Stripe secret key is missing! Make sure to set STRIPE_SECRET_KEY.");
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2025-02-24.acacia",
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { amount, currency, paymentMethod } = req.body;

    if (!amount || !currency || !paymentMethod) {
      return res.status(400).json({ error: "Missing required parameters" });
    }

    const validPaymentMethods = ["paynow", "card"];
    if (!validPaymentMethods.includes(paymentMethod)) {
      return res.status(400).json({ error: "Invalid payment method" });
    }

    const protocol = req.headers["x-forwarded-proto"] || "http";
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || `${protocol}://${req.headers.host}`;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: [paymentMethod],
      line_items: [
        {
          price_data: {
            currency,
            product_data: { name: "Order Payment" },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${baseUrl}/success`,
      cancel_url: `${baseUrl}/cancel`,
    });

    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.error("Error creating Stripe session:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
