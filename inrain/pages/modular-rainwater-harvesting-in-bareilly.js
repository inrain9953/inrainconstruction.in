import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularBareilly = () => {
  return (
    <>
      <ModularMetatag loc="Bareilly" location={"bareilly"} />
      <Navbar />
      <ModularLoc loc={"Bareilly"} />
      <Footer />
    </>
  );
};

export default ModularBareilly;
