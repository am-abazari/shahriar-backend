// service
const PoemService = require("@service/poem.service");

// message
const { PoemMessage } = require("@message/poem.message");

const CreatePoem = async (req, res, next) => {
  try {
    const data = await PoemService.CreatePoem();

    res.status(201).json({ status: 201, message: PoemMessage.Created, data });
  } catch (error) {
    next(error);
  }
};

module.exports = { CreatePoem };
