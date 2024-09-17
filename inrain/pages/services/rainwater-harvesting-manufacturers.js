import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { ServicesDetails } from "@/components/servicesDetails/servicesDetails";
import React from "react";
import rain2 from "../../public/tree.png";
import Image from "next/image";

const RWHManufacturer = () => {
  return (
    <>
      <Navbar />
      <div
        data-aos="zoom-in-up"
        className="text-left m-10 md:m-20 md:flex items-center"
      >
        <div className="">
          <h1 className="text-2xl font-semibold md:text-[2rem]">
            Rainwater Harvesting Manufacturers
          </h1>
          <p className="text-md md:text-lg pt-5 text-gray-500">
            At{" "}
            <bold className="text-green-500 font-semibold">
              InRain® Construction Pvt. Ltd.,
            </bold>{" "}
            we are committed to promoting sustainable water management and
            preserving our natural resources. As a top rainwater harvesting
            manufacturer based in Delhi, we specialize in creating innovative
            solutions for residential, commercial, and industrial use. With
            increasing concerns around water scarcity and the need for effective
            water management, rainwater harvesting has become an
            environmentally-friendly and viable solution. Our goal is to empower
            individuals, businesses, and communities to effectively capture
            rainwater, reducing their reliance on traditional water sources.
          </p>
        </div>
      </div>

      <div className="">
        <div
          data-aos="zoom-in-up"
          className="text-left md:text-left md:m-20 m-10"
        >
          <h3 className="text-2xl font-bold md:text-[2rem] md:font-semibold">
            Why Choose{" "}
            <bold className="text-green-500">
              InRain<sup>®</sup> Construction Pvt. Ltd.
            </bold>{" "}
            ?
          </h3>
          <div className="md:flex items-center">
            <p className="text-md pt-5 text-gray-500 md:text-lg md:pt-5">
              {" "}
              <bold className="font-semibold text-black">Expertise:</bold> With
              years of experience in the rainwater harvesting sector, we have
              the skills and knowledge to deliver customized solutions tailored
              to meet specific needs. Our team stays updated with the latest
              industry innovations to provide cutting-edge and efficient
              solutions.<br></br>
              <br></br>{" "}
              <bold className="font-semibold text-black">
                High-profile Clientele:
              </bold>{" "}
              Our collaborations with leading companies such as HUL, PepsiCo,
              and Sobha Developers showcase our ability to deliver projects that
              meet the highest standards. We value these relationships and are
              dedicated to consistently exceeding client expectations.
              <br></br>
              <br></br>{" "}
              <bold className="font-semibold text-black">
                In-house Manufacturing:
              </bold>{" "}
              Owning our manufacturing facilities for rainwater harvesting
              modular structures and filtration systems allows us to maintain
              full control over production. This ensures high-quality products,
              cost efficiency, and timely deliveries.
              <br></br>
              <br></br>{" "}
              <bold className="font-semibold text-black">
                Sustainability Focus:
              </bold>{" "}
              We understand the importance of sustainability in addressing water
              scarcity and protecting the environment. Our solutions are
              designed to conserve water, promote ecological balance, and reduce
              dependence on external water sources.
              <br></br>
              <br></br>
              <bold className="font-semibold text-black">
                Comprehensive Services:
              </bold>{" "}
              InRain Construction provides end-to-end services, from the initial
              project assessment through to installation and ongoing
              maintenance. We ensure the efficient performance of our rainwater
              harvesting systems with continuous technical support and
              monitoring.
              <br></br>
              <br></br>
              <bold className="font-semibold text-green-500">
                InRain® Construction Private Limited
              </bold>{" "}
              is committed to revolutionizing water resource management through
              advanced rainwater harvesting technologies. With our expertise,
              state-of-the-art manufacturing capabilities, and dedication to
              sustainability, we aim to foster a greener, water-efficient future
              for our clients and communities.{" "}
            </p>
            <Image
              data-aos="zoom-in-up"
              alt="img"
              className="w-9/12 drop-shadow-2xl md:ml-5 object-cover m-auto"
              src={rain2}
            />
          </div>
        </div>
      </div>
      <ServicesDetails />
      <Footer />
    </>
  );
};

export default RWHManufacturer;
