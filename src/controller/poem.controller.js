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
      voice: "/voice/" + req.file.filename,
    });

    res.status(201).json({ status: 201, message: PoemMessage.Created, data });
  } catch (error) {
    next(error);
  }
};

const GetPoem = async (req, res, next) => {
  try {
    const { id } = req.params;

    const data = await PoemService.GetPoem({ id });
    res.json({ status: 200, message: PoemMessage.Fetched, data });
  } catch (error) {
    next(error);
  }
};
const GetAllPoems = async (req, res, next) => {
  try {
    const data = await PoemService.GetAllPoems();
    res.json({ status: 200, message: PoemMessage.Fetched, data });
  } catch (error) {
    next(error);
  }
};

module.exports = { CreatePoem, GetPoem, GetAllPoems };
