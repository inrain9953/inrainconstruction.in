import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularSurat = () => {
  return (
    <>
      <ModularMetatag loc={"Surat"} location={"surat"} />
      <Navbar />
      <ModularLoc loc={"Surat"} />
      <Footer />
    </>
  );
};

export default ModularSurat;
