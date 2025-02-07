import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularPanaji = () => {
  return (
    <>
      <ModularMetatag loc={"Panaji"} location={"panaji"} />
      <Navbar />
      <ModularLoc loc={"Panaji"} />
      <Footer />
    </>
  );
};

export default ModularPanaji;
