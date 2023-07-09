import { UnauthenticatedError } from "../errors/index.js";

const checkPermission = (requestUser) => {
  if (requestUser.role === "admin") return;
  throw new UnauthenticatedError(
    `You're not authorized to access this route: ${requestUser.role}`
  );
};

export default checkPermission;
