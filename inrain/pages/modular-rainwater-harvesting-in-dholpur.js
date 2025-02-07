import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularDholpur = () => {
  return (
    <>
      <ModularMetatag loc={"Dholpur"} location={"dholpur"} />
      <Navbar />
      <ModularLoc loc={"Dholpur"} />
      <Footer />
    </>
  );
};

export default ModularDholpur;
