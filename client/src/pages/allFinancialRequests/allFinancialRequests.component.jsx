import React, { useEffect, useState } from "react";
import useFinancialHelp from "../../hooks/useFinancialHelp";

const AllFinancialRequests = () => {
  const { getAllFinancialRequests, financialRequests } = useFinancialHelp();

  useEffect(() => {
    getAllFinancialRequests();
  }, []);

  return (
    <div className="pt-3">
      <h1 className="text-4xl font-bold">All recent financial requests</h1>
      <div>
        {financialRequests.map((fRequest) => (
          <div className="w-2/5 shadow-lg min-h-32 h-fit px-3 py-3 my-3 cursor-pointer hover:shadow-xl hover:translate-x-2 transition-all ease-in-out">
            <h1 className="text-3xl font-bold mt-3">{fRequest?.amount}</h1>
            <h1 className="text-xl text-gray-500 mb-3">{fRequest?.reason}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFinancialRequests;
