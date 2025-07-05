import React, { createContext, ReactNode, useEffect, useRef, useState } from "react";
import { Filters, MasterDataContext, NewsItem } from "@/app/type/MasterContextType";
import { getSafeFromDate, getSafeToDate } from "@/utils";

const defaultContextValue: MasterDataContext = {
  news: [],
  // searchResult: [],
  // sliderData: [],
  // similarNews: [],
  loading: false,
  error: null,
  page: 1,
  query: "",
  filters: {},
  trendingOptions: "top_rated",
  detailsType: "news",
  newsOrHeadlines: "news",
  singleNews: null,
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

const BASE_URL = "https://newsapi.org/v2";
const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY!;

const MainContext: React.FC<MasterContextProps> = ({ children }) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [filters, setFilters] = useState<Filters>({});
  const [page, setPage] = useState<number>(1);
  // const [searchResult, setSearchResult] = useState<any[]>([]);
  // const [sliderData, setSliderData] = useState<any[]>([]);
  // const [similarNews, setSimilarNews] = useState<any[]>([]);
  const [detailsType, setDetailsType] = useState<"news" | "headlines">("news");
  const [newsOrHeadlines, setNewsOrHeadlines] = useState<string>("news");
  const [singleNews, setSingleNews] = useState<NewsItem | null>(null);
  const [newsId, setNewsId] = useState<string>("");
  const [trendingOptions, setTrendingOptions] = useState<string>("publishedAt");
  const endpoint = detailsType === "news" ? "/everything" : "/top-headlines";

  const cache = useRef<Map<string, NewsItem[]>>(new Map());

  // Main fetch logic
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const cacheKey = JSON.stringify({
        detailsType,
        query,
        filters,
        page,
        trendingOptions,
      });

      if (cache.current.has(cacheKey)) {
        setNews(cache.current.get(cacheKey)!);
        setLoading(false);
        return;
      }

      const params = new URLSearchParams({
        pageSize: "20",
        page: page.toString(),
        apiKey: API_KEY,
      });

      // Add filters if available
      const from = filters.from || getSafeFromDate();
      const to = filters.to || getSafeToDate();
      const sortBy = filters.sortBy || trendingOptions;

      if (detailsType === "news") {
        const searchQuery = query?.trim() || "general";
        params.set("q", searchQuery);
        params.set("from", from);
        params.set("to", to);
        params.set("sortBy", sortBy);
      }

      if (filters.category && detailsType === "headlines") {
        params.set("category", filters.category);
      }

      try {
        // const response = newsData;
        // const data = response;
        const response = await fetch(`${BASE_URL}${endpoint}?${params.toString()}`);
        const data = await response.json();

        if (data.status === "error") {
          throw new Error(data.message);
        }
        cache.current.set(cacheKey, data.articles || []);
        setNews(data.articles || []);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [query, filters, page, trendingOptions, detailsType]);

  const contextValue: MasterDataContext = {
    news,
    // searchResult,
    // sliderData,
    // similarNews,
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
