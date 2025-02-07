import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularAligarh = () => {
  return (
    <>
      <ModularMetatag loc="Aligarh" location={"aligarh"} />
      <Navbar />
      <ModularLoc loc={"Aligarh"} />
      <Footer />
    </>
  );
};

export default ModularAligarh;
