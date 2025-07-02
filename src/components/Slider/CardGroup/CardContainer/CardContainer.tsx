import { MasterContext } from "@/context/MasterContext";
import React, { useContext, useEffect } from "react";
import NewsCard from "../CardDetails/NewsCard/NewsCard";
import HeadlinesCard from "../CardDetails/HeadlinesCard/HeadlinesCard";
import Pagination from "../Pagination/Pagination";

interface CardGroupProps {
  category: string; // "news" or "headlines"
  activeTab: string; // e.g. "general", "sports", etc.
}

const CardContainer: React.FC<CardGroupProps> = ({ category, activeTab }) => {
  const { news, setTrendingOptions, setNewsOrHeadlines } = useContext(MasterContext);

  useEffect(() => {
    setNewsOrHeadlines(category);
    setTrendingOptions(activeTab);
  }, [category, activeTab, setNewsOrHeadlines, setTrendingOptions]);

  return (
    <>
      <Pagination />
      <div>
        <h2 className="text-2xl text-yellow-500 font-bold ml-16 my-8">Popular News</h2>
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 lg:mx-14 mx-4">{news.filter((article) => article.source).map((article, index) => (category === "news" ? <NewsCard key={index} article={article} /> : <HeadlinesCard key={index} article={article} />))}</div>
      </div>
    </>
  );
};

export default CardContainer;
