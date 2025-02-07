import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularVadodara = () => {
  return (
    <>
      <ModularMetatag loc={"Vadodara"} location={"vadodara"} />
      <Navbar />
      <ModularLoc loc={"Vadodara"} />
      <Footer />
    </>
  );
};

export default ModularVadodara;
