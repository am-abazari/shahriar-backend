const { DataTypes } = require("@sequelize/core");
const { sequelize } = require("@configs/sequelize.config");

const PoemModel = sequelize.define("poem", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  poet: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  writerID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  voice: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = { PoemModel };
