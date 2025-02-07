import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularAllahabad = () => {
  return (
    <>
      <ModularMetatag loc="Allahabad" location={"allahabad"} />
      <Navbar />
      <ModularLoc loc={"Allahabad"} />
      <Footer />
    </>
  );
};

export default ModularAllahabad;
