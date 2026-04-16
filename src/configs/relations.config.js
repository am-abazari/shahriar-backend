const { CoupletModel } = require("@model/couplet.model");
const { PoemModel } = require("@model/poem.model");
const { UserModel } = require("@model/user.model");
const { AuthModel } = require("../model/auth.model");

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
    },
    sourceKey: "id",
  });

  UserModel.hasOne(AuthModel, {
    foreignKey: {
      name: "userID",
      onDelete: "CASCADE",
    },
    sourceKey: "id",
  });
};

module.exports = { CreateRelations };
