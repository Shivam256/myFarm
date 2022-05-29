import React, { useCallback } from "react";
import axios from "../utils/axiosInstance";
import { useSnackbar } from "notistack";

import { useSelector, useDispatch } from "react-redux";
import { getContactsSuccess } from "../redux/slices/contact";

const useContact = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { contacts } = useSelector((state) => state.contact);

  const dispatch = useDispatch();
  const postContactRequest = useCallback(async (contactData) => {
    const response = await axios.post("/contact", contactData);
    if (!response.data.ok) {
      enqueueSnackbar(response.data.message, { variant: "error" });
      return;
    } else {
      enqueueSnackbar(response.data.message, { variant: "success" });
    }
  });

  const getAllContacts = useCallback(async () => {
    if (!(contacts.length > 0)) {
      const response = await axios.get("/contact");
      console.log(response, "this is all contact response");

      if (!response.data.ok) {
        enqueueSnackbar(response.data.message, { variant: "error" });
        return;
      }
      dispatch(getContactsSuccess(response.data.contacts));
    }
  }, []);

  return {
    postContactRequest,
    contacts,
    getAllContacts,
  };
};

export default useContact;
