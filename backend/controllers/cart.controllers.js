const getCart = async (req, res) => {
  try {
    const user = req.user;

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const cart = user.cart;
    return res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const addItem = async (req, res) => {
  try {
    const { name, quantity, image, price, productId } = req.body;

    const user = req.user;
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const existingItem = user.cart.find(
      (p) => productId.toString() === p.id.toString()
    );
    console.log(existingItem);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      user.cart.push({ id: productId, quantity, name, image, price });
    }

    await user.save();

    return res.status(200).json({ message: "Item added to cart" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteItem = async (req, res) => {
  try {
    const { productId } = req.body;

    const user = req.user;
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.cart = user.cart.filter((p) => p.id.toString() !== productId.toString());
    await user.save();

    return res.status(200).json({ message: "Item deleted from cart" });
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Internal server error" })
  }
}

module.exports = { getCart, addItem, deleteItem };
