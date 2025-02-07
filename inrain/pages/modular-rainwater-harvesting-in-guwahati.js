import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularGuwahati = () => {
  return (
    <>
      <ModularMetatag loc="Guwahati" location={"guwahati"} />
      <Navbar />
      <ModularLoc loc={"Guwahati"} />
      <Footer />
    </>
  );
};

export default ModularGuwahati;
