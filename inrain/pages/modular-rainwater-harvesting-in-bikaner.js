import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularBikaner = () => {
  return (
    <>
      <ModularMetatag loc={"Bikaner"} location={"bikaner"} />
      <Navbar />
      <ModularLoc loc={"Bikaner"} />
      <Footer />
    </>
  );
};

export default ModularBikaner;
