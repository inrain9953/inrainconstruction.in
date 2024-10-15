import React from "react";
import trophy from "../../public/trophyImg.png";
import approved from "../../public/approved.png";
import cerg from "../../public/cer-g.jpg";
import Image from "next/image";
import { InRainImage } from "../constant";
import Link from "next/link";
import service7 from "../../public/service7.jpg";

export const Main3 = () => {
  return (
    <>
      <div className="m-2 md:flex md:justify-center md:m-10 mt-20">
        <div data-aos="fade-up" className="md:content-center md:p-10">
          <p className="text-center font-semibold text-md text-green-500 md:text-lg">
            InRain<sup>®</sup> Construction Pvt Ltd.
          </p>
          <h1 className="text-center text-2xl font-semibold md:text-4xl">
            Rainwater Harvesting System in Delhi
          </h1>
          <hr className="m-2 md:m-5"></hr>
          <p className="m-5 text-md text-center text-gray-500 drop-shadow-md md:text-xl">
            <bold className="text-green-500 font-semibold">
              InRain<sup>®</sup> Construction Pvt. Ltd.
            </bold>{" "}
            is a premier provider of{" "}
            <bold className="text-black font-semibold">
              Rainwater Harvesting Systems in Delhi
            </bold>
            , specializing in delivering cutting-edge rainwater harvesting
            solutions tailored to meet the unique needs of our clients.<br></br>
            <br></br>We are committed to providing solutions in Delhi that not
            only address water scarcity but also help our clients reduce their
            environmental impact through sustainable practices. By continually
            prioritizing innovation and environmental responsibility,{" "}
            <bold className="text-black font-semibold">
              <bold className="text-green-500 font-semibold">
                InRain<sup>®</sup> Construction
              </bold>{" "}
              remains at the forefront of the rainwater harvesting industry,
            </bold>{" "}
            helping clients make the most of their water resources while
            fostering a positive impact on the environment.
            <bold className="text-black font-semibold">
              {" "}
              Our commitment to innovation, quality, and sustainability has made
              us a trusted partner in the industry.
            </bold>
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="m-2 flex justify-center md:inline"
        >
          <div className="bg-white flex items-center justify-center m-2 h-44 w-44 shadow-2xl rounded-lg border-2 border-green-500 text-center md:h-60 md:w-60 md:m-5 md:p-6">
            <div>
              <Image
                alt="img"
                className="w-16 m-auto md:w-24"
                src={approved}
                loading="eager"
                priority={true}
                unoptimized={true}
              ></Image>
              <p className="text-xs m-1">ISO 9001 : 2015</p>
              <p className="text-sm font-semibold md:text-lg">
                CERTIFIED COMPANY
              </p>
            </div>
          </div>
          <div className="bg-white flex justify-center items-center m-2 h-44 w-44 shadow-2xl rounded-lg border-2 border-green-500 text-center md:h-60 md:w-60 md:m-5 md:p-6">
            <div>
              <Image
                alt="img"
                className="w-16 m-auto md:w-24"
                src={trophy}
                loading="eager"
                priority={true}
                unoptimized={true}
              ></Image>
              <p className="text-xs m-1">Solution Provider</p>
              <p className="text-sm font-semibold md:text-lg">
                THE BEST INDUSTRIAL
              </p>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="m-2 flex justify-center md:inline"
        >
          <div className="bg-white flex justify-center items-center m-2 h-44 w-44 shadow-2xl rounded-lg border-2 border-green-500 text-center md:h-60 md:w-60 md:m-5 md:p-6">
            <div>
              <Image
                alt="img"
                className="w-16 m-auto md:w-24"
                src={cerg}
                loading="eager"
                priority={true}
                unoptimized={true}
              ></Image>
              <p className="text-sm m-1 font-semibold md:text-lg">
                INRAIN<sup>®</sup> CONSTRUCTION PVT. LTD.
              </p>
            </div>
          </div>
          <div className="bg-white flex justify-center items-center m-2 h-44 w-44 shadow-2xl rounded-lg border-2 border-green-500 text-center md:h-60 md:w-60 md:m-5 md:p-6">
            <div>
              <Image
                alt="img"
                className="w-16 m-auto md:w-24"
                src={trophy}
                loading="eager"
                priority={true}
                unoptimized={true}
              ></Image>
              <p className="text-xs m-1">ISO 14001 : 2015</p>
              <p className="text-sm font-semibold md:text-lg">
                CERTIFIED COMPANY
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="m-5">
        <Image
          className="w-full md:h-72 rounded-xl shadow-xl"
          alt="img"
          src={service7}
          loading="eager"
          priority={true}
          unoptimized={true}
        />
      </div>

      <div className="m-10 md:flex md:justify-center md:gap-24 md:m-10 md:mr-24 md:ml-24">
        <div data-aos="fade-up" className=" text-left">
          <h2 className="font-semibold md:text-lg text-green-600">
            InRain<sup>®</sup>
          </h2>
          <h1 className="text-2xl font-semibold md:text-[40px]">
            Rooftop Rainwater Harvesting System
          </h1>
          <p className="text-md text-gray-500 md:text-lg mt-3 md:mt-5">
            We offer a state-of-the-art Rooftop Rainwater Harvesting System in
            Delhi, designed for efficient filtration, temporary storage, and
            controlled release. This system is ideal for managing waste water
            channels and is built using our proprietary plastic injection-molded
            panels. We provide a wide range of modular options tailored to suit
            your specific needs. <br></br> As a leading provider of Rooftop
            Rainwater Harvesting Systems, we take pride in delivering top-tier,
            customized solutions. If you’re looking for the perfect system to
            match your requirements, feel free to reach out to us for
            personalized options and offers.{" "}
          </p>
          <Link href={"/services/roof-top-rainwater-harvesting-system"}>
            <button className="animated-button mt-5 bg-white">
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
            data-aos="fade-up"
            className="flex md:w-72 overflow-clip align-middle drop-shadow-2xl"
          >
            {InRainImage.map((items) => (
              <div className="ml-5 md:m-1 carouselAnimation">
                <Image
                  alt="img"
                  className="min-w-64 md:min-w-72 md:h-64 drop-shadow-xl"
                  src={items.img}
                  loading="eager"
                  priority={true}
                  unoptimized={true}
                ></Image>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
