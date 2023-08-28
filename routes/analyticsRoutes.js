const express = require("express");
const {
  bloodGroupDatailsController,
} = require("../controllers/analyticsController");

const authMiddelware = (require = require("../middleware/authMiddelware"));

const router = express.Router();

// GET DONAR RECORDS //
router.get("/bloodGroups-data", authMiddelware, bloodGroupDatailsController);

module.exports = router;
