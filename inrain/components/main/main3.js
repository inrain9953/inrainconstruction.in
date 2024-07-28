import React from "react";
import trophy from "../../public/trophyImg.png";
import approved from "../../public/approved.png";
import cerg from "../../public/cer-g.jpg";
import Image from "next/image";
import { InRainImage } from "../constant";
import Link from "next/link";

export const Main3 = () => {
  return (
    <>
      <div className="m-2 md:flex md:justify-center md:m-10 mt-20">
        <div data-aos="zoom-in-up" className="md:content-center md:p-10">
          <p className="text-center font-semibold text-md text-green-500 md:text-lg">
            InRain<sup>®</sup> Construction Pvt Ltd.
          </p>
          <h1 className="text-center text-2xl font-semibold md:text-4xl">
            Rainwater Harvesting System in Delhi
          </h1>
          <hr className="m-2 md:m-5"></hr>
          <p className="m-5 text-md text-center text-gray-500 drop-shadow-md md:text-xl">
            Our commitment to innovation, quality, and sustainability has made
            us a trusted partner in the industry.
          </p>
        </div>

        <div
          data-aos="zoom-in-up"
          className="m-2 flex justify-center md:inline"
        >
          <div className="flex items-center justify-center m-2 h-44 w-44 shadow-2xl rounded-lg border-2 border-green-500 text-center md:h-60 md:w-60 md:m-5 md:p-6">
            <div>
              <Image
                alt="img"
                className="w-16 m-auto md:w-24"
                src={approved}
              ></Image>
              <p className="text-xs m-1">ISO 9001 : 2015</p>
              <p className="text-sm font-semibold md:text-lg">
                CERTIFIED COMPANY
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center m-2 h-44 w-44 shadow-2xl rounded-lg border-2 border-green-500 text-center md:h-60 md:w-60 md:m-5 md:p-6">
            <div>
              <Image
                alt="img"
                className="w-16 m-auto md:w-24"
                src={trophy}
              ></Image>
              <p className="text-xs m-1">Solution Provider</p>
              <p className="text-sm font-semibold md:text-lg">
                THE BEST INDUSTRIAL
              </p>
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-in-up"
          className="m-2 flex justify-center md:inline"
        >
          <div className="flex justify-center items-center m-2 h-44 w-44 shadow-2xl rounded-lg border-2 border-green-500 text-center md:h-60 md:w-60 md:m-5 md:p-6">
            <div>
              <Image
                alt="img"
                className="w-16 m-auto md:w-24"
                src={cerg}
              ></Image>
              <p className="text-sm m-1 font-semibold md:text-lg">
                INRAIN<sup>®</sup> CONSTRUCTION PVT. LTD.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center m-2 h-44 w-44 shadow-2xl rounded-lg border-2 border-green-500 text-center md:h-60 md:w-60 md:m-5 md:p-6">
            <div>
              <Image
                alt="img"
                className="w-16 m-auto md:w-24"
                src={trophy}
              ></Image>
              <p className="text-xs m-1">ISO 14001 : 2015</p>
              <p className="text-sm font-semibold md:text-lg">
                CERTIFIED COMPANY
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="m-10 md:flex md:justify-center md:m-10 md:mr-24 md:ml-24">
        <div data-aos="zoom-in-up" className="md:w-[75%] text-left">
          <h2 className="font-semibold md:text-lg text-green-600">
            InRain<sup>®</sup>
          </h2>
          <h1 className="text-2xl font-semibold md:text-[40px]">
            Rooftop Rainwater Harvesting System
          </h1>
          <p className="text-md text-gray-500 md:text-lg mt-3">
            A Rooftop Rainwater Harvesting System in Delhi intended for
            filtration, transitory maintenance and ensuing release. It is
            utilized in waste channel application. It is developed utilizing our
            restrictive plastic infusion shaped boards.We provide all range of
            modules as per the requirements. <br></br> We take pride in our
            position as a leading Rooftop Rainwater Harvesting System Service
            Provider in the industry, offering superior solutions customized to
            meet individual needs. If you are searching for the optimal
            rainwater harvesting system, feel free to contact us to explore
            customized offers that match your requirements.{" "}
          </p>
          <Link href={"/services/roof-top-rainwater-harvesting-system"}>
            <button className="animated-button mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="arr-2"
                viewBox="0 0 24 24"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">EXPLORE</span>
              <span className="circle"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="arr-1"
                viewBox="0 0 24 24"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </Link>
        </div>

        <div className="md:ml-10 w-64 m-auto mt-10">
          <div
            data-aos="zoom-in-up"
            className="flex md:w-72 overflow-clip align-middle drop-shadow-2xl"
          >
            {InRainImage.map((items) => (
              <div className="ml-5 md:m-1 carouselAnimation">
                <Image
                  alt="img"
                  className="min-w-64 md:min-w-72 md:h-64 drop-shadow-xl"
                  src={items.img}
                ></Image>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
