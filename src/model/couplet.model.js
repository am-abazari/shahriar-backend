const { DataTypes } = require("@sequelize/core");
const { sequelize } = require("@configs/sequelize.config");

const CoupletModel = sequelize.define("couplet", {
  poemID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  verse1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  verse2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  start_time: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  end_time: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  couplet: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = { CoupletModel };
