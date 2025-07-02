import { News } from "@/app/type/NewsType";
import { formatDate } from "@/utils";
import Link from "next/link";
import React from "react";

const SingleSlider = ({ article }: { article: News }) => {
  //destructure article with type { article }: { article: News }

  const image = article.urlToImage;

  return (
    <div className="carousel-item w-80 flex-shrink-0 px-2">
      <div className="block bg-base-100 rounded-lg shadow-md overflow-hidden">
        <img src={image} alt={article.title} className="w-full h-40 object-cover" />
        <div className="p-3">
          <h2 className="text-base font-semibold line-clamp-2">{article.title}</h2>
          <p className="text-sm text-gray-500 mt-2 line-clamp-2 hidden lg:block">{article.description}</p>
          <p className="text-xs text-gray-400 mt-2">{formatDate(article.publishedAt)}</p>
          <p className="text-xs text-gray-400">{article.author}</p>
        </div>
        <Link href={article.url} className="text-yellow-500 text-[16px] ml-2">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default SingleSlider;
