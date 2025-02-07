import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularRanchi = () => {
  return (
    <>
      <ModularMetatag loc={"Ranchi"} location={"ranchi"} />
      <Navbar />
      <ModularLoc loc={"Ranchi"} />
      <Footer />
    </>
  );
};

export default ModularRanchi;
