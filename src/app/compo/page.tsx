"use client";
import React from "react";
import Header from "./header";
import Banner from "./banner";
import LeftAside from "./leftaside";
import RightAside from "./rightaside";
import MainContent from "./maintcontent";
import LowContent from "./lowcontent";
import Footer from "./footer";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-1">
        <div className="w-70">
          <LeftAside />
        </div>

        <div className="flex flex-col flex-1">
          <Banner />
          <MainContent />
          <LowContent />
        </div>

        <div className="w-70">
          <RightAside />
        </div>
      </div>

      <Footer />
    </div>
  );
}
