"use client";

import Image from "next/image";
import React, { useContext } from "react";
import SingleBanner from "../SingleBanner/SingleBanner";
import { MasterContext } from "@/context/MasterContext";

const Banner = () => {
  const { news, loading, error } = useContext(MasterContext);

  return (
    <>
      <div className="carousel w-full">
        {news.map((article, index) => (
          <SingleBanner article={article} key={article.url || index} />
        ))}
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </>
  );
};

export default Banner;
