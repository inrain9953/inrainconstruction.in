import React from "react";
import Image from "next/image";
import { carouselSlider } from "../constant";

export const Carousel = () => {
  return (
    <>
      <div className="mt-10">
        <h1 className="text-center text-xl md:text-3xl font-semibold text-green-600">
          Rainwater Harvesting Installation Process
        </h1>
      </div>
      <div
        data-aos="zoom-in-up"
        className="flex overflow-clip align-middle drop-shadow-2xl md:ml-14 md:mr-14"
      >
        {carouselSlider.map((items) => (
          <div className="m-4 md:m-10 carouselAnimation">
            <Image
              alt="img"
              className="h-52 min-w-40 md:min-w-48 md:h-56 drop-shadow-xl"
              src={items.img}
              loading="eager"
              priority
            ></Image>
            <p className="text-center font-semibold text-md md:text-lg m-2">
              {items.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
