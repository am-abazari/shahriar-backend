// service
const CoupletService = require("@service/couplet.service");

// message
const { CoupletMessage } = require("@message/couplet.message");

const CreateCouplet = async (req, res, next) => {
  try {
    const { poemID, verse1, verse2, start_time, end_time, couplet } = req.body;
    const data = await CoupletService.CreateCouplet({
      poemID,
      verse1,
      verse2,
      start_time,
      end_time,
      couplet,
    });

    res
      .status(201)
      .json({ status: 201, message: CoupletMessage.Created, data });
  } catch (error) {
    next(error);
  }
};

module.exports = { CreateCouplet };
