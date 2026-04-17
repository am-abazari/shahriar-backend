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
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  end_time: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  couplet: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  show: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

module.exports = { CoupletModel };
