import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularLucknow = () => {
  return (
    <>
      <ModularMetatag loc={"Lucknow"} location={"lucknow"} />
      <Navbar />
      <ModularLoc loc={"Lucknow"} />
      <Footer />
    </>
  );
};

export default ModularLucknow;
