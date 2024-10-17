const express = require("express");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const path = require("path");

const dbConnection = require("./db.js");

const app = express();

dbConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "../client/dist")));
console.log(__dirname)

app.use("/api/auth", require("./routes/auth.routes.js"))
app.use("/api/cart", require("./routes/cart.routes.js"))
app.use("/api/payment", require("./routes/payment.routes.js"))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
