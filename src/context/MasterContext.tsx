import React, { createContext, ReactNode, useEffect, useState } from "react";
import { MasterDataContext, NewsItem } from "@/app/type/MasterContextType";

const defaultContextValue: MasterDataContext = {
  news: [],
  searchResult: [],
  sliderData: [],
  similarNews: [],
  loading: false,
  error: null,
  page: 1,
  query: "",
  filters: {},
  trendingOptions: "top_rated",
  detailsType: "news",
  newsOrHeadlines: "news",
  singleNews: {},
  newsId: "",
  setPage: () => {},
  setQuery: () => {},
  setFilters: () => {},
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
  const [filters, setFilters] = useState<{ from?: string; to?: string; sortBy?: string }>({});

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const params = new URLSearchParams({
        q: query || "technology",
        pageSize: "10",
        apiKey: API_KEY,
        ...(filters.from && { from: filters.from }),
        ...(filters.to && { to: filters.to }),
        ...(filters.sortBy && { sortBy: filters.sortBy }),
      });

      try {
        const response = await fetch(`${BASE_URL}?${params.toString()}`);
        if (!response.ok) throw new Error("Failed to fetch");

        const data = await response.json();
        setNews(data.articles);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, filters]);

  const contextValue: MasterDataContext = {
    news,
    searchResult: [],
    sliderData: [],
    similarNews: [],
    loading,
    error,
    page,
    query,
    filters,
    trendingOptions,
    detailsType,
    newsOrHeadlines,
    singleNews,
    newsId,
    setPage,
    setQuery,
    setFilters,
    setTrendingOptions,
    setDetailsType,
    setNewsOrHeadlines,
    setSingleNews,
    setNewsId,
  };

  return <MasterContext.Provider value={contextValue}>{children}</MasterContext.Provider>;
};

export default MainContext;
