const errorHandler = (err, req, res, next) => {
  switch (parseInt(err.message)) {
    case 508:
      res
        .status(err.message)
        .send({ title: "Authentication failed", stackTrace: err.stack });
      break;
    case 509:
      res
        .status(err.message)
        .send({ title: "Invalid Request", stackTrace: err.stack });
      break;
    case 510:
      res
        .status(err.message)
        .send({ title: "Invalid Data", stackTrace: err.stack });
      break;
    case 511:
      res
        .status(err.message)
        .send({ title: "Invalid List index", stackTrace: err.stack });
      break;
    default:
      res
        .status(500)
        .send({ title: "Internal Server Error", stackTrace: err.stack });
  }
};

module.exports = errorHandler;
