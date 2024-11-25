const db = require("../models");
const { Op } = require("sequelize");

const getIncomes = async (req, res) => {
  const { month, year } = req.query;
  const userId = req.user.id;

  let whereClause = { userId };

  if (month && year) {
    whereClause.date = {
      [Op.between]: [`${year}-${month}-01`, `${year}-${month}-31`],
    };
  }

  try {
    const incomes = await db.Income.findAll({ where: whereClause });
    res.json(incomes);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const addIncome = async (req, res) => {
  const { amount, description, date } = req.body;
  const userId = req.user.id;

  try {
    const income = await db.Income.create({
      amount,
      description,
      date,
      userId,
    });
    // Perbarui saldo pengguna
    const user = await db.User.findByPk(userId);
    user.balance += amount; // Tambahkan jumlah income ke saldo
    await user.save();
    res.status(201).json(income);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { getIncomes, addIncome };
