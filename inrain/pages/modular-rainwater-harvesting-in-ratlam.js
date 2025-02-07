import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularRatlam = () => {
  return (
    <>
      <ModularMetatag loc={"Ratlam"} location={"ratlam"} />
      <Navbar />
      <ModularLoc loc={"Ratlam"} />
      <Footer />
    </>
  );
};

export default ModularRatlam;
