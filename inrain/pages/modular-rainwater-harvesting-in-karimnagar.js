import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularKarimnagar = () => {
  return (
    <>
      <ModularMetatag loc={"Karimnagar"} location={"karimnagar"} />
      <Navbar />
      <ModularLoc loc={"Karimnagar"} />
      <Footer />
    </>
  );
};

export default ModularKarimnagar;
