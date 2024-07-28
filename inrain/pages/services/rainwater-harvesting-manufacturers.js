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
            we are passionate about sustainable water management and the
            preservation of our precious natural resources. As a leading
            rainwater harvesting manufacturer in Delhi, we specialize in
            providing innovative solutions for residential, commercial, and
            industrial applications. With the growing concerns over water
            scarcity and the need for efficient water management, rainwater
            harvesting has emerged as a viable and eco-friendly solution. Our
            mission is to empower individuals, businesses, and communities to
            harness the power of rainwater and reduce their dependence on
            traditional water sources.
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
              InRain<sup className="text-xs">TM</sup> Construction Pvt. Ltd.
            </bold>{" "}
            ?
          </h3>
          <div className="md:flex items-center">
            <p className="text-md pt-5 text-gray-500 md:text-lg md:pt-5">
              {" "}
              <bold className="font-semibold text-black">Expertise:</bold>{" "}
              Leveraging our extensive experience in rainwater harvesting, we
              possess the expertise and skills necessary to develop tailored
              solutions for various applications and environments. Our team
              stays abreast of the latest advancements in the industry, enabling
              us to provide innovative and cutting-edge solutions.<br></br>
              <br></br>{" "}
              <bold className="font-semibold text-black">
                High-profile Clientele:
              </bold>{" "}
              Our successful partnerships with renowned organizations such as
              HUL, PepsiCo, and Sobha Developers demonstrate our capability to
              meet the highest standards of quality and reliability. We value
              our strong client relationships and are committed to consistently
              exceeding expectations.
              <br></br>
              <br></br>{" "}
              <bold className="font-semibold text-black">
                In-house Manufacturing:
              </bold>{" "}
              With our own manufacturing facilities for rainwater harvesting
              modular structures and filters, we retain complete control over
              the production process. This ensures superior quality,
              cost-effectiveness, and timely delivery of our products.
              <br></br>
              <br></br>{" "}
              <bold className="font-semibold text-black">
                Sustainability Focus:
              </bold>{" "}
              We recognize the importance of sustainable practices in addressing
              water scarcity and protecting the environment. Our solutions are
              designed to conserve water, support ecological balance, and reduce
              dependence on external water sources.
              <br></br>
              <br></br>
              <bold className="font-semibold text-black">
                Comprehensive Services:
              </bold>{" "}
              InRain Construction offers a full range of services from initial
              project assessment through installation and ongoing maintenance,
              ensuring the optimal performance of rainwater harvesting systems.
              Our dedicated team provides technical support and monitoring
              services to maintain continued efficiency.
              <br></br>
              <br></br>
              <bold className="font-semibold text-green-500">
                InRain Construction Private Limited
              </bold>{" "}
              is dedicated to transforming water resource management through
              advanced rainwater harvesting techniques. With our industry
              expertise, quality manufacturing capabilities, and
              sustainability-focused approach, we strive to create a greener,
              more water-efficient future for our clients and communities.{" "}
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
