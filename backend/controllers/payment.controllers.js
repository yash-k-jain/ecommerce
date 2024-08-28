const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const checkoutSession = async (req, res) => {
  const { products } = req.body;

  const user = req.user;
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

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
    name: user.name,
    address: {
      line1: user.address.line1 || "NOT AVAILABLE",
      postal_code: user.address.postalCode || "NOT AVAILABLE",
      city: user.address.city || "NOT AVAILABLE",
      state: user.address.state || "NOT AVAILABLE",
      country: user.address.country || "NOT AVAILABLE",
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

  user.cart = [];
  await user.save();

  res.status(200).json({ id: session.id });
};

module.exports = { checkoutSession };
