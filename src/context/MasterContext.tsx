import React, { createContext, ReactNode, useEffect, useState } from "react";
import { MasterDataContext, NewsItem } from "@/app/type/MasterContextType";

const defaultContextValue: MasterDataContext = {
  news: [],
  searchResult: [],
  sliderData: [],
  similarNews: [],
  loading: false,
  error: null,
  page: 0,
  query: "",
  trendingOptions: "top_rated",
  detailsType: "news",
  newsOrHeadlines: "news",
  singleNews: {},
  newsId: "",
  setPage: () => {},
  setQuery: () => {},
  setTrendingOptions: () => {},
  setDetailsType: () => {},
  setNewsOrHeadlines: () => {},
  setSingleNews: () => {},
  setNewsId: () => {},
};

export const MasterContext = createContext<MasterDataContext>(defaultContextValue);

interface MasterContextProps {
  children: ReactNode;
}

const BASE_URL = "https://newsapi.org/v2/everything";
const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY!;

const MainContext: React.FC<MasterContextProps> = ({ children }) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [newsOrHeadlines, setNewsOrHeadlines] = useState<string>("news");
  const [trendingOptions, setTrendingOptions] = useState<string>("top_rated");
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");
  const [detailsType, setDetailsType] = useState<"news" | "headlines">("news");
  const [singleNews, setSingleNews] = useState<NewsItem | {}>({});
  const [newsId, setNewsId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        console.log("start fetching");
        const response = await fetch(`${BASE_URL}?q=technology&pageSize=10&apiKey=${API_KEY}`);
        if (!response.ok) {
          const errorText = await response.text();
          console.error("Error", errorText);
          throw new Error(`Network response is not okay: ${response.statusText}`);
        }
        const data = await response.json();
        console.log("Fetched News Data:", data);
        setNews(data.articles);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const contextValue: MasterDataContext = {
    news,
    searchResult: [],
    sliderData: [],
    similarNews: [],
    loading,
    error,
    page,
    query,
    trendingOptions,
    detailsType,
    newsOrHeadlines,
    singleNews,
    newsId,
    setPage,
    setQuery,
    setTrendingOptions,
    setDetailsType,
    setNewsOrHeadlines,
    setSingleNews,
    setNewsId,
  };

  return <MasterContext.Provider value={contextValue}>{children}</MasterContext.Provider>;
};

export default MainContext;
