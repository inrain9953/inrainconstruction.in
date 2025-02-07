import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularCoimbatore = () => {
  return (
    <>
      <ModularMetatag loc={"Coimbatore"} location={"coimbatore"} />
      <Navbar />
      <ModularLoc loc={"Coimbatore"} />
      <Footer />
    </>
  );
};

export default ModularCoimbatore;
