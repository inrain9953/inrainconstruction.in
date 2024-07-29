import React from "react";
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";
import Image from "next/image";
import { features } from "../constant";

export const Main1 = () => {
  useEffect(() => {
    const filterContainer = document.querySelector(".filter-container");
    const waterFilter = document.querySelector(".water");
    const constainerDetails = document.querySelector(".container-details");
    setTimeout(() => {
      filterContainer.classList.add("filter-active");
      waterFilter.classList.add("water-disable");
      constainerDetails.classList.add("container-details-active");
    }, 4010);
  }, []);

  return (
    <>
      <div
        data-aos="zoom-in-up"
        className="text-center main1-background md:text-left"
      >
        <div className="relative">
          <h1 className="relative text-green-700 z-30 pt-5 text-lg font-semibold drop-shadow-md md:text-4xl md:pt-10 md:ml-16">
            InRain<sup>®</sup> Construction Pvt Ltd.
          </h1>
          <hr className="m-2 md:m-4"></hr>
          <p className="relative z-20 text-2xl font-semibold align-middle md:text-3xl md:ml-16 md:m-5">
            Water Conservation <br></br>& <br></br>Management Company
          </p>

          <span className="relative z-20 text-md font-semibold align-middle lg:inline drop-shadow-md md:text-xl">
            <TypeAnimation
              className="md:ml-16"
              sequence={[
                "Atmosphere of Excellence in Water Conservation & Management Technologies",
                3000,
              ]}
              repeat={Infinity}
            />
          </span>

          {/* <p className="relative rounded-xl bg-green-50 md:bg-transparent z-20 text-sm m-5 font-semibold align-middle md:text-lg md:ml-16 md:m-5">
            At <bold className="text-green-700">InRain Construction,</bold> we
            offer Modular Rainwater Harvesting System Service Provider that help
            our clients optimize water resources and promote environmental
            conservation.
          </p> */}
        </div>

        <div className="filter-container hidden"></div>

        <div className="hidden flex-wrap mt-5 justify-between absolute bottom-0 z-10 container-details w-full">
          {features.map((feature) => (
            <div className="m-4 w-40 rounded-lg text-center items-center drop-shadow-2xl h-32 flex cursor-pointer">
              <Image
                alt="img"
                className="object-cover h-32 rounded-lg opacity-60"
                src={feature.img}
                loading="eager"
              ></Image>
              {/* <WaterDropIcon className="items-center m-4 absolute top-0" /> */}
              <p className="items-center m-4 text-md font-semibold absolute top-5 text-white drop-shadow-2xl">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="water">
        <p className="water-content text-xl font-semibold">
          Save The Water <br></br>Save The Life
        </p>
        <div className="drop-container">
          <div className="drop"></div>
        </div>
      </div>
    </>
  );
};
