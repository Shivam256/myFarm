import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      header
      <Outlet />
    </div>
  );
};

export default MainLayout;
