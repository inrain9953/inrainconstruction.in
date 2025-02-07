import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularRewa = () => {
  return (
    <>
      <ModularMetatag loc={"Rewa"} location={"rewa"} />
      <Navbar />
      <ModularLoc loc={"Rewa"} />
      <Footer />
    </>
  );
};

export default ModularRewa;
