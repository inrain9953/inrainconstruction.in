import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularLudhiana = () => {
  return (
    <>
      <ModularMetatag loc={"Ludhiana"} location={"ludhiana"} />
      <Navbar />
      <ModularLoc loc={"Ludhiana"} />
      <Footer />
    </>
  );
};

export default ModularLudhiana;
