const db = require("../models");

const getBalance = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await db.User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const balance = user.balance;

    res.json({ balance });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { getBalance };
