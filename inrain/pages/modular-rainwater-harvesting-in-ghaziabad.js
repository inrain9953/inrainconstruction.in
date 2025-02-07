import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularGhaziabad = () => {
  return (
    <>
      <ModularMetatag loc={"Ghaziabad"} location={"ghaziabad"} />
      <Navbar />
      <ModularLoc loc={"Ghaziabad"} />
      <Footer />
    </>
  );
};

export default ModularGhaziabad;
