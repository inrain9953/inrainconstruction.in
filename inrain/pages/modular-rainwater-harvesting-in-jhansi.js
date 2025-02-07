import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularJhansi = () => {
  return (
    <>
      <ModularMetatag loc={"Jhansi"} location={"jhansi"} />
      <Navbar />
      <ModularLoc loc={"Jhansi"} />
      <Footer />
    </>
  );
};

export default ModularJhansi;
