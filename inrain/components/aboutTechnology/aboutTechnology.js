import React from "react";
import Image from "next/image";
import tech1 from "../../public/Technology/main1.jpg";
import tech2 from "../../public/Technology/main2.jpeg";
import tech3 from "../../public/Technology/main3.jpg";
import tech4 from "../../public/Technology/main4.jpg";
import tech5 from "../../public/Technology/main5.jpg";

export const AboutTechnology = () => {
  return (
    <>
      <div className="text-center pt-10 m-5 md:m-10">
        <h3
          data-aos="zoom-in-up"
          className="md:text-4xl font-semibold text-2xl"
        >
          About Our Technology
        </h3>
        <div
          data-aos="zoom-in-up"
          className="grid grid-cols-1 md:grid-cols-2 m-2"
        >
          <Image className="" src={tech1} loading="eager" priority />
          <Image className="" src={tech2} loading="eager" priority />
        </div>
        <div
          data-aos="zoom-in-up"
          className="grid grid-cols-1 md:grid-cols-3 m-2"
        >
          <Image className="" src={tech3} loading="eager" priority />
          <Image className="" src={tech4} loading="eager" priority />
          <Image className="" src={tech5} loading="eager" priority />
        </div>
      </div>
    </>
  );
};
