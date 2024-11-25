const db = require("../models");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

const register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const userExists = await db.User.findOne({ where: { username } });

    if (userExists) {
      return res.status(400).json({ message: "Username sudah digunakan" });
    }

    const user = await db.User.create({ username, password });

    res.status(201).json({
      id: user.id,
      username: user.username,
      token: generateToken(user.id),
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  // Validasi input
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username dan password harus diisi" });
  }

  try {
    const user = await db.User.findOne({ where: { username } });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        id: user.id,
        username: user.username,
        balance: user.balance, // Tambahkan saldo pengguna ke respons
        token: generateToken(user.id),
      });
    } else {
      res.status(401).json({ message: "Username atau password tidak valid" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { register, login };
