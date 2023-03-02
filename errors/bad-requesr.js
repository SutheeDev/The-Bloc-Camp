import CustomError from "./custom-error.js";
import { StatusCodes } from "http-status-codes";

class BadRequestError extends CustomError {
  constructure(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}
export default BadRequestError;
