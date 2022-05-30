import { Avatar, Modal, styled, TextField } from "@mui/material";
import React, { useState } from "react";
import CustomButton from "../../components/customButton/customButton.component";
import useQuery from "../../hooks/useQuery";

const ModalContainer = styled("div")(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: "30vw",
  height: "fit-content",
  backgroundColor: "white",
  outline: "none",
  borderRadius: 5,
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  maxHeight:"85vh",
  overflowY:"scroll"
}));

const UserQueryModal = ({ state, toggleModal, query }) => {
  const [responseText, setResponseText] = useState("");

  const handleChange = (e) => {
    setResponseText(e.target.value);
  };

  const { respondToQuery } = useQuery();

  const handleClick = () => {
    respondToQuery({ text: responseText }, query?._id);
    setResponseText("");
    toggleModal();
    window.location.reload();
  };

  return (
    <Modal open={state} onClose={toggleModal}>
      <ModalContainer>
        <h1 className="text-3xl">{query?.title}</h1>
        <h1 className="text-xl">{query?.description}</h1>
        <div className="mt-3">
          <h1 className="font-bold">Messages</h1>
          <div>
            {query?.response?.map((response) => (
              <div className="flex gap-3 border-2 border-gray-300 rounded p-2 my-2">
                <Avatar>{response?.author?.name[0]}</Avatar>
                <div>
                  <h1 className="text-sm font-bold">{response?.author?.name}</h1>
                  <h1 className="text-md text-gray-700">{response?.text}</h1>
                </div>
              </div>
            ))}
          </div>
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

export default UserQueryModal;
