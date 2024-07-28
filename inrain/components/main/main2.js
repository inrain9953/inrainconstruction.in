import React from "react";
import { Carousel } from "../carousel/carousel";

export const Main2 = () => {
  return (
    <>
      <div data-aos="zoom-in-up" className="flex flex-wrap justify-between">
        <div className="m-10 md:ml-28 md:mr-28">
          <h3 className="text-2xl font-semibold text-center mb-5 underline">
            What We Do
          </h3>
          <p className="text-md text-center text-gray-500 drop-shadow-md md:text-lg">
            At{" "}
            <bold className="text-green-500 font-semibold">
              InRain<sup>®</sup> Construction Pvt Ltd
            </bold>
            , we specialize in harnessing the power of rainwater through advance
            innovative solutions in rainwater harvesting that help our clients
            to optimize water resources and promote environmental conservation.
            Our mission is to promote sustainable water management practices by
            offering comprehensive services with a strong track record of
            success, we have executed{" "}
            <bold className="font-semibold text-black">
              over 1000 Rainwater Harvesting (RWH) units
            </bold>{" "}
            for esteemed clients such as{" "}
            <bold className="font-semibold text-black">
              Tata | PepsiCo | Hindustan Unilever | Denso | Fujita | Ahresty |
              Supreme Pipes | Mittal Construction Company | GLS Infra | PWD |
              Airports | Smart Cities | Supreme Court Judges Bungalows and many
              more.
            </bold>
          </p>
        </div>
      </div>
      <Carousel />
    </>
  );
};
