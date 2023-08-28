const express = require("express");
const {
  registerController,
  loginController,
  currentUserController,
} = require("../controllers/authController");
const authMiddelware = require("../middleware/authMiddelware");
const router = express.Router();

//Routes

//REGISTER || POST
router.post("/register", registerController);
// LOGIN || POST
router.post("/login", loginController);

// GET CURRENT USER || GET
router.get("/current-user", authMiddelware, currentUserController);

module.exports = router;
