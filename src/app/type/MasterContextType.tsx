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

export interface Filters {
  category?: string;
  from?: string;
  to?: string;
  sortBy?: string;
}

export type MasterDataContext = {
  news: NewsItem[];
  // searchResult: NewsItem[];
  // sliderData: NewsItem[];
  // similarNews: NewsItem[];
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
  singleNews: NewsItem | null;
  newsId: string;
  setPage: (page: number | ((prev: number) => number)) => void;
  setQuery: (query: string | ((prev: string) => string)) => void;
  setFilters: (filters: Filters | ((prev: Filters) => Filters)) => void;
  setTrendingOptions: (trendingOptions: string | ((prev: string) => string)) => void;
  setDetailsType: (detailsType: "news" | "headlines" | ((prev: "news" | "headlines") => "news" | "headlines")) => void;
  setNewsOrHeadlines: (newsOrHeadlines: string | ((prev: string) => string)) => void;
  setSingleNews: (news: NewsItem | null | ((prev: NewsItem | null) => NewsItem | null)) => void;
  setNewsId: (newsId: string | ((prev: string) => string)) => void;
};
