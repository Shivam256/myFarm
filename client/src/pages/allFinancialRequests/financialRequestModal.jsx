import { Modal, Avatar, styled, TextField } from "@mui/material";
import React, { useState } from "react";
import CustomButton from "../../components/customButton/customButton.component";

import useFinancialHelp from "../../hooks/useFinancialHelp";

const ModalContainer = styled("div")(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: "40vw",
  height: "fit-content",
  backgroundColor: "white",
  outline: "none",
  borderRadius: 5,
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  maxHeight: "85vh",
  overflowY: "scroll",
}));

const FinancialRequestModal = ({ state, toggleModal, request }) => {
  const [responseText, setResponseText] = useState("");

  const handleChange = (e) => {
    setResponseText(e.target.value);
  };

  const { respondToRequest } = useFinancialHelp();

  const handleClick = () => {
    respondToRequest({ text: responseText }, request?._id);
    setResponseText("");
    window.location.reload();

    toggleModal();
  };
  return (
    <Modal open={state} onClose={toggleModal}>
      <ModalContainer>
        <h1 className="text-3xl font-bold">Amount: {request?.amount}/-</h1>
        <h1 className="text-gray-500">Reason: {request?.reason}</h1>
        <div className="mt-5">
          <h1 className="font-bold">User details:</h1>
          <div>Name: {request?.author?.name}</div>
          <div>
            Email/phone: {request?.author?.email || request?.author?.phone}
          </div>
          <h1 className="mt-3">Aadhar image:</h1>
          <img
            src={request?.aadharCard}
            alt=""
            className="w-72 h-48 border-2 border-black rounded"
          />
        </div>
        <div className="mt-5">
          <h1 className="font-bold">Bank Details:</h1>
          <h1>Account No: {request?.bankDetails?.accountNo}</h1>
          <h1>IFSC CODE: {request?.bankDetails?.ifscCode}</h1>
        </div>
        <div className="mt-3 flex flex-col">
          <h1 className="font-bold">History</h1>
          <h1 className="mb-3">
            Have existing loan: {request?.existingLoan ? "yes" : "no"}
          </h1>
          {request?.existingLoan ? (
            <CustomButton
              onClick={() => {
                // window.open(request?.previousLoans[0])
                window.open(request?.previousLoans[1]);
              }}
            >
              VIEW LOAN DOCS
            </CustomButton>
          ) : null}
        </div>
        <div>
          {request?.response?.map((response) => (
            <div className="flex gap-3 border-2 border-gray-300 rounded p-2 my-2">
              <Avatar>{response?.author?.name[0]}</Avatar>
              <div>
                <h1 className="text-sm font-bold">{response?.author?.name}</h1>
                <h1 className="text-md text-gray-700">{response?.text}</h1>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 mb-5">
          <h1>Respond:</h1>
          <TextField
            sx={{ width: "100%" }}
            multiline
            rows={3}
            onChange={handleChange}
            value={responseText}
          />
        </div>
        <CustomButton onClick={handleClick}>SEND</CustomButton>
      </ModalContainer>
    </Modal>
  );
};

export default FinancialRequestModal;
