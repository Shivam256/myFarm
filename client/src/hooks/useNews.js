import React, { useCallback } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";

import { useSelector, useDispatch } from "react-redux";
import { getNewsSuccess } from "../redux/slices/news";

const useNews = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { news } = useSelector((state) => state.news);

  const dispatch = useDispatch();

  const getNews = useCallback(async () => {
    if (news.length === 0) {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=Farming&apiKey=e33d63b6ee1b472f9a5a11dd245c9fb9"
      );
      console.log(response, "this is news resposne");
      if (response.data.status === "ok") {
        dispatch(getNewsSuccess(response.data.articles));
      }
    }
  }, []);

  return {
    getNews,
    news,
  };
};

export default useNews;
