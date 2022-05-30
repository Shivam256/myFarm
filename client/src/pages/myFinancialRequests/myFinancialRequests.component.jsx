import React, { useState, useEffect } from "react";
import UserFinancialRequestModal from "./userFinancialRequestModal";

import useFinancialHelp from "../../hooks/useFinancialHelp";

const MyFinancialRequests = () => {
  const [financialModalState, setFinancialModalState] = useState({
    open: false,
    request: null,
  });
  const { userFinancialRequests, getUserFinancialRequests } =
    useFinancialHelp();

  const toggleFinancialModal = (request) => {
    if (request) {
      setFinancialModalState({
        open: !financialModalState.open,
        request: request,
      });
    } else {
      financialModalState({ ...financialModalState, open: false });
    }
  };

  useEffect(() => {
    getUserFinancialRequests();
  }, []);

  return (
    <div className="pt-3">
      <h1 className="text-4xl font-bold">My financial requests</h1>
      <div>
        {userFinancialRequests.map((fRequest) => (
          <div
            className="w-2/5 shadow-lg min-h-32 h-fit px-3 py-3 my-3 cursor-pointer hover:shadow-xl hover:translate-x-2 transition-all ease-in-out"
            key={fRequest}
            onClick={() => {
              toggleFinancialModal(fRequest);
            }}
          >
            <h1 className="text-3xl font-bold mt-3">{fRequest?.amount}</h1>
            <h1 className="text-xl text-gray-500 mb-3">{fRequest?.reason}</h1>
            <div>{fRequest?.response.length} messages</div>
          </div>
        ))}
      </div>
      <UserFinancialRequestModal
        state={financialModalState.open}
        toggleModal={toggleFinancialModal}
        request={financialModalState.request}
      />
    </div>
  );
};

export default MyFinancialRequests;
