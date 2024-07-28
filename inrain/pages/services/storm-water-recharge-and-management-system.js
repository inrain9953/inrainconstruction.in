import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { ServicesDetails } from "@/components/servicesDetails/servicesDetails";
import React from "react";
import Image from "next/image";
import serviceImg9 from "../../public/services/harvesting9.jpg";

const StormWaterRechargeManagementSystem = () => {
  return (
    <>
      <Navbar />
      <div
        data-aos="zoom-in-up"
        className="text-left m-10 md:m-20 md:flex items-center"
      >
        <div className="">
          <h1 className="text-2xl md:text-[2rem] font-semibold">
            Storm Water Recharge and Management System
          </h1>
          <p className="text-md md:text-lg pt-5 text-gray-500">
            Storm Water Recharge & Management is very crucial in the modern-day
            world. The climatic change and depreciating resources require
            humankind to take steps for water conservation to maintain
            sustainable development growth. We can easily see the negative
            effect of fast pace urban development on natural resources like
            water; to mitigate adverse effects incorporating stormwater recharge
            & management in the current development plan is very important.
            <br></br>
            <br></br>
            Urbanization and rainwater harvesting have to go hand in hand for
            sustainable development. A concept like sponge city has already
            started making waves. The primary aim of a sponge city is to use
            rainwater to revive our natural resources. The concept focuses on
            absorbing, storing, and utilizing rainwater runoff.
            <br></br>
            <br></br>At{" "}
            <bold className="text-green-500 font-semibold">
              InRain Construction Pvt. Ltd.
            </bold>{" "}
            we aim to provide you with time and money-saving solutions for water
            conservation. We use various techniques to manage stormwater runoff.
            The collected runoff water across different surfaces gets through a
            connected recharge shaft, and after getting filtered, it gets stored
            in a honeycomb box-type structure. This saves funds for the
            construction of excess sewage lines and over pumps by local bodies.
            <br></br>
            <br></br>
            We also offer stormwater recharge and management solutions like -
            <br></br>
            <br></br>
            <bold className="font-semibold text-black">Bioretention:</bold> This methodology uses plants and herbs for capturing
            and filtering water in excess rainwater. It not only helps in
            removing pollutants from the water but also helps in recharging
            groundwater.
            <br></br>
            <br></br>
            <bold className="font-semibold text-black">Permeable Pavement:</bold> It is one of the most popular techniques of the
            current time. It is equally popular in both urban and suburban
            areas. It uses a porous surface of permeable concrete that lets
            runoff water infiltrate into the ground. This technique is very
            useful in parking lots, sidewalks internal housing society roads.
            <br></br>
            <br></br>
            Green Roofs, Rain Garder and Constructed Wetlands are a few other
            ways of managing stormwater runoff. Stormwater management, providing
            more sustainable and effective solutions that benefit both the
            environment and society.
          </p>
        </div>
        <Image
          className="mt-10 md:m-10 md:h-72 md:min-w-96"
          src={serviceImg9}
        />
      </div>
      <ServicesDetails />
      <Footer />
    </>
  );
};

export default StormWaterRechargeManagementSystem;
