import React, { useCallback } from "react";
import axios from "../utils/axiosInstance";
import { useSnackbar } from "notistack";

import { useSelector, useDispatch } from "react-redux";
import {
  getQueriesSuccess,
  getUserQueriesSuccess,
} from "../redux/slices/query";
import useAuth from "./useAuth";

const useQuery = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { queries, userQueries } = useSelector((state) => state.query);

  const { user } = useAuth();
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

  const getUserQueries = useCallback(async () => {
    if (!(userQueries.length > 0)) {
      const response = await axios.get(`/query/author/${user._id}`);
      console.log(response, "this is user queries response");

      if (!response.data.ok) {
        enqueueSnackbar(response.data.message, { variant: "error" });
        return;
      }
      dispatch(getUserQueriesSuccess(response.data.queries));
    }
  });

  const respondToQuery = useCallback(async (data, queryId) => {
    const response = await axios.post(`/query/response/${queryId}`, data);
    console.log(response, "i am response query response");
    if (!response.data.ok) {
      enqueueSnackbar(response.data.message, { variant: "error" });
      return;
    } else {
      enqueueSnackbar(response.data.message, { variant: "success" });
    }
  });

  return {
    postQuery,
    queries,
    getAllQueries,
    userQueries,
    getUserQueries,
    respondToQuery
  };
};

export default useQuery;
