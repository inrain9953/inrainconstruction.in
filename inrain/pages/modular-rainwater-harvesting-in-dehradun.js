import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularDehradun = () => {
  return (
    <>
      <ModularMetatag loc={"Dehradun"} location={"dehradun"} />
      <Navbar />
      <ModularLoc loc={"Dehradun"} />
      <Footer />
    </>
  );
};

export default ModularDehradun;
