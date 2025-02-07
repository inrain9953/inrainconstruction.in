import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularJaipur = () => {
  return (
    <>
      <ModularMetatag loc={"Jaipur"} location={"jaipur"} />
      <Navbar />
      <ModularLoc loc={"Jaipur"} />
      <Footer />
    </>
  );
};

export default ModularJaipur;
