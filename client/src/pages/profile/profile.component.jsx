import { Avatar } from "@mui/material";
import React, { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import useQuery from "../../hooks/useQuery";
import useFinancialHelp from "../../hooks/useFinancialHelp";

const Profile = () => {
  const { user } = useAuth();
  const { userQueries, getUserQueries } = useQuery();
  const { userFinancialRequests, getUserFinancialRequests } =
    useFinancialHelp();

  useEffect(() => {
    if (userQueries.length === 0) {
      getUserQueries();
    }
  }, [userQueries]);

  useEffect(() => {
    if (userFinancialRequests.length === 0) {
      getUserFinancialRequests();
    }
  }, [userFinancialRequests]);

  return (
    <div className="pt-5">
      <h1 className="text-3xl font-bold">User Profile</h1>
      <div className="flex gap-5 mt-5 w-2/5 p-5 rounded-lg shadow-lg">
        <Avatar sx={{ width: 100, height: 100 }} />
        <div className="flex flex-col">
          <h1 className="text-2xl"> Name: {user?.name}</h1>
          <h1 className="text-lg text-gray-700"> Email: {user?.email}</h1>
          <div className="flex gap-5 mt-3">
            <h1 className="text-md text-gray-600">
              {userQueries.length} queries
            </h1>
            <h1 className="text-md text-gray-600">
              {userFinancialRequests.length} financial requests
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="text-2xl font-medium">Extra profile data:</h1>
      </div>
    </div>
  );
};

export default Profile;
