const express = require("express");
const router = express.Router();
const { getBalance } = require("../controllers/balanceController");
const { protect } = require("../middleware/authMiddleware");

// Get Balance
router.get("/", protect, getBalance);

module.exports = router;
