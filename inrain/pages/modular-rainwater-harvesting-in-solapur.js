import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const MoularSolapur = () => {
  return (
    <>
      <ModularMetatag loc={"Solapur"} location={"solapur"} />
      <Navbar />
      <ModularLoc loc={"Solapur"} />
      <Footer />
    </>
  );
};

export default MoularSolapur;
