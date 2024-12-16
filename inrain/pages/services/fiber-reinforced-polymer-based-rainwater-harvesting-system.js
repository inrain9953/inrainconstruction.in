import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { ServicesDetails } from "@/components/servicesDetails/servicesDetails";
import React from "react";
import Image from "next/image";
import serviceImg4 from "../../public/services/harvesting4.jpg";
import Head from "next/head";

const FRPbasedRWH = () => {
  const title =
    "Fiber Reinforced Polymer(FRP) based Rainwater Harvesting System | InRain® Construction Pvt. Ltd.";
  const desc =
    "Explore Fiber Reinforced Polymer (FRP) based Rainwater Harvesting Systems by InRain Construction Pvt. Ltd. Lightweight, corrosion-resistant, and eco-friendly, FRP systems provide cost-effective and durable water conservation solutions for homes and businesses.";
  const keyword =
    "FRP rainwater harvesting systems, fiber reinforced polymer tanks, eco-friendly water storage, cost-efficient rainwater systems, durable water conservation solutions, lightweight rainwater systems, sustainable water management, portable rainwater harvesting, corrosion-resistant water tanks, UV-resistant rainwater storage, modern water conservation technology.";
  const canonical =
    "https://www.inrainconstruction.in/services/fiber-reinforced-polymer-based-rainwater-harvesting-system";
  const ogUrl =
    "https://www.inrainconstruction.in/services/fiber-reinforced-polymer-based-rainwater-harvesting-system";
  const ogTitle =
    "Fiber Reinforced Polymer(FRP) based Rainwater Harvesting System | InRain® Construction Pvt. Ltd.";
  const ogDescription =
    "Explore Fiber Reinforced Polymer (FRP) based Rainwater Harvesting Systems by InRain Construction Pvt. Ltd. Lightweight, corrosion-resistant, and eco-friendly, FRP systems provide cost-effective and durable water conservation solutions for homes and businesses.";
  const twittertitle =
    "Fiber Reinforced Polymer(FRP) based Rainwater Harvesting System | InRain® Construction Pvt. Ltd.";
  const twitterdescription =
    "Explore Fiber Reinforced Polymer (FRP) based Rainwater Harvesting Systems by InRain Construction Pvt. Ltd. Lightweight, corrosion-resistant, and eco-friendly, FRP systems provide cost-effective and durable water conservation solutions for homes and businesses.";

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
            Fiber Reinforced Polymer(FRP) based Rainwater Harvesting System
          </h1>
          <p className="text-md text-justify md:text-lg pt-5 text-gray-500">
            <bold className="text-green-500 font-semibold">
              InRain Construction Pvt. Ltd.
            </bold>{" "}
            is committed to supporting communities and industries with
            sustainable, cost-effective water conservation solutions. Rainwater
            harvesting, once considered time-consuming and expensive, has been
            transformed by advanced technologies offering affordable and
            low-maintenance options. At InRain Construction Pvt. Ltd., we
            provide a range of environmentally friendly solutions that are both
            economical and sustainable.
            <br></br>
            <br></br>
            Fiber Reinforced Polymer (FRP) based rainwater harvesting systems
            present a modern, cost-efficient alternative. These systems are
            rapidly gaining popularity due to their lightweight yet sturdy
            nature. FRP is highly resistant to corrosion and ultraviolet damage,
            making it an ideal material for rainwater harvesting systems.
            <br></br>
            <br></br>In traditional rainwater harvesting methods, installation
            and maintenance costs posed significant challenges, as concrete or
            metal collection tanks were both expensive and prone to corrosion or
            infestation. FRP systems, on the other hand, are highly durable and
            require minimal maintenance, sparking growing interest in FRP-based
            rainwater harvesting solutions.
            <br></br>
            <br></br>
            These FRP systems are portable, recyclable, and reduce both waste
            and costs, making them an eco-friendly choice that encourages more
            widespread adoption of sustainable water conservation practices. By
            reducing reliance on mains water supply, they also contribute to
            environmental preservation.
            <br></br>
            <br></br>
            For housing societies and businesses looking to make a positive
            environmental impact, FRP-based rainwater harvesting systems are an
            ideal solution. Whether building a new home, seeking to lower
            business water bills, or incorporating sustainable water
            conservation into renovations, FRP systems offer a comprehensive and
            efficient approach to water management.
          </p>
        </div>
        <Image
          className="mt-10 md:m-5 md:h-72 md:min-w-80"
          src={serviceImg4}
          alt="FRP based rainwater harvesting system"
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

export default FRPbasedRWH;
