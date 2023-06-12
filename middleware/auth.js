const auth = (req, res, next) => {
  console.log("authenticated user");
  next();
};
export default auth;
