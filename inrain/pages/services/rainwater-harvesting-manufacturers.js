import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { ServicesDetails } from "@/components/servicesDetails/servicesDetails";
import React from "react";
import rain2 from "../../public/tree.png";
import Image from "next/image";
import Head from "next/head";

const RWHManufacturer = () => {
  const title =
    "Rainwater Harvesting Manufacturers | InRain® Construction Pvt. Ltd.";
  const desc =
    "InRain® Construction Pvt. Ltd., a leading rainwater harvesting manufacturer in Delhi, provides innovative and sustainable solutions for residential, commercial, and industrial water management with in-house manufacturing and expert services.";
  const keyword =
    "rainwater harvesting manufacturers, sustainable water management, rainwater harvesting systems, rainwater harvesting solutions, commercial rainwater harvesting, industrial water solutions";
  const canonical =
    "https://www.inrainconstruction.in/services/rainwater-harvesting-manufacturers";
  const ogUrl =
    "https://www.inrainconstruction.in/services/rainwater-harvesting-manufacturers";
  const ogTitle =
    "Rainwater Harvesting Manufacturers | InRain® Construction Pvt. Ltd.";
  const ogDescription =
    "InRain® Construction Pvt. Ltd., a leading rainwater harvesting manufacturer in Delhi, provides innovative and sustainable solutions for residential, commercial, and industrial water management with in-house manufacturing and expert services.";
  const twittertitle =
    "Rainwater Harvesting Manufacturers | InRain® Construction Pvt. Ltd.";
  const twitterdescription =
    "InRain® Construction Pvt. Ltd., a leading rainwater harvesting manufacturer in Delhi, provides innovative and sustainable solutions for residential, commercial, and industrial water management with in-house manufacturing and expert services.";

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
        data-aos="fade-up"
        className="text-left m-5 md:m-10 md:flex items-center"
      >
        <div className="">
          <h1 className="text-2xl font-semibold md:text-[2rem]">
            Rainwater Harvesting Manufacturers
          </h1>
          <p className="text-md text-justify md:text-lg pt-5 text-gray-500">
            At <bold className="text-green-500 font-semibold">InRain®,</bold> we
            are committed to promoting sustainable water management and
            preserving our natural resources.{" "}
            <bold className="text-black font-semibold">
              As a top rainwater harvesting manufacturer based in Delhi, we
              specialize in creating innovative solutions for residential,
              commercial, and industrial use.
            </bold>{" "}
            With increasing concerns around water scarcity and the need for
            effective water management, rainwater harvesting has become an
            environmentally-friendly and viable solution. Our goal is to empower
            individuals, businesses, and communities to effectively capture
            rainwater, reducing their reliance on traditional water sources.
          </p>
        </div>
      </div>

      <div className="">
        <div className="text-left md:text-left md:m-10 m-5">
          <h3 className="text-2xl font-semibold md:text-[2rem]">
            Why Choose <bold className="text-green-500">InRain®</bold> ?
          </h3>
          <div className="md:grid md:grid-cols-2 items-center gap-5 justify-center text-justify">
            <ul
              data-aos="fade-up"
              className="text-md pt-3 text-gray-500 md:text-lg flex flex-col gap-3"
            >
              <li>
                <bold className="font-semibold text-black">Expertise:</bold>{" "}
                Leveraging our extensive experience in rainwater harvesting, we
                possess the expertise and skills necessary to develop tailored
                solutions for various applications and environments. Our team
                stays abreast of the latest advancements in the industry,
                enabling us to provide innovative and cutting-edge solutions.
                <br></br>
              </li>
              <li>
                <bold className="font-semibold text-black">
                  High-profile Clientele:
                </bold>{" "}
                Our successful partnerships with renowned organizations such as
                HUL, PepsiCo, and Sobha Developers demonstrate our capability to
                meet the highest standards of quality and reliability. We value
                our strong client relationships and are committed to
                consistently exceeding expectations.
              </li>
              <li>
                <bold className="font-semibold text-black">
                  In-house Manufacturing:
                </bold>{" "}
                With our own manufacturing facilities for rainwater harvesting
                modular structures and filters, we retain complete control over
                the production process. This ensures superior quality,
                cost-effectiveness, and timely delivery of our products.
              </li>
              <li>
                <bold className="font-semibold text-black">
                  Sustainability Focus:
                </bold>{" "}
                We recognize the importance of sustainable practices in
                addressing water scarcity and protecting the environment. Our
                solutions are designed to conserve water, support ecological
                balance, and reduce dependence on external water sources.
              </li>
              <li>
                <bold className="font-semibold text-black">
                  Comprehensive Services:
                </bold>{" "}
                InRain Construction offers a full range of services from initial
                project assessment through installation and ongoing maintenance,
                ensuring the optimal performance of rainwater harvesting
                systems. Our dedicated team provides technical support and
                monitoring services to maintain continued efficiency.
              </li>
              <li>
                InRain® is dedicated to transforming water resource management
                through advanced rainwater harvesting techniques. With our
                industry expertise, quality manufacturing capabilities, and
                sustainability-focused approach, we strive to create a greener,
                more water-efficient future for our clients and communities.
              </li>
            </ul>
            <Image
              alt="rainwater harvesting"
              className="drop-shadow-2xl m-auto"
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

export default RWHManufacturer;
