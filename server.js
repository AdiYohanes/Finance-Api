const express = require("express");
const dotenv = require("dotenv");
const db = require("./models");

dotenv.config();

const app = express();

app.use(express.json());
// Tambahkan route dasar untuk verifikasi
app.get("/api", (req, res) => {
  res.send("API Server Berjalan dengan Baik!");
});

// Import Routes
const authRoutes = require("./routes/authRoutes");
const incomeRoutes = require("./routes/incomeRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const reportRoutes = require("./routes/reportRoutes");
const balanceRoutes = require("./routes/balanceRouter");

// Gunakan Routes
app.use("/api/auth", authRoutes);
app.use("/api/income", incomeRoutes);
app.use("/api/expense", expenseRoutes);
app.use("/api/report", reportRoutes);
app.use("/api/balance", balanceRoutes);

// Sinkronisasi Database dan Start Server
db.sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database & tables created!");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server berjalan di port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Gagal menyinkronkan database:", err);
  });
