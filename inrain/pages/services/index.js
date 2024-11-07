import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";
import Image from "next/image";
import { ServicesDetails } from "@/components/servicesDetails/servicesDetails";
import service11 from "../../public/service11.jpg";
const Services = () => {
  return (
    <>
      <Navbar />
      <div className="m-5">
        <Image
          alt="img"
          className="w-full rounded-xl shadow-xl"
          src={service11}
          loading="eager"
          priority={true}
          unoptimized={true}
        />
      </div>
      <div
        data-aos="zoom-in-up"
        className="text-center pt-7 md:text-left md:ml-10"
      >
        <h1 className="text-2xl font-bold md:text-4xl text-green-700 md:font-semibold">
          InRain<sup>®</sup> Construction Pvt. Ltd.
        </h1>
        <p className="text-md md:text-lg pt-2">
          Harvesting Rain, Sustaining Tomorrow.
        </p>
      </div>
      <div data-aos="zoom-in-up" className="text-center m-10 md:text-left">
        <h3 className="text-xl font-bold md:text-[2rem] md:font-semibold">
          The Services we provide
        </h3>
        <p className="text-md text-justify md:text-lg pt-3 md:pt-5 md:mr-64 text-gray-500">
          At{" "}
          <bold className="text-green-500 font-semibold">
            InRain<sup>®</sup> Construction Pvt. Ltd.,
          </bold>{" "}
          we provide a comprehensive range of rainwater harvesting solutions,
          customized to meet the unique requirements of our clients.{" "}
          <bold className="text-black font-semibold">
            Our offerings include the design and installation of Rainwater
            Harvesting Systems for warehouses, utilizing co-polymer, modular,
            and Fiber Reinforced Polymer (FRP) technologies.
          </bold>
          <br></br>
          <br></br>{" "}
          <bold className="text-black font-semibold">
            As a leading rainwater harvesting system provider in India and the
            Delhi(NCR),
          </bold>{" "}
          we deliver high-quality services to industries and commercial sectors.
          Our solutions are engineered to maximize water resource efficiency,
          support sustainability, and reduce dependence on external water
          supplies. <bold className="text-black font-semibold">With in-house manufacturing facilities, we guarantee
          exceptional quality and cost-effectiveness, making us a reliable
          partner for rainwater harvesting systems nationwide.</bold>
        </p>
      </div>
      <ServicesDetails />
      <Footer />
    </>
  );
};

export default Services;
