import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

console.log(
  "Stripe Secret Key:",
  process.env.STRIPE_SECRET_KEY ? "Loaded" : "Missing",
);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
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
    const { cartItems, paymentMethod } = req.body;

    /* Format items for Stripe */
    const lineItems = cartItems.map((item: any) => ({
      price_data: {
        currency: "sgd",
        product_data: { name: item.name },
        // unit_amount: item.price * 100, /* Convert to cents */
        unit_amount: 1 * 10,
      },
      quantity: item.quantity,
    }));

    /* Use Correct Payment Method Type */
    const allowedPaymentMethods: Stripe.Checkout.SessionCreateParams.PaymentMethodType[] =
      paymentMethod === "payNow" ? ["paynow"] : ["card"];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: allowedPaymentMethods,
      line_items: lineItems,
      mode: "payment",
      success_url: `${req.headers.origin}/checkout/success`,
      cancel_url: `${req.headers.origin}/checkout/cancel`,
    });

    res.status(200).json({ sessionId: session.id });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
