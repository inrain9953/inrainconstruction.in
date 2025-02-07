import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularJabalpur = () => {
  return (
    <>
      <ModularMetatag loc={"Jabalpur"} location={"jabalpur"} />
      <Navbar />
      <ModularLoc loc={"Jabalpur"} />
      <Footer />
    </>
  );
};

export default ModularJabalpur;
