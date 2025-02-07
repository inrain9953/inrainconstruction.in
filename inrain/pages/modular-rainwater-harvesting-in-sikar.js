import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularSikar = () => {
  return (
    <>
      <ModularMetatag loc={"Sikar"} location={"sikar"} />
      <Navbar />
      <ModularLoc loc={"Sikar"} />
      <Footer />
    </>
  );
};

export default ModularSikar;
