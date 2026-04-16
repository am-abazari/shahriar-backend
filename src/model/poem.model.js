const { DataTypes } = require("@sequelize/core");
const { sequelize } = require("@configs/sequelize.config");

const PoemModel = sequelize.define("poem", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  poet: {
    type: DataTypes.STRING,
  },
  writerID: {
    type: DataTypes.INTEGER,
  },
  voice: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = { PoemModel };
