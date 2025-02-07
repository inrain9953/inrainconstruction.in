import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularBangalore = () => {
  return (
    <>
      <ModularMetatag loc="Bangalore" location={"bangalore"} />
      <Navbar />
      <ModularLoc loc={"Bangalore"} />
      <Footer />
    </>
  );
};

export default ModularBangalore;
