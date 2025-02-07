import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularShimla = () => {
  return (
    <>
      <ModularMetatag loc={"Shimla"} location={"shimla"} />
      <Navbar />
      <ModularLoc loc={"Shimla"} />
      <Footer />
    </>
  );
};

export default ModularShimla;
