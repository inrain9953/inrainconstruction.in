import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularBatala = () => {
  return (
    <>
      <ModularMetatag loc="Batala" location={"batala"} />
      <Navbar />
      <ModularLoc loc={"Batala"} />
      <Footer />
    </>
  );
};

export default ModularBatala;
