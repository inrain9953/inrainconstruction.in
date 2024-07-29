import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";
import Image from "next/image";
import product1 from "./../public/product/product1.jpeg";
import product3 from "./../public/product/product3.png";
import product4 from "./../public/product/product4.jpeg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Carousel } from "@/components/carousel/carousel";

const Products = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="mb-14">
          <div className="m-5 md:flex items-center md:m-10 md:gap-10">
            <div data-aos="zoom-in-up" className="text-center mb-5">
              <h2 className="text-2xl font-semibold text-green-600">
                InRain<sup>®</sup>
              </h2>
              <Image
                src={product1}
                alt="img"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
              <h1 className="text-xl md:text-2xl m-2 font-semibold">
                Accident Free Honeycomb Structure
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div
                data-aos="zoom-in-up"
                className="bg-gray-300 rounded-xl p-5 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold text-center m-3 text-green-600">
                  High Void Ratio
                </h3>
                <hr className="m-2 "></hr>
                <div className="flex items-center text-left">
                  <ArrowRightAltIcon />
                  <p className="m-1 text-base">
                    Reduce the amount of digging and can make a big volume
                    storage in compact space.
                  </p>
                </div>
                <div className="flex items-center text-left">
                  <ArrowRightAltIcon />
                  <p className="m-1 text-base">
                    As digging is small so post processing is easy.
                  </p>
                </div>
              </div>

              <div
                data-aos="zoom-in-up"
                className="bg-gray-300 rounded-xl p-5 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold text-center m-3 text-green-600">
                  Time Saving
                </h3>
                <hr className="m-2 "></hr>
                <div className="flex items-center text-left">
                  <ArrowRightAltIcon />
                  <p className="m-1 text-base">
                    Installation can be done only by hand.
                  </p>
                </div>

                <div className="flex items-center text-left">
                  <ArrowRightAltIcon />
                  <p className="m-1 text-base">
                    Compared to using concrete no need curing time.
                  </p>
                </div>

                <div className="flex items-center text-left">
                  <ArrowRightAltIcon />
                  <p className="m-1 text-base">
                    No need of heavy equipment unlikely to use pre-casting
                    concrete products.
                  </p>
                </div>
              </div>

              <div
                data-aos="zoom-in-up"
                className="bg-gray-300 rounded-xl p-5 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold text-center m-3 text-green-600">
                  Heavy Load Capacity Design
                </h3>
                <hr className="m-2 "></hr>
                <div className="flex items-center text-left">
                  <ArrowRightAltIcon />
                  <p className="m-1 text-base">
                    Having load bearing strength up to 46 ton/sqm.
                  </p>
                </div>
              </div>

              <div
                data-aos="zoom-in-up"
                className="bg-gray-300 rounded-xl p-5 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold text-center m-3 text-green-600">
                  Easy Installation
                </h3>
                <hr className="m-2 "></hr>
                <div className="flex items-center text-left">
                  <ArrowRightAltIcon />
                  <p className="m-1 text-base">
                    Installation speed is outstanding.
                  </p>
                </div>
              </div>

              <div
                data-aos="zoom-in-up"
                className="bg-gray-300 rounded-xl p-5 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold text-center m-3 text-green-600">
                  No Pollution
                </h3>
                <hr className="m-2 "></hr>
                <div className="flex items-center text-left">
                  <ArrowRightAltIcon />
                  <p className="m-1 text-base">Polypropylene is used.</p>
                </div>
                <div className="flex items-center text-left">
                  <ArrowRightAltIcon />
                  <p className="m-1 text-base">
                    Excellent chemical and water resistant, do not pollute the
                    water.
                  </p>
                </div>
              </div>

              <div
                data-aos="zoom-in-up"
                className="bg-gray-300 rounded-xl p-5 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold text-center m-3 text-green-600">
                  Compact Storage
                </h3>
                <hr className="m-2 "></hr>
                <div className="flex items-center text-left">
                  <ArrowRightAltIcon />
                  <p className="m-1 text-base">
                    It can be easily stored if piled in the same direction and
                    reduces storage space at the site.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="zoom-in-up" className="mt-10 m-5 md:m-10">
            <div className="md:grid grid-cols-2 items-center">
              <Image
                src={product3}
                alt="img"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
              <Image
                src={product4}
                alt="img"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
            </div>
            <h1 className="text-center text-xl md:text-2xl m-2 font-semibold">
              High Quality Filtration System
            </h1>
          </div>
        </div>
      </div>
      <Carousel />
      <Footer />
    </>
  );
};

export default Products;
