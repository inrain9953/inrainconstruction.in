import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { ServicesDetails } from "@/components/servicesDetails/servicesDetails";
import React from "react";
import Image from "next/image";
import serviceImg6 from "../../public/services/harvesting6.jpg";

const GroundWaterRechargeSystem = () => {
  return (
    <>
      <Navbar />
      <div
        data-aos="zoom-in-up"
        className="text-left m-10 md:m-20 md:flex items-center"
      >
        <div className="">
          <h1 className="text-2xl md:text-[2rem] font-semibold">
            Ground Water Recharge System For Industries
          </h1>
          <p className="text-md md:text-lg pt-5 text-gray-500">
            <bold className="text-green-500 font-semibold">
              InRain Construction Pvt. Ltd.
            </bold>{" "}
            is committed to providing sustainable water conservation solutions
            for housing and commercial requirements. Industries these days
            require groundwater recharge systems as there is a huge demand for
            water supply for industrial use and the resources of water are very
            limited. Having a groundwater recharge system in place helps
            industries to reduce their dependency on surface water sources and
            secure their water supplies during periods of drought or water
            scarcity.
            <br></br>
            <br></br>
            <bold className="text-green-500 font-semibold">InRain Construction Pvt. Ltd.</bold> a water conservation and water
            management company offer groundwater recharge system for industries.
            Naturally, the groundwater gets recharged when water infiltrates
            through the top surface and reaches the water table. An optimized
            infiltration level is required for natural groundwater recharge. The
            other way is preserving wetlands, streams, and lakes is to ensure
            that they continue to recharge groundwater as it can seep through
            the surface to reach down the water table.
            <br></br>
            <br></br>Surface Recharge and Artificial Recharge are the other way
            that can help the industry to reduce their water bills by helping
            them to recharge the groundwater. In surface recharge methods the
            rainwater is collected and directed through a recharge pit where it
            can be percolated to the ground. This method is highly successful in
            areas which receive a decent amount of rain in a year.
            <br></br>
            <br></br>
            Artificial Recharge methods for industrial groundwater recharge can
            be used effectively in the areas which have a scarcity of surface
            water. This methodology requires to use of artificial structures to
            infuse water directly into the ground to recharge groundwater. With
            help of artificial wells, water storage tanks and water infiltration
            galleries ground can easily be recharged.
            <br></br>
            <br></br>
            Recharging groundwater will not only have a positive impact on the
            environment but also it will help in reducing the water bills of the
            industry. It will significantly reduce their reliance on the main
            supply.
          </p>
        </div>
        <Image
          className="mt-10 md:m-10 md:h-72 md:min-w-96"
          src={serviceImg6}
        />
      </div>
      <ServicesDetails />
      <Footer />
    </>
  );
};

export default GroundWaterRechargeSystem;
