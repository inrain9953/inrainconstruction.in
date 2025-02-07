import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularMathura = () => {
  return (
    <>
      <ModularMetatag loc={"Mathura"} location={"mathura"} />
      <Navbar />
      <ModularLoc loc={"Mathura"} />
      <Footer />
    </>
  );
};

export default ModularMathura;
