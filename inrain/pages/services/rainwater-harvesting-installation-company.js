import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { ServicesDetails } from "@/components/servicesDetails/servicesDetails";
import React from "react";
import Image from "next/image";
import rain2 from "../../public/tree.png";
import serviceImg11 from "../../public/services/harvesting11.jpg";
import Head from "next/head";

const RWHInstallationCompany = () => {
  const title =
    "Rainwater Harvesting Installation Company | InRain® Construction Pvt. Ltd.";
  const desc =
    "InRain Construction Pvt. Ltd. is a leading rainwater harvesting installation company providing sustainable water solutions for residential, commercial, and industrial properties with in-house manufacturing and expert services.";
  const keyword =
    "rainwater harvesting installation company, rainwater harvesting company, sustainable water solutions, rainwater harvesting systems, residential rainwater harvesting, commercial water management, industrial water solutions, eco-friendly water systems, Delhi NCR rainwater harvesting, water resource management, rainwater harvesting experts";
  const canonical =
    "https://www.inrainconstruction.in/services/rainwater-harvesting-installation-company";
  const ogUrl =
    "https://www.inrainconstruction.in/services/rainwater-harvesting-installation-company";
  const ogTitle =
    "Rainwater Harvesting Installation Company | InRain® Construction Pvt. Ltd.";
  const ogDescription =
    "InRain Construction Pvt. Ltd. is a leading rainwater harvesting installation company providing sustainable water solutions for residential, commercial, and industrial properties with in-house manufacturing and expert services.";
  const twittertitle =
    "Rainwater Harvesting Installation Company | InRain® Construction Pvt. Ltd.";
  const twitterdescription =
    "InRain Construction Pvt. Ltd. is a leading rainwater harvesting installation company providing sustainable water solutions for residential, commercial, and industrial properties with in-house manufacturing and expert services.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="description" content={desc} />
        <meta name="keywords" content={keyword} />
        <meta name="canonical" content={canonical} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:url" content={ogUrl} />
        <meta name="twitter:title" content={twittertitle} />
        <meta name="twitter:description" content={twitterdescription} />
        <meta
          property="og:site_name"
          content="InRain® Construction Pvt. Ltd."
        />
      </Head>
      <Navbar />
      <div
        data-aos="zoom-in-up"
        className="text-left m-5 md:m-10 md:flex items-center"
      >
        <div className="">
          <h1 className="text-2xl font-semibold md:text-[2rem]">
            Rainwater Harvesting Installation Company
          </h1>
          <p className="text-md text-justify md:text-lg pt-5 text-gray-500">
            At <bold className="text-green-500 font-semibold">InRain®,</bold> we
            take pride in being the{" "}
            <bold className="text-black font-semibold">
              leading company for rainwater harvesting installations, committed
              to delivering sustainable water solutions.
            </bold>{" "}
            Our expertise lies in designing, installing, and maintaining
            advanced rainwater harvesting systems for residential, commercial,
            and industrial properties in Delhi and surrounding regions.
            <br></br>
            <br></br>
            As global water scarcity becomes a growing concern, the demand on
            conventional water sources increases. Rainwater harvesting provides
            a practical and eco-friendly way to address water shortages while
            easing the burden on municipal water supplies. At{" "}
            <bold className="text-green-500 font-semibold">InRain®,</bold> we
            harness natural resources to meet water needs while reducing our
            environmental impact.
          </p>
          <br></br>
          <br></br>
        </div>
        <Image
          className="mt-10 md:m-5 md:h-72 md:min-w-80"
          src={serviceImg11}
          alt="rainwater harvesting installation"
          loading="eager"
          priority={true}
          unoptimized={true}
        />
      </div>

      <div className="">
        <div
          data-aos="zoom-in-up"
          className="text-left md:text-left md:m-10 m-5"
        >
          <h3 className="text-2xl font-semibold md:text-[1.5rem]">
            Why Choose <bold className="text-green-500">InRain®</bold> ?
          </h3>
          <div className="md:flex items-center">
            <p className="text-md text-justify pt-5 text-gray-500 md:text-lg md:pt-5">
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
              <bold className="font-semibold text-black">
                InRain® is committed to revolutionizing water resource
                management with innovative rainwater harvesting techniques.
                Through our expertise, quality manufacturing, and dedication to
                sustainability, we aim to create a more water-efficient and
                eco-friendly future for our clients and the communities we
                serve.
              </bold>
            </p>
            <Image
              data-aos="zoom-in-up"
              alt="save rainwater"
              className="w-1/2 md:w-1/4 drop-shadow-2xl md:ml-5 object-cover m-auto"
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
