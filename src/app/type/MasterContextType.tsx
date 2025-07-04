// types/MasterContextType.ts

export interface NewsItem {
  source: { id: string | null; name: string };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export type MasterDataContext = {
  news: NewsItem[];
  searchResult: NewsItem[];
  sliderData: NewsItem[];
  similarNews: NewsItem[];
  loading: boolean;
  error: Error | null;
  page: number;
  query: string;
  filters: {
    category?: string;
    from?: string;
    to?: string;
    sortBy?: string;
  };
  trendingOptions: string;
  detailsType: "news" | "headlines";
  newsOrHeadlines: string;
  singleNews: NewsItem | {};
  newsId: string;
  setPage: (page: number | ((prev: number) => number)) => void;
  setQuery: (query: string | ((prev: string) => string)) => void;
  setFilters: (filters: { from?: string; to?: string; sortBy?: string } | ((prev: any) => any)) => void;
  setTrendingOptions: (trendingOptions: string | ((prev: string) => string)) => void;
  setDetailsType: (detailsType: "news" | "headlines" | ((prev: "news" | "headlines") => "news" | "headlines")) => void;
  setNewsOrHeadlines: (newsOrHeadlines: string | ((prev: string) => string)) => void;
  setSingleNews: (news: NewsItem | ((prev: NewsItem) => NewsItem)) => void;
  setNewsId: (newsId: string | ((prev: string) => string)) => void;
};
