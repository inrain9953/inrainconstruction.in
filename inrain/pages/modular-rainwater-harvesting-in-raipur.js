import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularRaipur = () => {
  return (
    <>
      <ModularMetatag loc={"Raipur"} location={"raipur"} />
      <Navbar />
      <ModularLoc loc={"Raipur"} />
      <Footer />
    </>
  );
};

export default ModularRaipur;
