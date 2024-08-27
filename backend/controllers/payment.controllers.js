const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const checkoutSession = async (req, res) => {
  const { products, customer: customer_ } = req.body;

  const lineItems = products.map((product) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: product.name,
        images: [product.image],
      },
      unit_amount: Math.round(product.price * 100),
    },
    quantity: product.quantity,
  }));

  const customer = await stripe.customers.create({
    name: customer_.name,
    address: {
      line1: "510 Townsend St",
      postal_code: "110026",
      city: "San Francisco",
      state: "ALL",
      country: "IN",
    },
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    customer: customer.id,
    success_url: "http://localhost:3000",
    cancel_url: "http://localhost:3000",
  });

  const user = req.user;
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  user.cart = [];
  await user.save();

  res.status(200).json({ id: session.id });
};

module.exports = { checkoutSession };
