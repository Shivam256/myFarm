import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/svgs/logo.svg";
import { Icon } from "@iconify/react";
import Popover from "@mui/material/Popover";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import CustomButton from "../customButton/customButton.component";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const { logout, user } = useAuth();

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="w-full bg-white fixed top-2 h-12 flex  py-2 items-center justify-between gap-5 px-10">
      <Link
        className="flex items-center gap-5 h-full "
        to={user.isAdmin ? "/admin/dashboard" : "/client/home"}
      >
        <Logo width="40px" height="40px" />
        <h1 className="text-2xl">MyFarm</h1>
      </Link>

      <div className="flex gap-5">
        {user.isAdmin ? (
          <div className="flex items-center gap-8">
            <h1 className="text-green-600 font-bold">ADMIN</h1>
            <CustomButton
              onClick={() => {
                logout();
              }}
            >
              LOGOUT
            </CustomButton>
          </div>
        ) : (
          <>
            <button className="border-2 border-green-600 p-2 px-10 rounded-lg text-green-600">
              CHOOSE LANGUAGE
            </button>
            <Icon
              className="cursor-pointer"
              icon="gg:profile"
              width="40px"
              height="40px"
              color="#00664E"
              onClick={handleClick}
            />
          </>
        )}
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          sx={{
            marginTop: "5px",
          }}
        >
          <div className="flex flex-col w-56 py-3 px-1">
            <Link to="/client/queries">
              <div className="p-2 hover:bg-green-500 rounded hover:text-white cursor-pointer">
                MY QUERIES
              </div>
            </Link>
            <Link to="/client/financialRequests">
              <div className="p-2 hover:bg-green-500 rounded hover:text-white cursor-pointer">
                MY REQUESTS
              </div>
            </Link>
            <Link to="/client/profile">
              <div className="p-2 hover:bg-green-500 rounded hover:text-white cursor-pointer">
                MY PROFILE
              </div>
            </Link>

            <div
              className="p-2 hover:bg-green-500 rounded hover:text-white cursor-pointer"
              onClick={() => {
                logout();
              }}
            >
              LOGOUT
            </div>
          </div>
        </Popover>
      </div>
    </div>
  );
};

export default Header;
