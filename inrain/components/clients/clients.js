import React from "react";
import Image from "next/image";
import { clientSlider1, clientSlider2 } from "../constant";

export const Clients = () => {
  return (
    <div className="mt-20">
      <h3
        data-aos="fade-up"
        className="text-center font-bold text-2xl m-5 md:text-4xl"
      >
        Our Happy Clients
      </h3>
      <div
        data-aos="fade-up"
        className="flex overflow-clip align-middle drop-shadow-2xl"
      >
        {clientSlider1.map((items) => (
          <div className="m-7 w-36 md:m-10 carouselAnimation md:w-44">
            <Image
              alt="img"
              className="h-20 min-w-20 md:min-w-28 md:h-28 drop-shadow-xl"
              src={items.img}
              loading="eager"
              priority={true}
              unoptimized={true}
            ></Image>
            <p className="text-center font-semibold text-sm md:text-lg m-2">
              {items.description}
            </p>
          </div>
        ))}
      </div>

      <div
        data-aos="fade-up"
        className="flex overflow-clip align-middle drop-shadow-2xl"
      >
        {clientSlider2.map((items) => (
          <div className="m-7 w-36 md:m-10 carouselAnimation md:w-44">
            <Image
              alt="img"
              className="h-20 min-w-20 md:min-w-28 md:h-28 drop-shadow-xl"
              src={items.img}
              loading="eager"
              priority={true}
              unoptimized={true}
            ></Image>
            <p className="text-center font-semibold text-sm md:text-lg m-2">
              {items.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
