import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularAlwar = () => {
  return (
    <>
      <ModularMetatag loc="Alwar" location={"alwar"} />
      <Navbar />
      <ModularLoc loc={"Alwar"} />
      <Footer />
    </>
  );
};

export default ModularAlwar;
