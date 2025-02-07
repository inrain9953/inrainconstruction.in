import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularPune = () => {
  return (
    <>
      <ModularMetatag loc={"Pune"} location={"pune"} />
      <Navbar />
      <ModularLoc loc={"Pune"} />
      <Footer />
    </>
  );
};

export default ModularPune;
