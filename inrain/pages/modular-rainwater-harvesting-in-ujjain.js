import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularUjjain = () => {
  return (
    <>
      <ModularMetatag loc={"Ujjain"} location={"ujjain"} />
      <Navbar />
      <ModularLoc loc={"Ujjain"} />
      <Footer />
    </>
  );
};

export default ModularUjjain;
