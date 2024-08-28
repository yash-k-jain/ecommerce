const express = require("express");

const {
  register,
  login,
  logout,
  getMe,
  getAddress,
  setAddress,
} = require("../controllers/auth.controllers.js");

const protectedRoute = require("../lib/middlewares/protectedRoute.js");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

router.get("/get-address", protectedRoute, getAddress);
router.post("/set-address", protectedRoute, setAddress);

router.get("/me", protectedRoute, getMe);

module.exports = router;
