import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularBegusarai = () => {
  return (
    <>
      <ModularMetatag loc={"Begusarai"} location={"begusarai"} />
      <Navbar />
      <ModularLoc loc={"Begusarai"} />
      <Footer />
    </>
  );
};

export default ModularBegusarai;
