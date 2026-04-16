// model
const { CoupletModel } = require("@model/couplet.model");
const { PoemModel } = require("@model/poem.model");

// messages
const { CoupletMessage } = require("@message/couplet.message");

const CreateCouplet = async (dto) => {
  const { poemID, verse1, verse2, start_time, end_time, couplet } = dto;
  const poem = await PoemModel.findOne({
    raw: true,
    where: {
      id: poemID,
    },
  });

  if (!poem) throw { status: 404, message: CoupletMessage.PoemNotFound };

  const foundCouplet = await CoupletModel.findOne({
    raw: true,
    where: {
      poemID,
      couplet,
    },
  });
  if (foundCouplet)
    throw { status: 409, message: CoupletMessage.DuplicateCouplet };

  const result = await CoupletModel.create({
    poemID,
    verse1,
    verse2,
    start_time,
    end_time,
    couplet,
  });
  return result.dataValues;
};

module.exports = { CreateCouplet };
