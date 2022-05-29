import React, { useEffect } from "react";
import useNews from "../../hooks/useNews";

const News = () => {
  const { getNews, news } = useNews();

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="pt-3">
      <h1 className="text-3xl font-bold">Top Farming News</h1>
      <div className="w-full flex flex-col">
        {news.map((n) => (
          <a href={n?.url} target="_blank">
            <div className="my-5 w-3/5 h-fit shadow-lg p-3 flex rounded gap-5">
              <img
                src={n?.urlToImage}
                className="w-56 min-h-full bg-center bg-cover rounded"
                alt=""
              />
              <div>
                <h1 className="text-2xl font-bold">{n?.title}</h1>

                <p className="text-md text-gray-500">{n?.description}</p>
                {/* <p>{n?.content}</p> */}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default News;
