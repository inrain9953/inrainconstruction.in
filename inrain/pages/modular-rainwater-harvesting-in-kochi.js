import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularKochi = () => {
  return (
    <>
      <ModularMetatag loc={"Kochi"} location={"kochi"} />
      <Navbar />
      <ModularLoc loc={"Kochi"} />
      <Footer />
    </>
  );
};

export default ModularKochi;
