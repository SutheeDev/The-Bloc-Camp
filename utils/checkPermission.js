import { UnauthenticatedError } from "../errors";

const checkPermission = (requestUser) => {
  if (requestUser.role === "admin") return;
  throw new UnauthenticatedError("You're not authorized to access this route");
};

export default checkPermission;
