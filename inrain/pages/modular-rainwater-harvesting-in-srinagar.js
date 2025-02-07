import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularSrinagar = () => {
  return (
    <>
      <ModularMetatag loc={"Srinagar"} location={"srinagar"} />
      <Navbar />
      <ModularLoc loc={"Srinagar"} />
      <Footer />
    </>
  );
};

export default ModularSrinagar;
