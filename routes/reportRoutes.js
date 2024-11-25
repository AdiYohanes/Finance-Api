const express = require('express');
const router = express.Router();
const { getMonthlyReport } = require('../controllers/reportController');
const { protect } = require('../middleware/authMiddleware');

// Get Monthly Report
router.get('/', protect, getMonthlyReport);

module.exports = router;
