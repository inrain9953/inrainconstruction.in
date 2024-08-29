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
        <p className="text-md md:text-lg pt-3 md:pt-5 md:mr-64 text-gray-500">
          At{" "}
          <bold className="text-green-500 font-semibold">
            InRain<sup>®</sup> Construction Pvt. Ltd.,
          </bold>{" "}
          we offer a comprehensive suite of rainwater harvesting solutions
          tailored to meet the diverse needs of our clients. Our services
          include the design and installation of{" "}
          <bold className="text-black font-semibold">
            {" "}
            Rainwater Harvesting Systems for warehouses, utilizing co-polymer
            based rainwater harvesting system, modular based rainwater
            harvesting system, and Fiber Reinforced Polymer (FRP) technologies.
          </bold>
          <br></br>
          <br></br> As a leading rainwater harvesting system installation
          company in India and the NCR, we provide top-quality services to
          industries and commercial entities. Our solutions are designed to
          optimize water resources, promote sustainability, and reduce reliance
          on external water sources.{" "}
          <bold className="text-black font-semibold">
            With in-house manufacturing capabilities, we ensure superior quality
            and cost-effectiveness, making us a trusted vendor for rainwater
            harvesting systems across India.
          </bold>
        </p>
      </div>
      <ServicesDetails />
      <Footer />
    </>
  );
};

export default Services;
