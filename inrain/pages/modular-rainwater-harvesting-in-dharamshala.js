import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularDharamshala = () => {
  return (
    <>
      <ModularMetatag loc={"Dharamshala"} location={"dharamshala"} />
      <Navbar />
      <ModularLoc loc={"Dharamshala"} />
      <Footer />
    </>
  );
};

export default ModularDharamshala;
