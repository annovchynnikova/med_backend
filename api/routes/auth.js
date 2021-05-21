const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");
const authenticateJWT = require("../middleware/authenticateJWT");

router.post("/login", authController.login);
router.get("/profile", authenticateJWT.auth, authController.profile);
router.post("/logout", authenticateJWT.auth, authController.logout);

module.exports = router;
