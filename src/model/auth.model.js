const { DataTypes } = require("@sequelize/core");
const { sequelize } = require("@configs/sequelize.config");

const AuthModel = sequelize.define(
  "auth",
  {
    otp: { type: DataTypes.STRING, allowNull: true },
    expire: { type: DataTypes.DATE, allowNull: true },
    userID: { type: DataTypes.INTEGER, unique: true, allowNull: false },
  },
  { freezeTableName: true },
);

module.exports = { AuthModel };
