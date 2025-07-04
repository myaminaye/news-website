"use client";
import CardContainer from "@/components/Slider/CardGroup/CardContainer/CardContainer";
import MainContext, { MasterContext } from "@/context/MasterContext";
import React, { useContext, useEffect, useState } from "react";

const HeadlinesPage = () => {
  const { setDetailsType, setFilters } = useContext(MasterContext);
  const [activeTab, setActiveTab] = useState<string>("business");

  return (
    <MainContext>
      <h2 className="text-2xl text-yellow-500 font-bold m-20 my-8">Explore News</h2>
      <div role="tablist" className="tabs tabs-lift my-10 text-xl">
        {["business", "entertainment", "general", "health", "science", "technology", "sports"].map((category) => (
          <a key={category} role="tab" className={`tab hover:text-yellow-500 ${activeTab === category ? "tab-active text-yellow-500 font-bold" : ""}`} onClick={() => setActiveTab(category)}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </a>
        ))}
      </div>
      <CardContainer category="headlines" activeTab={activeTab} />
    </MainContext>
  );
};

export default HeadlinesPage;
