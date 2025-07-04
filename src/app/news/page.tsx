"use client";
import CardContainer from "@/components/Slider/CardGroup/CardContainer/CardContainer";
import MainContext from "@/context/MasterContext";
import React, { useState } from "react";

const NewsPage = () => {
  const [activeTab, setActiveTab] = useState<string>("publishedAt");
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <MainContext>
      <h2 className="text-2xl text-yellow-500 font-bold m-20 my-8">Explore News</h2>
      <div role="tablist" className="tabs tabs-lift my-10 text-xl">
        <a role="tab" className={`tab hover: text-yellow-500 ${activeTab === "popularity" ? "tab-active text-yellow-500 font-bold" : ""}`} onClick={() => handleTabClick("popularity")}>
          Popularity
        </a>
        <a role="tab" className={`tab hover: text-yellow-500 ${activeTab === "relevancy" ? "tab-active text-yellow-500 font-bold" : ""}`} onClick={() => handleTabClick("relevancy")}>
          Relevancy
        </a>
        <a role="tab" className={`tab hover: text-yellow-500 ${activeTab === "publishedAt" ? "tab-active text-yellow-500 font-bold" : ""}`} onClick={() => handleTabClick("publishedAt")}>
          Published At
        </a>
      </div>
      <CardContainer category="news" activeTab={activeTab} />
    </MainContext>
  );
};

export default NewsPage;
