import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { ServicesDetails } from "@/components/servicesDetails/servicesDetails";
import React from "react";
import serviceImg3 from "../../public/services/harvesting3.jpg";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const ModularRWH = () => {
  const title =
    "Modular Rainwater Harvesting System | InRain® Construction Pvt. Ltd.";
  const desc =
    "Discover Modular Rainwater Harvesting Systems by InRain Construction Pvt. Ltd. Efficient, eco-friendly, and cost-effective solutions using durable polymer modules for sustainable water management.";
  const keyword =
    "modular rainwater harvesting system, rainwater harvesting technology, eco-friendly water solutions, rainwater storage and reuse, load-bearing polymer modules, sustainable water management, cost-effective rainwater harvesting, advanced filtration systems, rainwater harvesting for urban areas";
  const canonical =
    "https://www.inrainconstruction.in/services/modular-rainwater-harvesting-system";
  const ogUrl =
    "https://www.inrainconstruction.in/services/modular-rainwater-harvesting-system";
  const ogTitle =
    "Modular Rainwater Harvesting System | InRain® Construction Pvt. Ltd.";
  const ogDescription =
    "Discover Modular Rainwater Harvesting Systems by InRain Construction Pvt. Ltd. Efficient, eco-friendly, and cost-effective solutions using durable polymer modules for sustainable water management.";
  const twittertitle =
    "Modular Rainwater Harvesting System | InRain® Construction Pvt. Ltd.";
  const twitterdescription =
    "Discover Modular Rainwater Harvesting Systems by InRain Construction Pvt. Ltd. Efficient, eco-friendly, and cost-effective solutions using durable polymer modules for sustainable water management.";

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
      <div className="text-left m-5 md:m-10 md:flex items-center">
        <div data-aos="fade-up" className="">
          <h1 className="text-2xl md:text-[2rem] font-semibold">
            Modular Rainwater Harvesting System
          </h1>
          <p className="text-md md:text-lg text-gray-500 pt-5">
            Infusing{" "}
            <Link
              href={
                "https://www.inrainconstruction.com/modular-rainwater-harvesting"
              }
              target="_blank"
              className="font-semibold text-green-500 hover:text-sky-600"
            >
              Modular Rainwater Harvesting
            </Link>{" "}
            Technology to store and reuse rainwater is key to securing a future
            with abundant water resources.
          </p>

          <ul className="list-disc p-5 font-semibold md:text-lg text-black">
            <li>Polymers as strong as metal</li>
            <li>Load-bearing capacity and top surface utilization</li>
            <li>Time-efficient installation</li>
            <li>Accident-free design</li>
            <li>Lower maintenance costs than traditional civil pits</li>
            <li>Reduced maintenance time and resource consumption</li>
            <li>Adaptability and reusability</li>
            <li>Cost-effective solution</li>
          </ul>

          <p className="text-md md:text-lg text-justify text-gray-500">
            Urbanization has significantly increased water consumption, placing
            immense pressure on our limited natural resources. Reports of
            declining water levels are common worldwide.{" "}
            <bold className="font-semibold text-black">
              Rainwater harvesting is a crucial solution for sustainable
              development, and at InRain, we offer advanced rainwater harvesting
              methods using cutting-edge technology.
            </bold>
            <br></br>In recent years, modular rainwater harvesting has gained
            popularity due to its numerous advantages over traditional systems.{" "}
            <bold className="font-semibold text-black">
              This approach effectively addresses two key concerns: budget and
              space. It is not only cost-effective but also allows for the
              versatile use of space.
            </bold>
            <br></br>
            This technique utilizes polymer-based modular structures, known for
            their strength and load-bearing capacity. Areas designated for
            rainwater harvesting with modular systems can even be used for
            vehicle parking. Installation is also quicker compared to
            traditional rainwater harvesting systems. Here are some of the key
            benefits:
          </p>

          <ul className="list-disc p-5 font-semibold text-justify md:text-lg text-black">
            <li>
              Eco-friendly and economical: Polymers can be recycled and reused.
            </li>
            <li>
              Excellent filtration: The percolation tank is covered with a
              geotextile sheet for superior filtration.
            </li>
            <li>
              Safety: The percolation tank is placed underground, preventing
              unauthorized access.
            </li>
            <li>
              Cost-saving maintenance: Minimal to no maintenance is required as
              compared to conventional systems.
            </li>
            <li>
              Higher recharge capacity: Water enters from five sides, increasing
              efficiency.
            </li>
            <li>Durability: Co-polymer modules have a long lifespan.</li>
            <li>
              Portability: These stackable co-polymer modules can be easily
              relocated and reinstalled at different sites.
            </li>
          </ul>

          <p className="text-md md:text-lg text-gray-500">
            <bold className="font-semibold text-black">
              The modular rainwater harvesting system offers an affordable and
              space-efficient way to collect and reuse rainwater. It allows you
              to contribute to environmental sustainability without exceeding
              your budget or compromising valuable space.
            </bold>
          </p>
        </div>
        <Image
          data-aos="fade-up"
          className="mt-10 md:m-5 md:h-72 md:min-w-80 rounded-xl"
          src={serviceImg3}
          alt="modular rainwater harvesting system"
          loading="eager"
          priority={true}
          unoptimized={true}
        />
      </div>

      <div
        data-aos="fade-up"
        className="text-center m-5 md:m-10 bg-sky-300 rounded-xl"
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
