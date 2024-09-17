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
            Infusing modular technology to store and reuse rainwater is key to
            securing a future with abundant water resources.
            <br></br>
            <br></br>
          </p>

          <ul className="list-disc font-semibold md:text-lg text-gray-600">
            <li>Polymers as strong as metal</li>
            <li>Load-bearing capacity and top surface utilization</li>
            <li>Time-efficient installation</li>
            <li>Accident-free design</li>
            <li>Lower maintenance costs than traditional civil pits</li>
            <li>Reduced maintenance time and resource consumption</li>
            <li>Adaptability and reusability</li>
            <li>Cost-effective solution</li>
          </ul>

          <p className="text-md md:text-lg text-gray-500 pt-5">
            Urbanization has significantly increased water consumption, placing
            immense pressure on our limited natural resources. Reports of
            declining water levels are common worldwide. Rainwater harvesting is
            a crucial solution for sustainable development, and at InRain
            Construction Pvt. Ltd., we offer advanced rainwater harvesting
            methods using cutting-edge technology.
            <br></br>
            <br></br>In recent years, modular rainwater harvesting has gained
            popularity due to its numerous advantages over traditional systems.
            This approach effectively addresses two key concerns: budget and
            space. It is not only cost-effective but also allows for the
            versatile use of space.
            <br></br>
            <br></br>
            This technique utilizes polymer-based modular structures, known for
            their strength and load-bearing capacity. Areas designated for
            rainwater harvesting with modular systems can even be used for
            vehicle parking. Installation is also quicker compared to
            traditional rainwater harvesting systems. Here are some of the key
            benefits:
            <br></br>
            <br></br>
          </p>

          <ul className="list-disc font-semibold md:text-lg text-gray-600">
            <li>
              Eco-friendly and economical : Polymers can be recycled and reused.
            </li>
            <li>
              Excellent filtration : The percolation tank is covered with a
              geotextile sheet for superior filtration.
            </li>
            <li>
              Safety : The percolation tank is placed underground, preventing
              unauthorized access.
            </li>
            <li>
              Cost-saving maintenance : Minimal to no maintenance is required
              compared to conventional systems.
            </li>
            <li>
              Higher recharge capacity : Water enters from five sides,
              increasing efficiency.
            </li>
            <li>Durability : Co-polymer modules have a long lifespan.</li>
            <li>
              Portability : These stackable co-polymer modules can be easily
              relocated and reinstalled at different sites.
            </li>
          </ul>
          <br></br>
          <br></br>

          <p className="text-md md:text-lg text-gray-500">
            The modular rainwater harvesting system offers an affordable and
            space-efficient way to collect and reuse rainwater. It allows you to
            contribute to environmental sustainability without exceeding your
            budget or compromising valuable space.
          </p>
        </div>
        <Image
          className="mt-10 md:m-10 md:h-72 md:min-w-96"
          src={serviceImg3}
        />
      </div>

      <div
        data-aos="zoom-in-up"
        className="text-center m-12 bg-sky-300 rounded-xl"
      >
        <p className="p-5 text-md md:text-lg">
          The land above a modular tank is not wasted, as the structure is
          load-bearing and capable of supporting tons of weight, making it a far
          more economical option compared to traditional civil pits.
          Additionally, 95% of the tank's capacity is usable, compared to only
          50-55% in a civil pit. The modular tank also eliminates the risk of
          accidents, as it is fully enclosed, unlike RCC civil tanks, which pose
          a higher risk of falls. The system is easy to remove and transport to
          different locations, a flexibility that is impossible with civil pits.
          Holding and recharge capacity can start from 1 cubic meter and extend
          to virtually any size, all within a much shorter installation time.
        </p>
      </div>
      <ServicesDetails />
      <Footer />
    </>
  );
};

export default ModularRWH;
