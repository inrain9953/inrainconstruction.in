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
      <div data-aos="zoom-in-up" className="text-left m-10 md:m-20 md:flex items-center">
        <div className="">
          <h1 className="text-2xl md:text-[2rem] font-semibold">
            Rainwater Harvesting System for Warehouses
          </h1>
          <p className="text-md md:text-lg pt-5 text-gray-500">
            At{" "}
            <bold className="text-green-500 font-semibold">
              InRain Construction Pvt. Ltd.
            </bold>{" "}
            our endeavour is to provide comprehensive water conservation and
            management solutions as per the client's requirements. The use of
            potable water has increased over the years and the source of water
            are very limited. There is a growing need to save continuously
            declining water levels because of the extensive use of water in
            various daily activities. Rainwater harvesting is one of the best
            solutions in water conservation and management it works for both
            residential and commercial spaces.
            <br></br>
            <br></br>
            Commercial places like warehouses have a huge water consumption on
            daily basis; so depending on the mains supply or groundwater is not
            feasible. Not only it will exhaust the natural resource faster but
            also be very expensive on the pocket and both these concerns can be
            easily addressed by installing a rainwater harvesting system for the
            warehouse. Commercial warehouses have to overcome the challenges of
            saving cost and space at the same time. This is where our expertise
            lies; our experts spend time understanding the client's requirements
            and providing them with the most suitable option.
            <br></br>
            <br></br> Our modular rainwater harvesting systems are perfectly
            suitable for water conservation and management in commercial places
            like warehouses. In this rainwater harvesting system, recycled
            co-polymer-based modules are used. These stackable modules are easy
            to install and help in building the rainwater harvesting structure
            in a very small amount of time. These modules are made of recycled
            material, hence, they are not only economical but also eco-friendly.
            Thus helping in providing sustainable water conservation that suits
            the environment. For commercial space, one would like to have a
            rainwater harvesting system that will occupy very little space. The
            good thing about this modular rainwater harvesting system is that it
            has a tremendous load-bearing capacity which means the top surface
            of the Inrain modular harvesting system can be utilized for various
            other purposes. It is big on space saving and low on maintenance.
          </p>
        </div>
        <Image className="mt-10 md:m-10 md:h-72 md:min-w-96" src={serviceImg1} />
      </div>
      <ServicesDetails />
      <Footer />
    </>
  );
};

export default RainwaterForWarehouses;
