import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularBarabanki = () => {
  return (
    <>
      <ModularMetatag loc={"Barabanki"} location={"barabanki"} />
      <Navbar />
      <ModularLoc loc={"Barabanki"} />
      <Footer />
    </>
  );
};

export default ModularBarabanki;
