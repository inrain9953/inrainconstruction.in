import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { ServicesDetails } from "@/components/servicesDetails/servicesDetails";
import React from "react";
import Image from "next/image";
import serviceImg4 from "../../public/services/harvesting4.jpg";

const FRPbasedRWH = () => {
  return (
    <>
      <Navbar />
      <div
        data-aos="zoom-in-up"
        className="text-left m-10 md:m-20 md:flex items-center"
      >
        <div className="">
          <h1 className="text-2xl md:text-[2rem] font-semibold">
            Fiber Reinforced Polymer(FRP) based Rainwater Harvesting System
          </h1>
          <p className="text-md md:text-lg pt-5 text-gray-500">
            <bold className="text-green-500 font-semibold">
              InRain Construction Pvt. Ltd.
            </bold>{" "}
            is helping communities and industries by providing sustainable and
            cost-effective water conservation methods. Rainwater harvesting is
            no longer looked at as a time-consuming and costly solution with
            high maintenance. Advanced technology has quickly started to
            revolutionise the industry with its cost-effective solutions. We at
            Inrain Construction Pvt. Ltd. offer a wide range of solutions which
            are not only cost-effective but also environment friendly.
            <br></br>
            <br></br>
            FRP based rainwater harvesting system offers an economic solution to
            modern days requirements. Fiber Reinforced Polymer based systems are
            becoming popular very fast as it is not only lightweight but also
            very sturdy. Its ability to resist corrosion and ultraviolet makes
            it the material of choice for rainwater harvesting systems.
            <br></br>
            <br></br>In the traditional methods of rainwater harvesting system
            installation cost and maintenance was the major challenge. As it was
            using concrete or metal for constructing the water collection tank
            or pit. These pits are not only expensive but also had high
            maintenance as they are prone to corrosion and developing
            infestation. However, Fiber Reinforced Polymers on the other are
            very much durable and low on maintenance, this has increased the
            interest of people in FRP based rainwater harvesting systems.
            <br></br>
            <br></br>
            These FRP based rainwater harvesting systems are portable and
            recyclable which helps in reducing waste and cost. Thereby
            encouraging more and more people to adopt sustainable water
            conservation methods and reduce their dependency on mains water
            supply, as a result helping the environment in an eco-friendly way.
            <br></br>
            <br></br>
            For all those housing societies and businesses that are looking to
            contribute to the environment in a positive way, FRP based rainwater
            harvesting system is a perfect choice. So, whether you are building
            a new house, looking to reduce the water bill of your business or
            trying to include sustainable water conservation in your renovated
            accommodation, FRP based rainwater harvesting offers the complete
            solutions.
          </p>
        </div>
        <Image className="mt-10 md:m-10 md:h-72 md:min-w-96" src={serviceImg4} />
      </div>
      <ServicesDetails />
      <Footer />
    </>
  );
};

export default FRPbasedRWH;
