import CustomError from "./custom-error.js";
import { StatusCodes } from "http-status-codes";

class NotFoundError extends CustomError {
  constructure(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}
export default NotFoundError;
