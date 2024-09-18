import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { ServicesDetails } from "@/components/servicesDetails/servicesDetails";
import React from "react";
import Image from "next/image";
import rain2 from "../../public/tree.png";
import serviceImg11 from "../../public/services/harvesting11.jpg";

const RWHInstallationCompany = () => {
  return (
    <>
      <Navbar />
      <div
        data-aos="zoom-in-up"
        className="text-left m-10 md:m-20 md:flex items-center"
      >
        <div className="">
          <h1 className="text-2xl font-semibold md:text-[2rem]">
            Rainwater Harvesting Installation Company
          </h1>
          <p className="text-md md:text-lg pt-5 text-gray-500">
            <bold className="text-green-500 font-semibold">
              InRain Construction Pvt. Ltd.,
            </bold>{" "}
            we take pride in being the leading company for rainwater harvesting
            installations, committed to delivering sustainable water solutions.
            Our expertise lies in designing, installing, and maintaining
            advanced rainwater harvesting systems for residential, commercial,
            and industrial properties in Delhi and surrounding regions.
            <br></br>
            <br></br>
            As global water scarcity becomes a growing concern, the demand on
            conventional water sources increases. Rainwater harvesting provides
            a practical and eco-friendly way to address water shortages while
            easing the burden on municipal water supplies. At{" "}
            <bold className="text-green-500 font-semibold">
              InRain Construction Pvt. Ltd.,
            </bold>{" "}
            we harness natural resources to meet water needs while reducing our
            environmental impact.
          </p>
          <br></br>
          <br></br>
        </div>
        <Image
          className="mt-10 md:m-10 md:h-72 md:min-w-96"
          src={serviceImg11}
          alt="img"
          loading="eager"
          priority={true}
          unoptimized={true}
        />
      </div>

      <div className="">
        <div
          data-aos="zoom-in-up"
          className="text-left md:text-left md:m-20 m-10"
        >
          <h3 className="text-2xl font-semibold md:text-[1.5rem]">
            Why Choose{" "}
            <bold className="text-green-500">
              InRain<sup className="text-xs">®</sup> Construction Pvt. Ltd.
            </bold>{" "}
            ?
          </h3>
          <div className="md:flex items-center">
            <p className="text-md pt-5 text-gray-500 md:text-lg md:pt-5">
              {" "}
              <bold className="font-semibold text-black">Expertise:</bold> With
              years of experience in the rainwater harvesting industry, we have
              the technical knowledge and skill to develop customized solutions
              for a wide range of applications. Our team stays up-to-date with
              the latest industry innovations, ensuring we deliver cutting-edge
              solutions that meet modern needs.<br></br>
              <br></br>{" "}
              <bold className="font-semibold text-black">
                High-profile Clientele:
              </bold>{" "}
              Our track record includes successful collaborations with leading
              organizations such as HUL, PepsiCo, and Sobha Developers. These
              partnerships reflect our commitment to high standards of quality
              and reliability. We continually strive to exceed our clients’
              expectations, building strong, lasting relationships.
              <br></br>
              <br></br>{" "}
              <bold className="font-semibold text-black">
                In-house Manufacturing:
              </bold>{" "}
              By maintaining our own manufacturing facilities for rainwater
              harvesting modules and filters, we ensure complete control over
              product quality, cost-efficiency, and timely delivery. This allows
              us to offer superior products tailored to our clients' needs.
              <br></br>
              <br></br>{" "}
              <bold className="font-semibold text-black">
                Sustainability Focus:
              </bold>{" "}
              We understand the vital role of sustainable practices in tackling
              water scarcity and preserving the environment. Our solutions are
              designed to conserve water, promote ecological balance, and reduce
              reliance on external water supplies.
              <br></br>
              <br></br>
              <bold className="font-semibold text-black">
                Comprehensive Services:
              </bold>{" "}
              InRain Construction offers a full suite of services, from initial
              project evaluation to installation and ongoing system maintenance.
              Our team ensures that rainwater harvesting systems operate at peak
              efficiency, with technical support and monitoring services
              available to maintain long-term performance.
              <br></br>
              <br></br>
              <bold className="font-semibold text-green-500">
                InRain Construction Private Limited
              </bold>{" "}
              is committed to revolutionizing water resource management with
              innovative rainwater harvesting techniques. Through our expertise,
              quality manufacturing, and dedication to sustainability, we aim to
              create a more water-efficient and eco-friendly future for our
              clients and the communities we serve.{" "}
            </p>
            <Image
              data-aos="zoom-in-up"
              alt="img"
              className="w-9/12 drop-shadow-2xl md:ml-5 object-cover m-auto"
              src={rain2}
              loading="eager"
              priority={true}
              unoptimized={true}
            />
          </div>
        </div>
      </div>
      <ServicesDetails />
      <Footer />
    </>
  );
};

export default RWHInstallationCompany;
