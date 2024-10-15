import React from "react";
import { Carousel } from "../carousel/carousel";

export const Main2 = () => {
  return (
    <>
      <div data-aos="fade-up" className="flex flex-wrap justify-between">
        <div className="m-10 md:ml-28 md:mr-28">
          <h3 className="text-2xl font-semibold text-center mb-5 underline">
            What We Do
          </h3>
          <p className="text-md text-center text-gray-500 drop-shadow-md md:text-lg">
            At{" "}
            <bold className="text-green-500 font-semibold">
              InRain<sup>®</sup> Construction Pvt. Ltd.
            </bold>
            , our core expertise lies in{" "}
            <bold className="font-semibold text-black">
              developing advanced and innovative rainwater harvesting solutions
            </bold>
            . We are dedicated to make use of rainwater to help our clients
            optimize their water resources effectively and contribute to{" "}
            <bold className="font-semibold text-black">
              environmental sustainability
            </bold>
            . Our mission is to champion sustainable water management by
            delivering comprehensive services that align with the highest
            standards of quality and innovation.<br></br>
            <br></br> Over the years, we have built a solid reputation for
            success, having{" "}
            <bold className="font-semibold text-black">
              completed more than 1000 Rainwater Harvesting (RWH) units
            </bold>{" "}
            for a wide range of esteemed clients.{" "}
            <bold className="font-semibold text-black">
              Our clientele includes renowned companies such as Tata | PepsiCo |
              Hindustan Unilever | Denso | Larsen & Toubro | Honda | V3 and
              Supreme Pipes.
            </bold>{" "}
            We have also partnered with prominent organizations like{" "}
            <bold className="font-semibold text-black">
              Mittal Construction Company | GLS Infra | and government bodies
              such as the PWD | Airports | Smart Cities initiatives | and even
              the Supreme Court Judges Bungalows.
            </bold>
            <br></br>
            <br></br>
            Through our unwavering commitment to excellence, we aim to continue
            our efforts in promoting sustainable water management practices,
            <bold className="font-semibold text-black">
              {" "}
              ensuring that our solutions make a lasting positive impact on both
              our clients and the environment.
            </bold>
          </p>
        </div>
      </div>
      <Carousel />
    </>
  );
};
