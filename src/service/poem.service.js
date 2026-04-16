const { PoemModel } = require("../model/poem.model");

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

module.exports = { CreatePoem };
