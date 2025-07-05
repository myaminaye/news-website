import React, { useEffect, useState } from "react";
import SingleSlider from "../SingleSlider/SingleSlider";

const SliderContainer = () => {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchBannerNews = async () => {
      setLoading(true);
      // const data = newsData;

      const res = await fetch(`https://newsapi.org/v2/everything?q=general&from=2025-06-30&to=${new Date().toISOString().split("T")[0]}&sortBy=publishedAt&pageSize=10&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`);
      const data = await res.json();
      setNews(data.articles || []);
      setLoading(false);
    };
    fetchBannerNews();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mx-4 md:mx-16 my-8">
        <h2 className="text-2xl text-yellow-500 font-bold">Latest News</h2>
        <span className="text-sm text-gray-400">Slide left to see more &gt;</span>
      </div>

      <div className="w-screen overflow-x-auto">
        <div className="carousel carousel-end rounded-box w-full px-4 pb-2">
          {news.map((article, index) => (
            <SingleSlider key={index} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderContainer;
