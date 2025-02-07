import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularAmritsar = () => {
  return (
    <>
      <ModularMetatag loc="Amritsar" location={"amritsar"} />
      <Navbar />
      <ModularLoc loc={"Amritsar"} />
      <Footer />
    </>
  );
};

export default ModularAmritsar;
