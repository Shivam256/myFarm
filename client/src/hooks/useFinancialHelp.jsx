import React, { useCallback } from "react";
import axios from "../utils/axiosInstance";
import { useSnackbar } from "notistack";

import { useSelector, useDispatch } from "react-redux";
import useAuth from "./useAuth";
import { getFinancialRequestsSuccess,getUserFinancialRequestsSuccess } from "../redux/slices/financialHelp";

const useFinancialHelp = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { financialRequests,userFinancialRequests } = useSelector((state) => state.financialHelp);
  const dispatch = useDispatch();

  const { user } = useAuth();

  const postFinancialHelp = useCallback(async (fData) => {
    const response = await axios.post("/financialHelp", fData);
    console.log(response, "i am post financial help response");
    if (!response.data.ok) {
      enqueueSnackbar(response.data.message, { variant: "error" });
      return;
    } else {
      enqueueSnackbar(response.data.message, { variant: "success" });
    }
  }, []);

  const getAllFinancialRequests = useCallback(async () => {
    if (financialRequests.length === 0) {
      const response = await axios.get("/financialHelp");
      console.log(response, "this is get all financial request respinse");
      if (!response.data.ok) {
        enqueueSnackbar(response.data.message, { variant: "error" });
        return;
      }

      dispatch(getFinancialRequestsSuccess(response.data.fRequests));
    }
  }, []);

  const getUserFinancialRequests = useCallback(async () => {
    if (!(userFinancialRequests.length > 0)) {
      const response = await axios.get(`/financialHelp/author/${user._id}`);
      console.log(response, "this is user requests response");

      if (!response.data.ok) {
        enqueueSnackbar(response.data.message, { variant: "error" });
        return;
      }
      dispatch(getUserFinancialRequestsSuccess(response.data.fRequests));
    }
  });

  const respondToRequest = useCallback(async (data, requestId) => {
    const response = await axios.post(`/financialHelp/response/${requestId}`, data);
    console.log(response, "i am request response");
    if (!response.data.ok) {
      enqueueSnackbar(response.data.message, { variant: "error" });
      return;
    } else {
      enqueueSnackbar(response.data.message, { variant: "success" });
    }
  });




  return {
    postFinancialHelp,
    financialRequests,
    getAllFinancialRequests,
    userFinancialRequests,
    respondToRequest,
    getUserFinancialRequests
  };
};

export default useFinancialHelp;
