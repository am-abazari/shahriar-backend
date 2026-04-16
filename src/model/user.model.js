const { DataTypes } = require("@sequelize/core");
const { sequelize } = require("@configs/sequelize.config");

const UserModel = sequelize.define("user", {
  name: { type: DataTypes.STRING, allowNull: false },
  username: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: true },
  bio: { type: DataTypes.TEXT, allowNull: true },
});

module.exports = { UserModel };
