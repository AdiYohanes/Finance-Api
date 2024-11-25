module.exports = (sequelize, DataTypes) => {
  const Income = sequelize.define("Income", {
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0,
        isFloat: true,
      },
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 255],
      },
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Income;
};
