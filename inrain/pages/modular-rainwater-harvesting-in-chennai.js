import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularChennai = () => {
  return (
    <>
      <ModularMetatag loc={"Chennai"} location={"chennai"} />
      <Navbar />
      <ModularLoc loc={"Chennai"} />
      <Footer />
    </>
  );
};

export default ModularChennai;
