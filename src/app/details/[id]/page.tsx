"use client";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { MasterContext } from "@/context/MasterContext";
import Link from "next/link";
import { NewsItem } from "@/app/type/MasterContextType";

const DetailsPage = () => {
  const { singleNews, setSingleNews } = useContext(MasterContext);
  const [localNews, setLocalNews] = useState<NewsItem | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!singleNews || Object.keys(singleNews).length === 0) {
      const cached = localStorage.getItem("singleNews");
      if (cached) {
        const parsed = JSON.parse(cached);
        setSingleNews(parsed);
        setLocalNews(parsed);
      } else {
        router.push("/");
      }
    } else {
      if (singleNews && Object.keys(singleNews).length > 0) {
        setLocalNews(singleNews as NewsItem);
      }
    }
  }, [singleNews, setSingleNews, router]);

  if (!localNews) {
    return <div className="text-center mt-20 text-gray-500">Loading...</div>;
  }

  const { title, description, urlToImage, content, source, publishedAt, author, url } = localNews;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {urlToImage && <img src={urlToImage} alt={title} className="w-full h-72 object-cover rounded" />}
      <h1 className="text-3xl font-bold mt-4">{title}</h1>
      <p className="text-sm text-gray-500 mt-1">
        {author && `By ${author} • `}
        {source?.name} • {new Date(publishedAt).toLocaleString()}
      </p>
      <p className="text-gray-600 mt-4">{description}</p>
      <p className="text-gray-700 mt-4">{content}</p>
      <div className="mt-4">
        <Link href={url} target="_blank" className="text-yellow-500 text-sm font-medium hover:underline" onClick={(e) => e.stopPropagation()}>
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default DetailsPage;
