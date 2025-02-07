import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularAmaravati = () => {
  return (
    <>
      <ModularMetatag loc="Amaravati" location={"amaravati"} />
      <Navbar />
      <ModularLoc loc={"Amaravati"} />
      <Footer />
    </>
  );
};

export default ModularAmaravati;
