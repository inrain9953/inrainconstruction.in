import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularPatiala = () => {
  return (
    <>
      <ModularMetatag loc={"Patiala"} location={"patiala"} />
      <Navbar />
      <ModularLoc loc={"Patiala"} />
      <Footer />
    </>
  );
};

export default ModularPatiala;
