import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularBelagavi = () => {
  return (
    <>
      <ModularMetatag loc={"Belagavi"} location={"belagavi"} />
      <Navbar />
      <ModularLoc loc={"Belagavi"} />
      <Footer />
    </>
  );
};

export default ModularBelagavi;
