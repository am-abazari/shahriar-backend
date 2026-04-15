const NotFoundError = (req, res, next) => {
  res.status(404).json({
    status: 404,
    message: "api route not found, check request method or url",
    method: req.method,
    url: req.url,
  });
};

const FinalError = (err, req, res, next) => {
  const status = err.status ?? err.statusCode ?? 500;
  const message = err.message ?? "Internal Server Error";
  const errors = err.errors;
  res.status(status).json({
    status,
    message,
    errors,
  });
};

module.exports = { NotFoundError, FinalError };
