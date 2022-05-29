import { Modal, styled } from "@mui/material";
import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import CustomTextField from "../../components/customTextField/customTextField.component";
import CustomButton from "../../components/customButton/customButton.component";

import useContact from "../../hooks/useContact";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const contactSchema = yup.object({
  phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
  email: yup.string().email(),
  reason:yup.string()
});

const ModalContainer = styled("div")(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: "30vw",
  height: "fit-content",
  backgroundColor: "white",
  outline: "none",
  borderRadius: 10,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "40px",
  padding: "20px",
}));

const ContactModal = ({ state, toggleModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const { postContactRequest } = useContact();

  const handleContact = (data) => {
    console.log(data);
    postContactRequest(data);
    reset({ phone: "", email: "" });
    toggleModal();
  };

  return (
    <Modal open={state} onClose={toggleModal}>
      <ModalContainer>
        <div>
          <h1 className="text-3xl font-bold">Fill your contact details!</h1>
          <h1 className="text-xl text-gray-600">
            We will get in touch with you soon!
          </h1>
        </div>
        <form
          className="w-full flex flex-col items-center gap-3"
          onSubmit={handleSubmit(handleContact)}
        >
          <CustomTextField
            label="Phone Number"
            name="phone"
            register={register}
            errors={errors}
            inverted
          />
          <CustomTextField
            label="Email"
            name="email"
            register={register}
            errors={errors}
            inverted
          />
          <CustomTextField
            label="Reason"
            name="reason"
            register={register}
            errors={errors}
            inverted
            multiline
            rows={3}
          />
          <CustomButton type="submit">SEND</CustomButton>
        </form>
      </ModalContainer>
    </Modal>
  );
};

export default ContactModal;
