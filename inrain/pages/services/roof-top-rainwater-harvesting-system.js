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
            Roof top rainwater harvesting system is one of the most popular
            rainwater harvesting systems of the current times. Rain is one of
            the most natural resources of water by applying roof top rainwater
            harvesting, systems we will be able to use natural rainwater. The
            roof top rainwater harvesting systems are suitable for both
            residential and commercial areas.
            <br></br>
            <br></br>
            At{" "}
            <bold className="text-green-500 font-semibold">
              InRain Construction Pvt. Ltd.,
            </bold>{" "}
            we deal with a wide variety of rainwater harvesting systems. Our
            water conservation and management services are very flexible as we
            provide solutions based on the customer’s needs. We provide both
            complete package installation and management services. In case you
            need to install the roof top rainwater harvesting system in your
            newly constructed house, we provide a complete package along with
            maintenance services. You can choose specific components if you have
            already installed the rainwater harvesting system. Our packages are
            suitable for both commercial and residential areas.
            <br></br>
            <br></br>
            Filtration is the major requirement for roof top rainwater
            harvesting systems. As the device collects rainwater from the roof
            top it also collects various harmful pollutants which can be organic
            and inorganic. Hence, having proper water filtration is a must,
            various types of water filters can be used in roof top rainwater
            harvesting systems depending on the use of water. If you intend to
            use the harvested water for drinking and cooking, then filtration
            needs to be at a micro-level to make the water free from any
            impurities and ready for consumption. At{" "}
            <bold className="text-green-500 font-semibold">
              InRain Construction Pvt. Ltd.,
            </bold>{" "}
            we can help you with our wide variety of water filters depending on
            your filtration needs.
            <br></br>
            <br></br>A rooftop rainwater harvesting system comes with various
            benefits. Not only it helps to reduce water bills by providing a
            backup system for your mains supply but also helps in having a
            positive impact on the environment.
          </p>
        </div>
        <Image
          className="mt-10 md:m-10 md:h-72 md:min-w-96"
          src={serviceImg5}
        />
      </div>
      <ServicesDetails />
      <Footer />
    </>
  );
};

export default RoofTopRWH;
