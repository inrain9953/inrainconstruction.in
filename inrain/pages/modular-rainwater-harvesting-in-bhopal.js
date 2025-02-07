import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularBhopal = () => {
  return (
    <>
      <ModularMetatag loc={"Bhopal"} location={"bhopal"} />
      <Navbar />
      <ModularLoc loc={"Bhopal"} />
      <Footer />
    </>
  );
};

export default ModularBhopal;
