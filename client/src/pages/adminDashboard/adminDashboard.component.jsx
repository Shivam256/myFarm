import React from "react";
import { Grid } from "@mui/material";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

//view all queries
//view all contact requests
//view all financial requests
//view all users

const AdminDashboard = () => {
  return (
    <div className="pt-5 ">
      <h1 className="text-3xl font-bold mb-5">Admin dashboard</h1>
      <Grid container spacing={5} sx={{ height: "60vh" }}>
        <Grid item md={4}>
          <Link to="/admin/queries">
            <div className="px-5 py-5 rounded-lg shadow-lg flex items-center gap-5 hover:shadow-xl cursor-pointer ">
              <Icon
                icon="bi:question-circle-fill"
                width="40px"
                height="40px"
                color="#00AA80"
              />
              <div>
                <h1 className="text-xl">View all queries</h1>
                <h1 className="text-sm text-gray-400">
                  View all the recent queries posted by users
                </h1>
              </div>
            </div>
          </Link>
        </Grid>
        <Grid item md={4}>
          <Link to="/admin/financialRequests">
            <div className="px-5 py-5 rounded-lg shadow-lg flex items-center gap-5 hover:shadow-xl cursor-pointer ">
              <Icon
                icon="bx:rupee"
                width="40px"
                height="40px"
                color="#FF8D39"
              />
              <div>
                <h1 className="text-xl">View all financial requests</h1>
                <h1 className="text-sm text-gray-400">
                  View all the recent queries posted by users
                </h1>
              </div>
            </div>
          </Link>
        </Grid>{" "}
        <Grid item md={4}>
          <Link to="/admin/contacts">
            <div className="px-5 py-5 rounded-lg shadow-lg flex items-center gap-5 hover:shadow-xl cursor-pointer ">
              <Icon
                icon="bxs:phone"
                width="40px"
                height="40px"
                color="#009688"
              />
              <div>
                <h1 className="text-xl">View all contact requests</h1>
                <h1 className="text-sm text-gray-400">
                  View all the recent queries posted by users
                </h1>
              </div>
            </div>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminDashboard;
