import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularGreaterNoida = () => {
  return (
    <>
      <ModularMetatag loc={"Greater Noida"} location={"greater-noida"} />
      <Navbar />
      <ModularLoc loc={"Greater Noida"} />
      <Footer />
    </>
  );
};

export default ModularGreaterNoida;
