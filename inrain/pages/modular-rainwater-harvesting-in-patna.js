import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularPatna = () => {
  return (
    <>
      <ModularMetatag loc={"Patna"} location={"patna"} />
      <Navbar />
      <ModularLoc loc={"Patna"} />
      <Footer />
    </>
  );
};

export default ModularPatna;
