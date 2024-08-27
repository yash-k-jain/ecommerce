const express = require("express");

const { register, login, logout, getMe } = require("../controllers/auth.controllers.js");

const protectedRoute = require("../lib/middlewares/protectedRoute.js")

const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)

router.get("/me", protectedRoute, getMe)

module.exports = router