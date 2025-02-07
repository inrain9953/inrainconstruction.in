import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularIndore = () => {
  return (
    <>
      <ModularMetatag loc={"Indore"} location={"indore"} />
      <Navbar />
      <ModularLoc loc={"Indore"} />
      <Footer />
    </>
  );
};

export default ModularIndore;
