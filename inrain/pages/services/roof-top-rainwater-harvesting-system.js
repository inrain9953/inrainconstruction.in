import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { ServicesDetails } from "@/components/servicesDetails/servicesDetails";
import React from "react";
import Image from "next/image";
import serviceImg5 from "../../public/services/harvesting5.jpg";
import Head from "next/head";

const RoofTopRWH = () => {
  const title =
    "Roof Top Rainwater Harvesting System | InRain® Construction Pvt. Ltd.";
  const desc =
    "Explore the benefits of Roof-Top Rainwater Harvesting Systems with InRain Construction Pvt. Ltd. Our customized solutions include installation, maintenance, and advanced filtration options for safe and sustainable water conservation.";
  const keyword =
    "Roof-top rainwater harvesting system, rainwater harvesting system, sustainable water management, rainwater filtration, rainwater conservation, rainwater harvesting installation, rooftop rainwater collection, residential rainwater harvesting, commercial rainwater harvesting, eco-friendly water systems";
  const canonical =
    "https://www.inrainconstruction.in/services/roof-top-rainwater-harvesting-system";
  const ogUrl =
    "https://www.inrainconstruction.in/services/roof-top-rainwater-harvesting-system";
  const ogTitle =
    "Roof Top Rainwater Harvesting System | InRain® Construction Pvt. Ltd.";
  const ogDescription =
    "Explore the benefits of Roof-Top Rainwater Harvesting Systems with InRain Construction Pvt. Ltd. Our customized solutions include installation, maintenance, and advanced filtration options for safe and sustainable water conservation.";
  const twittertitle =
    "Roof Top Rainwater Harvesting System | InRain® Construction Pvt. Ltd.";
  const twitterdescription =
    "Explore the benefits of Roof-Top Rainwater Harvesting Systems with InRain Construction Pvt. Ltd. Our customized solutions include installation, maintenance, and advanced filtration options for safe and sustainable water conservation.";

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
          <h1 className="text-2xl md:text-[2rem] font-semibold">
            Roof Top Rainwater Harvesting System
          </h1>
          <p className="text-md text-justify md:text-lg pt-5 text-gray-500">
            Roof-top rainwater harvesting systems have gained significant
            popularity in recent years. These systems efficiently collect
            natural rainwater, offering a sustainable way to manage this
            valuable resource. Suitable for both residential and commercial
            properties, roof-top rainwater harvesting provides a practical
            approach to conserving water.
            <br></br>
            <br></br>
            At{" "}
            <bold className="text-green-500 font-semibold">
              InRain®,
            </bold>{" "}
            we provide a wide range of rainwater harvesting solutions,
            customized to fit individual customer requirements. Whether you need
            a full installation package for a newly built property or specific
            components for an existing system, our services are flexible and
            designed to meet your specific needs. We handle both the
            installation and ongoing maintenance, ensuring that your system
            remains in optimal condition.
            <br></br>
            <br></br>
            Filtration is an essential part of roof-top rainwater harvesting
            systems. As rainwater is collected from the roof, it can also gather
            various pollutants, including both organic and inorganic materials.
            Proper filtration is especially important if the harvested water
            will be used for drinking or cooking. In such cases, advanced
            micro-level filtration is required to ensure the water is free from
            contaminants and safe for consumption. At{" "}
            <bold className="text-green-500 font-semibold">
              InRain®,
            </bold>{" "}
            we offer a variety of filtration options to suit your needs.
            <br></br>
            <br></br>Installing a roof-top rainwater harvesting system comes
            with numerous advantages. In addition to lowering water bills by
            providing an alternative to mains water supply, these systems also
            play a vital role in supporting environmental sustainability.
          </p>
        </div>
        <Image
          className="mt-10 md:m-5 md:h-72 md:min-w-80"
          src={serviceImg5}
          alt="rooftop rainwater harvesting system"
          loading="eager"
          priority={true}
          unoptimized={true}
        />
      </div>
      <ServicesDetails />
      <Footer />
    </>
  );
};

export default RoofTopRWH;
