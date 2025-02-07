import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularGandhinagar = () => {
  return (
    <>
      <ModularMetatag loc={"Gandhinagar"} location={"gandhinagar"} />
      <Navbar />
      <ModularLoc loc={"Gandhinagar"} />
      <Footer />
    </>
  );
};

export default ModularGandhinagar;
