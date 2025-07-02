import { News } from "@/app/type/NewsType";
import Link from "next/link";
import React from "react";

const NewsCard = ({ article }: { article: News }) => {
  const imgUrl = article.urlToImage;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 w-full h-full overflow-hidden">
      <figure className="h-48 overflow-hidden">
        <img src={imgUrl} alt={article.title} className="w-full h-full object-cover" />
      </figure>

      <div className="card-body p-4">
        <h2 className="card-title text-lg font-semibold line-clamp-2 tooltip" data-tip={article.title}>
          {article.title}
        </h2>

        <p className="text-sm text-gray-600 line-clamp-3">{article.description || "No description available."}</p>

        <div className="mt-4">
          <Link href={article.url} target="_blank" className="text-yellow-500 text-sm font-medium hover:underline">
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
