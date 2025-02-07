import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularKanpur = () => {
  return (
    <>
      <ModularMetatag loc={"Kanpur"} location={"kanpur"} />
      <Navbar />
      <ModularLoc loc={"Kanpur"} />
      <Footer />
    </>
  );
};

export default ModularKanpur;
