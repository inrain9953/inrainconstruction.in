import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularVellore = () => {
  return (
    <>
      <ModularMetatag loc={"Vellore"} location={"vellore"} />
      <Navbar />
      <ModularLoc loc={"Vellore"} />
      <Footer />
    </>
  );
};

export default ModularVellore;
