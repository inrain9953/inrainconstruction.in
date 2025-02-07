import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularThane = () => {
  return (
    <>
      <ModularMetatag loc={"Thane"} location={"thane"} />
      <Navbar />
      <ModularLoc loc={"Thane"} />
      <Footer />
    </>
  );
};

export default ModularThane;
