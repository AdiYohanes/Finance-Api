const db = require("../models");
const { Op } = require("sequelize");

const getExpenses = async (req, res) => {
  const { month, year } = req.query;
  const userId = req.user.id;

  let whereClause = { userId };

  if (month && year) {
    whereClause.date = {
      [Op.between]: [`${year}-${month}-01`, `${year}-${month}-31`],
    };
  }

  try {
    const expenses = await db.Expense.findAll({ where: whereClause });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const addExpense = async (req, res) => {
  const { amount, description, date } = req.body;
  const userId = req.user.id;

  try {
    const expense = await db.Expense.create({
      amount,
      description,
      date,
      userId,
    });
    // Perbarui saldo pengguna
    const user = await db.User.findByPk(userId);
    user.balance -= amount; // Kurangi jumlah pengeluaran dari saldo
    await user.save();
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { getExpenses, addExpense };
