import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularMoradabad = () => {
  return (
    <>
      <ModularMetatag loc={"Moradabad"} location={"moradabad"} />
      <Navbar />
      <ModularLoc loc={"Moradabad"} />
      <Footer />
    </>
  );
};

export default ModularMoradabad;
