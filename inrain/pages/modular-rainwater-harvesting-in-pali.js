import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularPali = () => {
  return (
    <>
      <ModularMetatag loc={"Pali"} location={"pali"} />
      <Navbar />
      <ModularLoc loc={"Pali"} />
      <Footer />
    </>
  );
};

export default ModularPali;
