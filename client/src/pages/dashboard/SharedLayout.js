import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <h2>Shared Layout</h2>
      <Outlet />
    </>
  );
};
export default SharedLayout;
