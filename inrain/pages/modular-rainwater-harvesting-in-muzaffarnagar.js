import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularMuzaffarnagar = () => {
  return (
    <>
      <ModularMetatag loc={"Muzaffarnagar"} location={"muzaffarnagar"} />
      <Navbar />
      <ModularLoc loc={"Muzaffarnagar"} />
      <Footer />
    </>
  );
};

export default ModularMuzaffarnagar;
