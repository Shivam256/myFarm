import React from "react";
import { Grid,styled } from "@mui/material";




const Explore = () => {
  return (
    <div className="pt-5 w-screen">
      <h1 className="text-4xl font-bold">Explore</h1>
      <div className="w-4/5">
      <Grid container spacing={5}>
        <Grid item md={6}>
          <div className="w-full h-44 shadow-lg "></div>
        </Grid>
        <Grid item md={6}>
          <div className="w-full h-44 shadow-lg "></div>
        </Grid>
        <Grid item md={6}>
          <div className="w-full h-44 shadow-lg "></div>
        </Grid>
        <Grid item md={6}>
          <div className="w-full h-44 shadow-lg "></div>
        </Grid>
      </Grid>
      </div>
    </div>
  );
};

export default Explore;
