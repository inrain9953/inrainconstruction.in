import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { ServicesDetails } from "@/components/servicesDetails/servicesDetails";
import React from "react";
import Image from "next/image";
import serviceImg5 from "../../public/services/harvesting5.jpg";

const RoofTopRWH = () => {
  return (
    <>
      <Navbar />
      <div
        data-aos="zoom-in-up"
        className="text-left m-10 md:m-20 md:flex items-center"
      >
        <div className="">
          <h1 className="text-2xl md:text-[2rem] font-semibold">
            Roof Top Rainwater Harvesting System
          </h1>
          <p className="text-md md:text-lg pt-5 text-gray-500">
            Roof-top rainwater harvesting systems have gained significant
            popularity in recent years. These systems efficiently collect
            natural rainwater, offering a sustainable way to manage this
            valuable resource. Suitable for both residential and commercial
            properties, roof-top rainwater harvesting provides a practical
            approach to conserving water.
            <br></br>
            <br></br>
            At{" "}
            <bold className="text-green-500 font-semibold">
              InRain Construction Pvt. Ltd.,
            </bold>{" "}
            we provide a wide range of rainwater harvesting solutions,
            customized to fit individual customer requirements. Whether you need
            a full installation package for a newly built property or specific
            components for an existing system, our services are flexible and
            designed to meet your specific needs. We handle both the
            installation and ongoing maintenance, ensuring that your system
            remains in optimal condition.
            <br></br>
            <br></br>
            Filtration is an essential part of roof-top rainwater harvesting
            systems. As rainwater is collected from the roof, it can also gather
            various pollutants, including both organic and inorganic materials.
            Proper filtration is especially important if the harvested water
            will be used for drinking or cooking. In such cases, advanced
            micro-level filtration is required to ensure the water is free from
            contaminants and safe for consumption. At{" "}
            <bold className="text-green-500 font-semibold">
              InRain Construction Pvt. Ltd.,
            </bold>{" "}
            we offer a variety of filtration options to suit your needs.
            <br></br>
            <br></br>Installing a roof-top rainwater harvesting system comes
            with numerous advantages. In addition to lowering water bills by
            providing an alternative to mains water supply, these systems also
            play a vital role in supporting environmental sustainability.
          </p>
        </div>
        <Image
          className="mt-10 md:m-10 md:h-72 md:min-w-96"
          src={serviceImg5}
          alt="img"
          loading="eager"
          priority={true}
          unoptimized={true}
        />
      </div>
      <ServicesDetails />
      <Footer />
    </>
  );
};

export default RoofTopRWH;
