import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularDelhi = () => {
  return (
    <>
      <ModularMetatag loc={"Delhi"} location={"delhi"} />
      <Navbar />
      <ModularLoc loc={"Delhi"} />
      <Footer />
    </>
  );
};

export default ModularDelhi;
