import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularNagpur = () => {
  return (
    <>
      <ModularMetatag loc={"Nagpur"} location={"nagpur"} />
      <Navbar />
      <ModularLoc loc={"Nagpur"} />
      <Footer />
    </>
  );
};

export default ModularNagpur;
