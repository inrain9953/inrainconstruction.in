import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularKota = () => {
  return (
    <>
      <ModularMetatag loc={"Kota"} location={"kota"} />
      <Navbar />
      <ModularLoc loc={"Kota"} />
      <Footer />
    </>
  );
};

export default ModularKota;
