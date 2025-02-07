import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularKakinada = () => {
  return (
    <>
      <ModularMetatag loc="Kakinada" location={"kakinada"} />
      <Navbar />
      <ModularLoc loc={"Kakinada"} />
      <Footer />
    </>
  );
};

export default ModularKakinada;
