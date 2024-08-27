const express = require("express");

const protectedRoute = require("../lib/middlewares/protectedRoute")

const { getCart, addItem, deleteItem } = require("../controllers/cart.controllers.js");

const router = express.Router();

router.get("/", protectedRoute, getCart)
router.post("/", protectedRoute, addItem)
router.delete("/", protectedRoute, deleteItem)

module.exports = router