import React from "react";
import Features from "./parts/Features";
import Jobs from "./parts/Jobs";
import HeaderSection from "./parts/HeaderSection";
import CompanySection from "./parts/CompanySection";
import Testinomial from "./parts/Testinomial";
import Newsletter from "./parts/Newsletter";
import MessageButton from "./ChatBot/MessageButton";

export default function Home() {
  return (
    <>
      {/* Header section */}
      <HeaderSection />

      {/* Sections */}
      <CompanySection />
      {/* features */}
      <Features />

      {/* Testinomial */}
      <Testinomial />

      {/* Newslater */}
      <Newsletter />

      {/* Message Bot */}
      <MessageButton/>
    </>
  );
}
