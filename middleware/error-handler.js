import { StatusCodes } from "http-status-codes";

const ErrorHandlerMiddleware = (err, req, res, next) => {
  const defaultError = {
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "There was an error. Please try again later",
  };

  if (err.name === "ValidationError") {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(", ");
  }

  if (err.code && err.code === 11000) {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.msg = `This ${Object.keys(
      err.keyValue
    )} has already been taken`;
  }

  res.status(defaultError.statusCode).json({ msg: defaultError.msg });
};

export default ErrorHandlerMiddleware;
