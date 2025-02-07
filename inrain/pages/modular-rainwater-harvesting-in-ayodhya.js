import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularAyodhya = () => {
  return (
    <>
      <ModularMetatag loc="Ayodhya" location={"ayodhya"} />
      <Navbar />
      <ModularLoc loc={"Ayodhya"} />
      <Footer />
    </>
  );
};

export default ModularAyodhya;
