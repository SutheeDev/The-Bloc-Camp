import { BadRequestError } from "../errors/index.js";

const testUser = (req, res, next) => {
  if (req.user.testUser || req.user.testAdmin) {
    throw new BadRequestError(
      "sorry, the demo is restricted to read-only mode"
    );
  }
  next();
};

export default testUser;
