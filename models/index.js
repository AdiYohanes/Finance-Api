const { Sequelize } = require("sequelize");
const config = require("../config/config").development;

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./user")(sequelize, Sequelize);
db.Income = require("./income")(sequelize, Sequelize);
db.Expense = require("./expense")(sequelize, Sequelize);

// Relasi antar model
db.User.hasMany(db.Income, { foreignKey: "userId", as: "incomes" });
db.Income.belongsTo(db.User, { foreignKey: "userId", as: "user" });

db.User.hasMany(db.Expense, { foreignKey: "userId", as: "expenses" });
db.Expense.belongsTo(db.User, { foreignKey: "userId", as: "user" });

module.exports = db;
