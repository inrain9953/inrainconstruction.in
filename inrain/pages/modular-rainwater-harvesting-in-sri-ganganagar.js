import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularGanganagar = () => {
  return (
    <>
      <ModularMetatag loc={"Sri Ganganagar"} location={"sri-ganganagar"} />
      <Navbar />
      <ModularLoc loc={"Sri Ganganagar"} />
      <Footer />
    </>
  );
};

export default ModularGanganagar;
