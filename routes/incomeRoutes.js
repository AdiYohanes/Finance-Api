const express = require('express');
const router = express.Router();
const { getIncomes, addIncome } = require('../controllers/incomeController');
const { protect } = require('../middleware/authMiddleware');

// Get Incomes
router.get('/', protect, getIncomes);

// Add Income
router.post('/', protect, addIncome);

module.exports = router;
