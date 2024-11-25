const db = require("../models");
const { Op } = require("sequelize");
const moment = require("moment");

const getMonthlyReport = async (req, res) => {
  try {
    const { month, year } = req.query;
    const userId = req.user.id;

    // Validasi parameter query
    if (!month || !year) {
      return res.status(400).json({ message: "Month and year are required." });
    }

    const monthNumber = parseInt(month, 10);
    const yearNumber = parseInt(year, 10);

    if (
      isNaN(monthNumber) ||
      isNaN(yearNumber) ||
      monthNumber < 1 ||
      monthNumber > 12 ||
      year.length !== 4
    ) {
      return res.status(400).json({ message: "Invalid month or year format." });
    }

    // Format tanggal menggunakan Moment.js
    const startDate = moment(
      `${yearNumber}-${monthNumber}-01`,
      "YYYY-MM-DD",
      true
    );
    const endDate = moment(startDate).endOf("month");

    if (!startDate.isValid() || !endDate.isValid()) {
      return res.status(400).json({ message: "Invalid date range." });
    }

    console.log("Start Date:", startDate.format("YYYY-MM-DD"));
    console.log("End Date:", endDate.format("YYYY-MM-DD"));

    // Query semua transaksi Income
    const incomes = await db.Income.findAll({
      where: {
        userId,
        date: {
          [Op.gte]: startDate.format("YYYY-MM-DD"),
          [Op.lte]: endDate.format("YYYY-MM-DD"),
        },
      },
      attributes: ["id", "amount", "description", "date"], 
      order: [["date", "ASC"]],
    });

    // Query semua transaksi Expense
    const expenses = await db.Expense.findAll({
      where: {
        userId,
        date: {
          [Op.gte]: startDate.format("YYYY-MM-DD"),
          [Op.lte]: endDate.format("YYYY-MM-DD"),
        },
      },
      attributes: ["id", "amount", "description", "date"],
      order: [["date", "ASC"]],
    });

    // Hitung total pemasukan dan pengeluaran
    const totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);
    const totalExpense = expenses.reduce(
      (sum, expense) => sum + expense.amount,
      0
    );

    // Respon dengan laporan lengkap
    res.status(200).json({
      month: startDate.format("MM"),
      year: startDate.format("YYYY"),
      transactions: {
        incomes,
        expenses,
      },
      totals: {
        totalIncome,
        totalExpense,
        balance: totalIncome - totalExpense,
      },
    });
  } catch (error) {
    console.error("Error in getMonthlyReport:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { getMonthlyReport };
