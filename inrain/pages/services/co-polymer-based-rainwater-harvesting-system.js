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
      <div data-aos="zoom-in-up" className="text-left m-10 md:m-20 md:flex items-center">
        <div className="">
          <h1 className="text-2xl md:text-[2rem] font-semibold">
            Co-Polymer Based Rainwater Harvesting System
          </h1>
          <p className="text-md md:text-lg pt-5 text-gray-500">
            At{" "}
            <bold className="text-green-500 font-semibold">
              Inrain Construction Pvt. Ltd.,
            </bold>{" "}
            we offers co-polymer based rainwater harvesting system services for
            water conservation and management. This is a modern-day technique of
            harvesting natural rainwater. This technique is cost-effective and
            easy to maintain compared to traditional rainwater harvesting. This
            technique is also known as the modular rainwater harvesting
            technique, as it uses multiple stackable modules for building the
            structure of the rainwater harvesting system; this makes
            construction and installation faster and easier.
            <br></br>
            <br></br>
            Co-polymer based rainwater harvesting system uses a structure that
            offers an economical and eco-friendly solution compared to
            traditional rainwater harvesting systems. Co-polymer products are
            less expensive when compared to the cost of building brick and
            reinforced cement concrete or plain cement concrete storage.
            Moreover, cement concrete storage that is used in traditional
            systems will require maintenance as it has the chance of developing
            infestation algae and fungi. Co-polymer modules are not only
            economical but also come with the option of portability which allows
            the top surface to be used for a variety of purposes like parking
            vehicles, floriculture and kids' playground etc.
            <br></br>
            <br></br> Co-polymer based rainwater harvesting system comes with
            certain advantages over the traditional method of rainwater
            harvesting. Some of the major advantages of this system are
            <br></br>
            <br></br>
          </p>
          <ul className="list-disc font-semibold md:text-lg">
            <li>Eco-friendly and economical solution.</li>
            <li>
              Geo sheet-covered percolation storage tank to ensure excellent
              filtration.
            </li>
            <li>
              Underground placement of the percolation tank ensures no easy
              access to the water tank making absolutely safe.
            </li>
            <li>
              Low or almost no maintenance in comparison to traditional
              rainwater harvesting system.
            </li>
            <li>Higher recharge capacity as water comes from five sides.</li>
            <li>Co-polymer based modules have a high lifespan.</li>
            <li>
              Portability is one of the main properties of these co-polymer
              based stackable modules, as these modules can be easily shifted
              and installed at different locations.
            </li>
          </ul>
          <p className="text-md md:text-lg pt-5 text-gray-500">
            Modular rainwater harvesting system meets the modern-day
            requirements and comes with safety assurance with an option of
            portability which makes it one of the most sought-after water
            conservation and management systems.
          </p>
        </div>
        <Image
          className="mt-10 md:m-10 md:h-72 md:min-w-96"
          src={serviceImg2}
        />
      </div>
      <div data-aos="zoom-in-up" className="text-center m-12 bg-sky-300 rounded-xl">
        <p className="p-5 text-md md:text-lg ">
          Unlike conventional RWH system, the recharge chamber in modular RWH
          need not be PCC/ RCC, thereby saving cost. Further, the PCC/ RCC
          Storage-cum-Recharge Tank after few years gets infested with
          algae/cobwebs and is very difficult to clean; whereas modular RWH with
          polypropylene blocks wrapped on all sides with geo-textile is almost
          maintenance free and its useful life is more with an option of
          portability if there is a need to use the occupied land for some
          construction purposes. Also, it has been the past experience that
          conventional RWH system always goes dysfunctional after 2-3 seasons
          whereas modular RWH system in its concept and design has addressed
          several factors that help them having many relative advantages over
          the conventional RWH system.
        </p>
      </div>
      <ServicesDetails />
      <Footer />
    </>
  );
};

export default CoPolymerBased;
