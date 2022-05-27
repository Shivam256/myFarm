import React, { useCallback } from "react";
import axios from "../utils/axiosInstance";
import { useSnackbar } from "notistack";

import { useSelector, useDispatch } from "react-redux";
import { getQueriesSuccess } from "../redux/slices/query";

const useQuery = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { queries } = useSelector((state) => state.query);

  const dispatch = useDispatch();

  const postQuery = useCallback(async (queryData) => {
    const response = await axios.post("/query", queryData);
    console.log(response, "i am post query response");
    if (!response.data.ok) {
      enqueueSnackbar(response.data.message, { variant: "error" });
      return;
    } else {
      enqueueSnackbar(response.data.message, { variant: "success" });
    }
  }, []);

  const getAllQueries = useCallback(async () => {
    if (!(queries.length > 0)) {
      const response = await axios.get("/query");
      console.log(response, "this is all queries response");

      if (!response.data.ok) {
        enqueueSnackbar(response.data.message, { variant: "error" });
        return;
      }
      dispatch(getQueriesSuccess(response.data.queries));
    }
  }, []);

  return {
    postQuery,
    queries,
    getAllQueries,
  };
};

export default useQuery;
