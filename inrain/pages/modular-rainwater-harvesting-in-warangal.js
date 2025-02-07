import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularWarangal = () => {
  return (
    <>
      <ModularMetatag loc={"Warangal"} location={"warangal"} />
      <Navbar />
      <ModularLoc loc={"Warangal"} />
      <Footer />
    </>
  );
};

export default ModularWarangal;
