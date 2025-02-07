import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularGwalior = () => {
  return (
    <>
      <ModularMetatag loc={"Gwalior"} location={"gwalior"} />
      <Navbar />
      <ModularLoc loc={"Gwalior"} />
      <Footer />
    </>
  );
};

export default ModularGwalior;
