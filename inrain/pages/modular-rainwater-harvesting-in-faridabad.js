import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularFaridabad = () => {
  return (
    <>
      <ModularMetatag loc={"Faridabad"} location={"faridabad"} />
      <Navbar />
      <ModularLoc loc={"Faridabad"} />
      <Footer />
    </>
  );
};

export default ModularFaridabad;
