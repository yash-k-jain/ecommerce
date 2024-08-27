const express = require("express");

const protectedRoute = require("../lib/middlewares/protectedRoute");

const { checkoutSession } = require("../controllers/payment.controllers.js");

const router = express.Router();

router.post("/create-checkout-session", protectedRoute, checkoutSession)

module.exports = router