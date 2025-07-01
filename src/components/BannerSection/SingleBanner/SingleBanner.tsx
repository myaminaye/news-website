import { News } from "@/app/type/NewsType";
import Image from "next/image";
import React from "react";

interface BannerSingleProps {
  article: News;
}

const SingleBanner: React.FC<BannerSingleProps> = ({ article }) => {
  console.log("article", article);
  return (
    <div id="item1" className="carousel-item w-full">
      <Image width={500} height={500} alt="banner image" src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp" className="w-full" />
    </div>
  );
};

export default SingleBanner;
