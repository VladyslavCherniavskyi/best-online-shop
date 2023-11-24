import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <p>Logo</p>
      </header>
      <Outlet />
    </div>
  );
};