import { Footer } from "@/components/footer/footer";
import ModularLoc from "@/components/locationTarget/modularLoc";
import ModularMetatag from "@/components/locationTarget/modularMetatag";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const ModularBhubaneswar = () => {
  return (
    <>
      <ModularMetatag loc="Bhubaneswar" location={"bhubaneswar"} />
      <Navbar />
      <ModularLoc loc={"Bhubaneswar"} />
      <Footer />
    </>
  );
};

export default ModularBhubaneswar;
