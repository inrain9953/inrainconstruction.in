import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularUdaipur = () => {
  return (
    <>
      <ModularMetatag loc={"Udaipur"} location={"udaipur"} />
      <Navbar />
      <ModularLoc loc={"Udaipur"} />
      <Footer />
    </>
  );
};

export default ModularUdaipur;
