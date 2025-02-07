import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularVisakhapatnam = () => {
  return (
    <>
      <ModularMetatag loc={"Visakhapatnam"} location={"visakhapatnam"} />
      <Navbar />
      <ModularLoc loc={"Visakhapatnam"} />
      <Footer />
    </>
  );
};

export default ModularVisakhapatnam;
