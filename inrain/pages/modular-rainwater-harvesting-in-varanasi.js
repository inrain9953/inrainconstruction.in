import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularVaranasi = () => {
  return (
    <>
      <ModularMetatag loc={"Varanasi"} location={"varanasi"} />
      <Navbar />
      <ModularLoc loc={"Varanasi"} />
      <Footer />
    </>
  );
};

export default ModularVaranasi;
