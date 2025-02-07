import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularKolkata = () => {
  return (
    <>
      <ModularMetatag loc={"Kolkata"} location={"kolkata"} />
      <Navbar />
      <ModularLoc loc={"Kolkata"} />
      <Footer />
    </>
  );
};

export default ModularKolkata;
