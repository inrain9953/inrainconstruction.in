import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularGaya = () => {
  return (
    <>
      <ModularMetatag loc={"Gaya"} location={"gaya"} />
      <Navbar />
      <ModularLoc loc={"Gaya"} />
      <Footer />
    </>
  );
};

export default ModularGaya;
