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
            Effective stormwater recharge and management are essential in
            today’s world due to climate change and diminishing resources. Rapid
            urban development has negatively impacted natural resources like
            water, making it crucial to incorporate stormwater management
            strategies into development plans to mitigate these effects.
            <br></br>
            <br></br>
            Urbanization and rainwater harvesting must work together to achieve
            sustainable development. The concept of a “sponge city” is gaining
            traction, aiming to use rainwater to restore natural resources.
            Sponge cities focus on absorbing, storing, and utilizing rainwater
            runoff to enhance environmental sustainability.
            <br></br>
            <br></br>At{" "}
            <bold className="text-green-500 font-semibold">
              InRain Construction Pvt. Ltd.
            </bold>{" "}
            we provide solutions that save time and money while conserving
            water. We employ various techniques to manage stormwater runoff.
            Collected runoff from different surfaces is directed through a
            recharge shaft, filtered, and stored in a honeycomb box-type
            structure. This approach reduces the need for extensive sewage
            infrastructure and overburdened pumps.
            <br></br>
            <br></br>
            We offer several stormwater recharge and management solutions,
            including -<br></br>
            <br></br>
            <bold className="font-semibold text-black">Bioretention:</bold> This
            method utilizes plants and vegetation to capture and filter excess
            rainwater. It not only removes pollutants from the water but also
            contributes to groundwater recharge.
            <br></br>
            <br></br>
            <bold className="font-semibold text-black">
              Permeable Pavement:
            </bold>{" "}
            A popular technique, especially in urban and suburban areas, this
            method uses porous concrete to allow runoff water to infiltrate the
            ground. It is particularly effective for parking lots, sidewalks,
            and internal roads within housing communities.
            <br></br>
            <br></br>
            Additional methods like green roofs, rain gardens, and constructed
            wetlands are also effective for managing stormwater runoff. Our
            stormwater management solutions are designed to be sustainable and
            beneficial for both the environment and society.
          </p>
        </div>
        <Image
          className="mt-10 md:m-10 md:h-72 md:min-w-96"
          src={serviceImg9}
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

export default StormWaterRechargeManagementSystem;
