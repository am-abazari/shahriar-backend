const { CoupletModel } = require("@model/couplet.model");
const { PoemModel } = require("@model/poem.model");
const { UserModel } = require("@model/user.model");

const CreateRelations = () => {
  PoemModel.hasMany(CoupletModel, {
    foreignKey: {
      name: "poemID",
      onDelete: "CASCADE",
    },
    sourceKey: "id",
  });

  UserModel.hasMany(PoemModel, {
    foreignKey: {
      name: "writerID",
      onDelete: "SET NULL",
    },
    sourceKey: "id",
  });
};

module.exports = { CreateRelations };
