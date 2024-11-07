import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { ServicesDetails } from "@/components/servicesDetails/servicesDetails";
import React from "react";
import Image from "next/image";
import serviceImg7 from "../../public/services/harvesting7.jpg";

const RWHvendorsInNcr = () => {
  return (
    <>
      <Navbar />
      <div
        data-aos="zoom-in-up"
        className="text-left m-10 md:m-20 md:flex items-center"
      >
        <div className="">
          <h1 className="text-2xl md:text-[2rem] font-semibold">
            Rainwater Harvesting Vendors in Delhi-Gurgaon
          </h1>
          <p className="text-md text-justify md:text-lg pt-5 text-gray-500">
            <bold className="text-green-500 font-semibold">
              InRain Construction Pvt. Ltd.
            </bold>{" "}
            is a leading provider of water conservation and management services,
            known for delivering innovative, technology-driven solutions
            tailored to contemporary needs. As a top vendor of rainwater
            harvesting systems in the Delhi-Gurgaon region, we understand the
            unique challenges faced by modern industries and housing societies.
            Our approach combines advanced technology with cost-effectiveness to
            address these water conservation needs.
            <br></br>
            <br></br>
            Our rainwater harvesting systems utilize cutting-edge German
            technology. We are dedicated to the 'Make in India' initiative, with
            all manufacturing carried out in-house to maintain consistent
            quality and enhance customer satisfaction.
            <br></br>
            <br></br>Given India's dense population and increasing demand for
            eco-friendly water conservation methods, our advanced modular
            rainwater harvesting systems are an ideal solution. India’s
            favorable geographical location and annual rainfall make it
            well-suited for harnessing natural rainwater. Our modular systems
            are not only cost-effective and environmentally friendly but also
            designed to save space—a critical factor in a densely populated
            country like India.
            <br></br>
            <br></br>
            With global groundwater levels rapidly declining due to overuse,
            effective rainwater harvesting systems are essential.{" "}
            <bold className="text-green-500 font-semibold">
              InRain Construction Pvt. Ltd.
            </bold>{" "}
            contributes to this important socio-economic effort by facilitating
            the use of natural rainwater. Our team has successfully supported
            over 150 rainwater harvesting projects, offering comprehensive
            services that include installation, maintenance, and management. Our
            solutions are designed to be economical, eco-friendly, and superior
            to traditional rainwater harvesting methods.
          </p>
        </div>
        <Image
          className="mt-10 md:m-10 md:h-72 md:min-w-96"
          src={serviceImg7}
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

export default RWHvendorsInNcr;
