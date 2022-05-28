import React, { useCallback } from "react";
import axios from "../utils/axiosInstance";
import { useSnackbar } from "notistack";

import { useSelector, useDispatch } from "react-redux";
import { getFinancialRequestsSuccess } from "../redux/slices/financialHelp";

const useFinancialHelp = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { financialRequests } = useSelector((state) => state.financialHelp);
  const dispatch = useDispatch();

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

  return {
    postFinancialHelp,
    financialRequests,
    getAllFinancialRequests
  };
};

export default useFinancialHelp;
