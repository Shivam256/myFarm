import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const MainLayout = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    } else {
      if (pathname === "/") {
        navigate("/client/home");
      } else {
        navigate(pathname);
      }
    }
  }, [isLoggedIn]);

  return (
    <div>
      header
      <Outlet />
    </div>
  );
};

export default MainLayout;
