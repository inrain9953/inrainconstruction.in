import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";
import serviceImg2 from "../../public/services/harvesting2.jpg";
import Image from "next/image";
import { ServicesDetails } from "@/components/servicesDetails/servicesDetails";
import Head from "next/head";

const CoPolymerBased = () => {
  const title =
    "Co-Polymer Based Rainwater Harvesting System | InRain® Construction Pvt. Ltd.";
  const desc =
    "Discover Co-Polymer Based Rainwater Harvesting Systems by InRain Construction Pvt. Ltd. Cost-effective, eco-friendly, and low-maintenance, these modular systems offer superior water filtration, portability, and long-lasting solutions for sustainable water conservation.";
  const keyword =
    "Co-Polymer Based Rainwater Harvesting System, co-polymer rainwater harvesting, modular rainwater systems, eco-friendly water conservation, cost-effective rainwater harvesting, portable rainwater storage, low-maintenance rainwater systems, water recharge solutions, sustainable water management, modern rainwater harvesting, rainwater filtration tanks, underground water storage systems";
  const canonical =
    "https://www.inrainconstruction.in/services/co-polymer-based-rainwater-harvesting-system";
  const ogUrl =
    "https://www.inrainconstruction.in/services/co-polymer-based-rainwater-harvesting-system";
  const ogTitle =
    "Co-Polymer Based Rainwater Harvesting System | InRain® Construction Pvt. Ltd.";
  const ogDescription =
    "Discover Co-Polymer Based Rainwater Harvesting Systems by InRain Construction Pvt. Ltd. Cost-effective, eco-friendly, and low-maintenance, these modular systems offer superior water filtration, portability, and long-lasting solutions for sustainable water conservation.";
  const twittertitle =
    "Co-Polymer Based Rainwater Harvesting System | InRain® Construction Pvt. Ltd.";
  const twitterdescription =
    "Discover Co-Polymer Based Rainwater Harvesting Systems by InRain Construction Pvt. Ltd. Cost-effective, eco-friendly, and low-maintenance, these modular systems offer superior water filtration, portability, and long-lasting solutions for sustainable water conservation.";

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
            Co-Polymer Based Rainwater Harvesting System
          </h1>
          <p className="text-md text-justify md:text-lg pt-5 text-gray-500">
            At <bold className="text-green-500 font-semibold">InRain®</bold> we
            offer co-polymer-based rainwater harvesting systems designed for
            effective water conservation and management.{" "}
            <bold className="text-black font-semibold">
              This modern approach to harvesting natural rainwater is both
              cost-effective and easier to maintain compared to traditional
              methods.
            </bold>{" "}
            Known as the modular rainwater harvesting technique, it utilizes
            stackable modules that make construction and installation quicker
            and more efficient.
            <br></br>
            <br></br>
            The co-polymer-based system provides an eco-friendly and affordable
            alternative to traditional rainwater harvesting.{" "}
            <bold className="text-black font-semibold">
              Co-polymer products are significantly less expensive than the
              materials required for building brick or reinforced cement
              concrete storage structures.
            </bold>{" "}
            Additionally, traditional cement concrete storage systems are prone
            to algae and fungal growth, leading to ongoing maintenance needs. In
            contrast, co-polymer modules are not only cost-effective but also
            portable, allowing the top surface to be used for various purposes,
            such as parking, gardening, or playgrounds.
            <br></br>
            <br></br> This system offers several key advantages over traditional
            rainwater harvesting methods:
            <br></br>
            <br></br>
          </p>
          <ul className="list-disc text-justify p-5 font-semibold md:text-lg">
            <li>Environmentally friendly and cost-effective.</li>
            <li>
              Percolation storage tanks covered with geo-sheets for superior
              filtration.
            </li>
            <li>
              The underground placement of tanks ensures security and prevents
              easy access to the stored water.
            </li>
            <li>
              Minimal maintenance requirements compared to traditional systems.
            </li>
            <li>
              Higher recharge capacity, with water entering from five sides.
            </li>
            <li>Long lifespan of co-polymer modules.</li>
            <li>
              Portability, allowing the modules to be easily relocated and
              installed in different areas.
            </li>
          </ul>
          <p className="text-md text-justify md:text-lg text-gray-500">
            The modular rainwater harvesting system meets modern-day water
            management needs, offering safety, portability, and sustainability,
            making it a highly sought-after solution for water conservation.
          </p>
        </div>
        <Image
          className="mt-10 md:m-5 md:h-72 md:min-w-80"
          src={serviceImg2}
          alt="co-polymer based rainwater harvesting system"
          loading="eager"
          priority={true}
          unoptimized={true}
        />
      </div>
      <div
        data-aos="zoom-in-up"
        className="text-center m-5 md:m-10  bg-sky-300 rounded-xl"
      >
        <p className="p-5 text-justify text-md md:text-lg ">
          Unlike conventional rainwater harvesting (RWH) systems, modular RWH
          systems do not require PCC or RCC recharge chambers, resulting in
          significant cost savings. Traditional PCC or RCC storage-cum-recharge
          tanks often become infested with algae or cobwebs after a few years,
          making them difficult to clean. In contrast, modular RWH systems use
          polypropylene blocks wrapped in geo-textile, making them nearly
          maintenance-free and offering a longer lifespan. These systems are
          also portable, allowing the land to be repurposed for construction if
          needed. Additionally, conventional RWH systems tend to become
          dysfunctional after 2-3 seasons. However, modular RWH systems are
          designed to address several issues that lead to this deterioration,
          providing multiple advantages in terms of durability, efficiency, and
          ease of maintenance over traditional systems.
        </p>
      </div>
      <ServicesDetails />
      <Footer />
    </>
  );
};

export default CoPolymerBased;
