"use client";

import Banner from "@/components/BannerSection/Banner/Banner";
import MainContext from "@/context/MasterContext";

export default function Home() {
  return (
    <MainContext>
      <h1>Home page</h1>
      <Banner />
    </MainContext>
  );
}
