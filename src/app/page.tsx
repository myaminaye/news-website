"use client";

import Banner from "@/components/BannerSection/Banner/Banner";
import CardContainer from "@/components/Slider/CardGroup/CardContainer/CardContainer";
import SliderContainer from "@/components/Slider/SliderContainer/SliderContainer";
import MainContext from "@/context/MasterContext";

export default function Home() {
  return (
    <MainContext>
      <Banner />
      <SliderContainer />

      <CardContainer category={"news"} activeTab={"popular"} />
    </MainContext>
  );
}
