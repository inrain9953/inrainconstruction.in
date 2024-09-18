import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";
import serviceImg1 from "../../public/services/harvesting1.jpg";
import Image from "next/image";
import { ServicesDetails } from "@/components/servicesDetails/servicesDetails";

const RainwaterForWarehouses = () => {
  return (
    <>
      <Navbar />
      <div
        data-aos="zoom-in-up"
        className="text-left m-10 md:m-20 md:flex items-center"
      >
        <div className="">
          <h1 className="text-2xl md:text-[2rem] font-semibold">
            Rainwater Harvesting System for Warehouses
          </h1>
          <p className="text-md md:text-lg pt-5 text-gray-500">
            At{" "}
            <bold className="text-green-500 font-semibold">
              InRain Construction Pvt. Ltd.
            </bold>{" "}
            our goal is to deliver comprehensive water conservation and
            management solutions tailored to each client’s specific needs. As
            the demand for potable water continues to rise and natural water
            sources become increasingly scarce, there is an urgent need to
            conserve water due to its extensive use in daily activities.
            Rainwater harvesting offers an effective solution for both
            residential and commercial applications.
            <br></br>
            <br></br>
            Warehouses, in particular, have high daily water consumption, making
            reliance on mains supply or groundwater unsustainable. Not only does
            this deplete natural resources quickly, but it also becomes costly.
            Installing a rainwater harvesting system for warehouses addresses
            both concerns by offering a cost-effective and environmentally
            friendly alternative. Our expertise lies in understanding each
            client’s unique needs and delivering customized solutions that help
            optimize both space and cost.
            <br></br>
            <br></br> Our modular rainwater harvesting systems are ideal for
            water conservation in commercial spaces like warehouses. These
            systems utilize stackable modules made from recycled co-polymer
            materials, making them easy to install and allowing the structure to
            be built efficiently. The use of recycled materials ensures that the
            system is both cost-effective and environmentally friendly,
            promoting sustainable water conservation. For commercial spaces, the
            goal is often to minimize the space occupied by rainwater harvesting
            systems. Our modular systems offer a high load-bearing capacity,
            enabling the top surface to be used for other purposes, thus
            maximizing space efficiency. In addition, these systems require
            minimal maintenance, making them a practical and sustainable
            solution for water management in warehouses.
          </p>
        </div>
        <Image
          className="mt-10 md:m-10 md:h-72 md:min-w-96"
          src={serviceImg1}
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

export default RainwaterForWarehouses;
