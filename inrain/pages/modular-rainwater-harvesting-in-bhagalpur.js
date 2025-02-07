import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularBhagalpur = () => {
  return (
    <>
      <ModularMetatag loc={"Bhagalpur"} location={"bhagalpur"} />
      <Navbar />
      <ModularLoc loc={"Bhagalpur"} />
      <Footer />
    </>
  );
};

export default ModularBhagalpur;
