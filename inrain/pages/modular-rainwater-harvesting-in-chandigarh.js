import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularChandigarh = () => {
  return (
    <>
      <ModularMetatag loc={"Chandigarh"} location={"chandigarh"} />
      <Navbar />
      <ModularLoc loc={"Chandigarh"} />
      <Footer />
    </>
  );
};

export default ModularChandigarh;
