// service
const PoemService = require("@service/poem.service");

// message
const { PoemMessage } = require("@message/poem.message");

const CreatePoem = async (req, res, next) => {
  try {
    const { name, description, poet, voice } = req.body;
    const data = await PoemService.CreatePoem({
      name,
      description,
      poet,
      writerID: req?.user?.id,
      voice,
    });

    res.status(201).json({ status: 201, message: PoemMessage.Created, data });
  } catch (error) {
    next(error);
  }
};

module.exports = { CreatePoem };
