import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularJaisalmer = () => {
  return (
    <>
      <ModularMetatag loc={"Jaisalmer"} location={"jaisalmer"} />
      <Navbar />
      <ModularLoc loc={"Jaisalmer"} />
      <Footer />
    </>
  );
};

export default ModularJaisalmer;
