import React from "react";
import { Grid, styled } from "@mui/material";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <div className="pt-5 w-screen">
      <h1 className="text-4xl font-bold">Explore</h1>
      <div className="w-4/5">
        <Grid container spacing={5} sx={{ marginTop: "10px" }}>
          <Grid item md={4}>
            <Link to="/client/news">
              <div className="w-full h-60 shadow-lg rounded-lg overflow-hidden hover:shadow-xl group">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1579532536935-619928decd08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-center bg-cover cursor-pointer hover:scale-125 transition-all ease-in-out">
                  <div className="w-full h-full text-white flex flex-col justify-center items-center font-bold p-2 text-2xl">
                    NEWS
                  </div>
                </div>
              </div>
            </Link>
          </Grid>
          <Grid item md={4}>
            <Link to="/client/news">
              <div className="w-full h-60 shadow-lg rounded-lg overflow-hidden hover:shadow-xl group">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1518843875459-f738682238a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1142&q=80')] bg-center bg-cover cursor-pointer hover:scale-125 transition-all ease-in-out">
                  <div className="w-full h-full text-white flex flex-col justify-center items-center font-bold p-2 text-2xl">
                    MARKET RATE
                  </div>
                </div>
              </div>
            </Link>
          </Grid>{" "}
          <Grid item md={4}>
            <Link to="/client/news">
              <div className="w-full h-60 shadow-lg rounded-lg overflow-hidden hover:shadow-xl group">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1579532536935-619928decd08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-center bg-cover cursor-pointer hover:scale-125 transition-all ease-in-out">
                  <div className="w-full h-full text-white flex flex-col justify-center items-center font-bold p-2 text-2xl">
                    NEWS
                  </div>
                </div>
              </div>
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Explore;
