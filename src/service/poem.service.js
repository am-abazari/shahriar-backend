const { PoemModel } = require("@model/poem.model");

// message
const { PoemMessage } = require("@message/poem.message");
const {
  attribute,
} = require("@sequelize/core/_non-semver-use-at-your-own-risk_/expression-builders/attribute.js");

const CreatePoem = async (dto) => {
  const { name, description, poet, writerID, voice } = dto;
  const result = await PoemModel.create({
    name,
    description,
    poet,
    writerID,
    voice,
  });
  return result.dataValues;
};

const GetPoem = async (dto) => {
  const poem = await PoemModel.findOne({
    where: {
      id: dto.id,
    },
    attributes: {
      exclude: ["updatedAt"],
    },
  });

  if (!poem) throw { status: 404, message: PoemMessage.NotFound };
  let couplets = await poem.getCouplets({
    raw: true,
    order: ["couplet"],
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });

  return { ...poem.dataValues, couplets };
};

module.exports = { CreatePoem, GetPoem };
