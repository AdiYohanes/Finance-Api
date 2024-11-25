const express = require('express');
const router = express.Router();
const { getExpenses, addExpense } = require('../controllers/expenseController');
const { protect } = require('../middleware/authMiddleware');

// Get Expenses
router.get('/', protect, getExpenses);

// Add Expense
router.post('/', protect, addExpense);

module.exports = router;
