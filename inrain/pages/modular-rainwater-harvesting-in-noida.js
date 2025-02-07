import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularNoida = () => {
  return (
    <>
      <ModularMetatag loc={"Noida"} location={"noida"} />
      <Navbar />
      <ModularLoc loc={"Noida"} />
      <Footer />
    </>
  );
};

export default ModularNoida;
