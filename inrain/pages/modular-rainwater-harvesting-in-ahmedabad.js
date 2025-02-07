import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularAhmedabad = () => {
  return (
    <>
      <ModularMetatag loc="Ahmedabad" location={"ahmedabad"} />
      <Navbar />
      <ModularLoc loc={"Ahmedabad"} />
      <Footer />
    </>
  );
};

export default ModularAhmedabad;
