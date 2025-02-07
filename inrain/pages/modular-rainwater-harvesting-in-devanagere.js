import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularDevanagere = () => {
  return (
    <>
      <ModularMetatag loc="Devanagere" location={"devanagere"} />
      <Navbar />
      <ModularLoc loc={"Devanagere"} />
      <Footer />
    </>
  );
};

export default ModularDevanagere;
