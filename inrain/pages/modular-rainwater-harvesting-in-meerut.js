import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularMeerut = () => {
  return (
    <>
      <ModularMetatag loc={"Meerut"} location={"meerut"} />
      <Navbar />
      <ModularLoc loc={"Meerut"} />
      <Footer />
    </>
  );
};

export default ModularMeerut;
