import { News } from "@/app/type/NewsType";
import { MasterContext } from "@/context/MasterContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { useContext } from "react";

const NewsCard = ({ article }: { article: News }) => {
  const imgUrl = article.urlToImage || "";
  const { setSingleNews } = useContext(MasterContext);
  const router = useRouter();

  const handleClick = () => {
    setSingleNews({
      ...article,
      urlToImage: article.urlToImage || "",
    });
    localStorage.setItem("singleNews", JSON.stringify(article));
    router.push(`/details/${encodeURIComponent(article.url)}`);
  };

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 w-full h-full overflow-hidden" onClick={handleClick}>
      <figure className="h-48 overflow-hidden">{article.urlToImage ? <img src={article.urlToImage} alt={article.title} className="..." /> : <div className="bg-gray-200 w-full h-48 flex items-center justify-center text-gray-500 text-sm">No Image</div>}</figure>

      <div className="card-body p-4">
        <h2 className="card-title text-lg font-semibold line-clamp-2 tooltip" data-tip={article.title}>
          {article.title}
        </h2>

        <p className="text-sm text-gray-600 line-clamp-3">{article.description || "No description available."}</p>

        <div className="mt-4">
          <Link href={article.url} target="_blank" className="text-yellow-500 text-sm font-medium hover:underline" onClick={(e) => e.stopPropagation()}>
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
