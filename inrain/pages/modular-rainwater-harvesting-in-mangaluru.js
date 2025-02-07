import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularMangaluru = () => {
  return (
    <>
      <ModularMetatag loc={"Mangaluru"} location={"mangaluru"} />
      <Navbar />
      <ModularLoc loc={"Mangaluru"} />
      <Footer />
    </>
  );
};

export default ModularMangaluru;
