const resp = (
  res,
  status = 200,
  message = "Successfully done",
  data,
  error,
) => {
  if (status >= 200 && status < 400)
    res.status(status).json({ status, message, data });
  else res.status(status).json({ status, message, error });
};

module.exports = { resp };
