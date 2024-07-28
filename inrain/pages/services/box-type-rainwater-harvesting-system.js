import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { ServicesDetails } from "@/components/servicesDetails/servicesDetails";
import React from "react";
import Image from "next/image";
import serviceImg8 from "../../public/services/harvesting8.png";

const BoxTypeRWH = () => {
  return (
    <>
      <Navbar />
      <div
        data-aos="zoom-in-up"
        className="text-left m-10 md:m-20 md:flex items-center"
      >
        <div className="">
          <h1 className="text-2xl md:text-[2rem] font-semibold">
            Box Type Rainwater Harvesting System
          </h1>
          <p className="text-md md:text-lg pt-5 text-gray-500">
            Rainwater harvesting is a need of the modern world by practicing
            rainwater harvesting we can help in improving global water reserves.
            {" "}
            <bold className="text-green-500 font-semibold">
              InRain Construction Pvt. Ltd.
            </bold>{" "}
            is a leading company, in providing water conservation and management
            solutions offering various varieties of rainwater harvesting
            solutions. We use modern-day technology and excel in providing
            economical water conservation methods to our clients as per their
            needs. Among the various methods of rainwater harvesting systems Box
            Type Rainwater Harvesting is one that helps you in saving the mains
            water. Since in this methodology rainwater collected from the roof
            doesn’t go through rigorous filtration and purification, it is
            majorly suited for outdoor activities like car washing and watering
            your garden area. The rainwater stored through this method can also
            be utilised for laundry and flushing the toilet.
            <br></br>
            <br></br>
            As the name suggests box type rainwater harvesting system uses a box
            to store water. A water collector is attached to the rooftop for
            collecting water, the collected water then goes through a filter
            system that removes impurities collected from the rooftop. The
            filtered water then goes to the box for storage.
            <br></br>
            <br></br>The installation and the water supply mechanism is the main
            feature of box type rainwater harvesting system. The water supply
            mechanism of this system is maintained in such a way that it always
            ensures water supply from the rain box before your main supply. It
            has been designed in a way that in case your rain box runs out of
            water your supply will be maintained through mains, ensuring
            continuous water supply autonomous systems. This helps in reducing
            your water bills significantly by effectively utilizing the stored
            rainwater.
            <br></br>
            <br></br>
            Box type rainwater harvesting systems use very compact size box, it
            is easily installable and cost-effective and addresses the specific
            need of our customers. Our skilled team provides help to our
            customers in choosing the correct rainwater harvesting systems as
            per their requirements and budget.
          </p>
        </div>
        <Image
          className="mt-10 md:m-10 md:h-72 md:min-w-96"
          src={serviceImg8}
        />
      </div>
      <ServicesDetails />
      <Footer />
    </>
  );
};

export default BoxTypeRWH;
