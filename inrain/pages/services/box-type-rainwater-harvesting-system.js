import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { ServicesDetails } from "@/components/servicesDetails/servicesDetails";
import React from "react";
import Image from "next/image";
import serviceImg8 from "../../public/services/harvesting8.png";

const BoxTypeRWH = () => {
  return (
    <>
      <Navbar />
      <div
        data-aos="zoom-in-up"
        className="text-left m-10 md:m-20 md:flex items-center"
      >
        <div className="">
          <h1 className="text-2xl md:text-[2rem] font-semibold">
            Box Type Rainwater Harvesting System
          </h1>
          <p className="text-md md:text-lg pt-5 text-gray-500">
            Rainwater harvesting is increasingly vital in today's world as it
            contributes to enhancing global water reserves.{" "}
            <bold className="text-green-500 font-semibold">
              InRain Construction Pvt. Ltd.
            </bold>{" "}
            is a prominent provider of water conservation and management
            solutions, offering a range of rainwater harvesting options.
            Utilizing cutting-edge technology, we deliver cost-effective water
            conservation methods tailored to our clients' needs. Among the
            various rainwater harvesting methods, the Box Type Rainwater
            Harvesting System stands out for its efficiency in reducing reliance
            on mains water. This system is particularly suited for applications
            such as car washing and garden irrigation, as it does not require
            extensive filtration or purification. It can also be used for
            laundry and toilet flushing.
            <br></br>
            <br></br>
            The Box Type Rainwater Harvesting System is characterized by its use
            of a storage box. Water is collected from the roof via a water
            collector, which then passes through a filter to remove rooftop
            impurities. The filtered water is stored in the box for later use.
            <br></br>
            <br></br>Key features of the Box Type System include its
            installation and water supply mechanism. This system is designed to
            prioritize water supply from the rainwater box before drawing from
            the mains. In the event that the rainwater box is depleted, the
            mains supply automatically takes over, ensuring a continuous water
            supply. This setup helps significantly reduce water bills by making
            effective use of stored rainwater.
            <br></br>
            <br></br>
            The Box Type Rainwater Harvesting System features a compact design,
            making it easy to install and budget-friendly. Our experienced team
            assists customers in selecting the most suitable rainwater
            harvesting system based on their specific needs and budget.
          </p>
        </div>
        <Image
          className="mt-10 md:m-10 md:h-72 md:min-w-96"
          src={serviceImg8}
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

export default BoxTypeRWH;
