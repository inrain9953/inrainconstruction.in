import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularKishangarh = () => {
  return (
    <>
      <ModularMetatag loc={"Kishangarh"} location={"kishangarh"} />
      <Navbar />
      <ModularLoc loc={"Kishangarh"} />
      <Footer />
    </>
  );
};

export default ModularKishangarh;
