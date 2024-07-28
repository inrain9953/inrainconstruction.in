import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { ServicesDetails } from "@/components/servicesDetails/servicesDetails";
import React from "react";
import serviceImg3 from "../../public/services/harvesting3.jpg";
import Image from "next/image";

const ModularRWH = () => {
  return (
    <>
      <Navbar />
      <div className="text-left m-10 md:m-20 md:flex items-center">
        <div data-aos="zoom-in-up" className="">
          <h1 className="text-2xl md:text-[2rem] font-semibold">
            Modular Rainwater Harvesting System
          </h1>
          <p className="text-md md:text-lg text-gray-500 pt-5">
            Infusing Modular technologies to store or reuse rain water in order
            to realize the needs of an enriched tomorrow with abundant water
            resources in place.
            <br></br>
            <br></br>
          </p>

          <ul className="list-disc font-semibold md:text-lg text-gray-600">
            <li>Polymer as strong as metal.</li>
            <li>Load bearing and top surface utilization.</li>
            <li>Time saving in installation.</li>
            <li>Accident free.</li>
            <li>Less maintenance cost than civil pit.</li>
            <li>Maintenance time and resource utilization</li>
            <li>Alteration and re use advantage</li>
            <li>Cost advantage</li>
          </ul>

          <p className="text-md md:text-lg text-gray-500 pt-5">
            Urbanization has led to an increase in water consumption in various
            activities. The demand for water supply is quite high, however, our
            natural resources are very limited. There have been many reports of
            declining water levels around the world. Rainwater harvesting is one
            of the best solutions to keep the sustainable development going.
            Inrain Construction Pvt. Ltd., a water conservation and management
            organization offers various rainwater harvesting methods using the
            latest technology.
            <br></br>
            <br></br>In recent years, modular rainwater harvesting has become
            increasingly popular due to its various advantages over traditional
            rainwater harvesting methods. Modular rainwater harvesting
            effectively addresses two major concerns: budget and space. Not only
            it is easy on the pocket but also allows the use of space for
            various purposes.
            <br></br>
            <br></br>
            Polymer-based modular structures are used in this technique.
            Strength and load-bearing capacity are both excellent
            characteristics of these structures. Water harvesting areas prepared
            with modular structures can even be used for parking vehicles. The
            installation takes less time compared to a traditional rainwater
            harvesting system. Here are some advantages it offers:
            <br></br>
            <br></br>
          </p>

          <ul className="list-disc font-semibold md:text-lg text-gray-600">
            <li>
              The eco-friendly and economical solution as a polymer can be
              recycled or reused
            </li>
            <li>
              It ensures excellent filtration as the percolation tank remains
              covered with the geotextile sheet
            </li>
            <li>
              Safety: In this technique, we place the percolation tank
              underground to ensure no easy access to the water tank
            </li>
            <li>
              Cost Saving on Maintenance: Low or almost no maintenance compared
              to traditional rainwater harvesting system
            </li>
            <li>Higher recharge capacity as water comes from five sides.</li>
            <li>Co-polymer-based modules have a high lifespan</li>
            <li>
              Portability is one of the main properties of these
              co-polymer-based stackable modules, as these modules can be easily
              shifted and installed at different locations.
            </li>
          </ul>
          <br></br>
          <br></br>

          <p className="text-md md:text-lg text-gray-500">
            The modular Rainwater Harvesting method helps in restoring and
            reusing the rainwater within your budget. It allows you to
            contribute to your social and environmental cause without
            compromising on your budget and space.
          </p>
        </div>
        <Image className="mt-10 md:m-10 md:h-72 md:min-w-96" src={serviceImg3} />
      </div>

      <div data-aos="zoom-in-up" className="text-center m-12 bg-sky-300 rounded-xl">
        <p className="p-5 text-md md:text-lg">
          Precious land over the modular tank is not wasted, since it is a load
          bearing structure and can bear tons of loads thereby making the whole
          system truly economical as compared with the case of having civil pit.
          95% of the capacity of tank is usable as compared to only 50-55%
          usability in case of civil pit. No Risk of accidents as no one can
          fall into this kind of tank whereas having a RCC Civil tank is highly
          accident prone. Easy removable and transportable to any other location
          which is not possible in case of civil pit. Holding / Recharge
          Capacity begins from 1 Cubic Meter to any imaginable Size within
          significantly lesser time.
        </p>
      </div>
      <ServicesDetails />
      <Footer />
    </>
  );
};

export default ModularRWH;
