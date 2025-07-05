import { News } from "@/app/type/NewsType";
import { formatDate } from "@/utils";
import Link from "next/link";
import React from "react";

interface BannerSingleProps {
  article: News;
  currentItem: number;
  itemIndex: number;
}

const SingleBanner: React.FC<BannerSingleProps> = ({ article, currentItem, itemIndex }) => {
  const title = article.title;
  const backdropImage = article.urlToImage;

  return (
    <div id={`item${itemIndex}`} className={`carousel-item relative w-full ${currentItem === itemIndex ? "block" : "hidden"}`}>
      {backdropImage ? <img alt={title} src={backdropImage} className="object-top object-cover lg:max-h-[50vh] max-h-screen w-full" /> : <div className="bg-gray-300 text-gray-600 flex items-center justify-center w-full lg:max-h-[50vh] max-h-screen h-[300px]">No image available</div>}

      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      <div className="flex lg:gap-16 sm:gap-8 gap-4 absolute bottom-10 left-10">
        <div>{backdropImage ? <img width={450} height={400} className="w-24 lg:w-64" alt={title} src={backdropImage} /> : <div className="w-24 lg:w-64 h-24 bg-gray-300 flex items-center justify-center text-gray-500 text-sm">No image</div>}</div>
        <div className="self-end ">
          <h2 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-white">{article.title}</h2>
          <p className="lg:mt-4 text-stone-400 text-wrap min-w-40 hidden lg:block">{article.description}</p>

          <div className="flex gap-10">
            <p className="mt-4 text-stone-400 ">{formatDate(article.publishedAt)}</p>
            <p className="mt-4 text-stone-400 ">{article.author}</p>
          </div>

          <div className="mt-4">
            <Link href={article.url} className="bg-[#334155] hover-bg:[#242e3d] text-gray-300 border-none rounded-2xl px-4 py-2 ">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBanner;
