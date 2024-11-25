const jwt = require("jsonwebtoken");
const db = require("../models");

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await db.User.findByPk(decoded.id, {
        attributes: ["id", "username"],
      });
      next();
    } catch (error) {
      return res.status(401).json({ message: "Token tidak valid" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "Tidak ada token, akses ditolak" });
  }
};

module.exports = { protect };
