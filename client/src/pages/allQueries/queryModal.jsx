import { Modal } from "@mui/material";
import React from "react";

const QueryModal = ({state,toggleModal,query}) => {
  return (
    <Modal open={state} onClose={toggleModal} >
      <div>this is in more detail</div>
    </Modal>
  );
};

export default QueryModal;
