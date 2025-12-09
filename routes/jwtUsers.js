const express = require("express");
const { registerUser, loginUser, getProfile } = require("../controller/jwtUserController");
const verifyToken = require("../middleware/verifyToken");


const router = express.Router();


// Register route
router.post("/register", registerUser);


// Login route
router.post("/login", loginUser);


// Protected route example
router.get("/profile", verifyToken, getProfile);


module.exports = router;