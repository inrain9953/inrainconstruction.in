import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularJammuKashmir = () => {
  return (
    <>
      <ModularMetatag
        loc={"Jammu and Kashmir"}
        location={"jammu-and-kashmir"}
      />
      <Navbar />
      <ModularLoc loc={"Jammu and Kashmir"} />
      <Footer />
    </>
  );
};

export default ModularJammuKashmir;
