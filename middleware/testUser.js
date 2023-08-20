import { BadRequestError } from "../errors";

const testUser = (req, res, next) => {
  if (req.user.testUser) {
    throw new BadRequestError(
      "sorry, the demo is restricted to read-only mode"
    );
  }
  next();
};

export default testUser;
