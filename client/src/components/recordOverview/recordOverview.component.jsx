import React from "react";

//state
//district
//market
//commodity
//variety
//arrival_date
//min_price
//max_price
//modal_price

const RecordOverview = ({ record }) => {
  return (
    <div className="mr-10 mb-10 shadow-lg p-5 rounded-lg hover:shadow-xl">
      <h1 className="text-xl font-semibold">{record?.commodity}</h1>
      <h1 className="text-xl text-gray-600">{record?.variety}</h1>
      <h1 className="text-sm text-gray-500">{record?.district} district</h1>

      <div className="my-3">
        <h1 className="text-lg font-semibold text-[#00AA80]">Max: 	&#8377; {record?.max_price}</h1>
        <h1 className="text-lg font-semibold text-[#6C63FF] ">Modal: 	&#8377; {record?.modal_price}</h1>
        <h1 className="text-lg font-semibold text-[#FF8D39]"> Min: 	&#8377; {record?.min_price}</h1>
      </div>
      <h1 className="text-md text-purple-600 font-semibold border border-purple-600 w-fit px-5 py-1 rounded-2xl">
        {record?.market} market
      </h1>
    </div>
  );
};

export default RecordOverview;
