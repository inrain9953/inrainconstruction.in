import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";
import serviceImg2 from "../../public/services/harvesting2.jpg";
import Image from "next/image";
import { ServicesDetails } from "@/components/servicesDetails/servicesDetails";

const CoPolymerBased = () => {
  return (
    <>
      <Navbar />
      <div
        data-aos="zoom-in-up"
        className="text-left m-10 md:m-20 md:flex items-center"
      >
        <div className="">
          <h1 className="text-2xl md:text-[2rem] font-semibold">
            Co-Polymer Based Rainwater Harvesting System
          </h1>
          <p className="text-md text-justify md:text-lg pt-5 text-gray-500">
            At{" "}
            <bold className="text-green-500 font-semibold">
              Inrain Construction Pvt. Ltd.,
            </bold>{" "}
            we offer co-polymer-based rainwater harvesting systems designed for
            effective water conservation and management. This modern approach to
            harvesting natural rainwater is both cost-effective and easier to
            maintain compared to traditional methods. Known as the modular
            rainwater harvesting technique, it utilizes stackable modules that
            make construction and installation quicker and more efficient.
            <br></br>
            <br></br>
            The co-polymer-based system provides an eco-friendly and affordable
            alternative to traditional rainwater harvesting. Co-polymer products
            are significantly less expensive than the materials required for
            building brick or reinforced cement concrete storage structures.
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
          <ul className="list-disc text-justify font-semibold md:text-lg">
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
          <p className="text-md text-justify md:text-lg pt-5 text-gray-500">
            The modular rainwater harvesting system meets modern-day water
            management needs, offering safety, portability, and sustainability,
            making it a highly sought-after solution for water conservation.
          </p>
        </div>
        <Image
          className="mt-10 md:m-10 md:h-72 md:min-w-96"
          src={serviceImg2}
          alt="img"
          loading="eager"
          priority={true}
          unoptimized={true}
        />
      </div>
      <div
        data-aos="zoom-in-up"
        className="text-center m-12 bg-sky-300 rounded-xl"
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
