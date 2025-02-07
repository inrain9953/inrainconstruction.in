import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularBathinda = () => {
  return (
    <>
      <ModularMetatag loc={"Bathinda"} location={"bathinda"} />
      <Navbar />
      <ModularLoc loc={"Bathinda"} />
      <Footer />
    </>
  );
};

export default ModularBathinda;
