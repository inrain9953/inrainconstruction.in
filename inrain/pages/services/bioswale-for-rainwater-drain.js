import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { ServicesDetails } from "@/components/servicesDetails/servicesDetails";
import React from "react";
import Image from "next/image";
import serviceImg10 from "../../public/services/harvesting10.jpg";

const BioswaleForRainwater = () => {
  return (
    <>
      <Navbar />
      <div
        data-aos="zoom-in-up"
        className="text-left m-10 md:m-20 md:flex items-center"
      >
        <div className="">
          <h1 className="text-2xl md:text-[2rem] font-semibold">
            Bioswale for Rainwater Drain
          </h1>
          <p className="text-md md:text-lg pt-5 text-gray-500">
            {" "}
            <bold className="text-green-500 font-semibold">
              InRain Construction Pvt. Ltd.
            </bold>{" "}
            leads the effort to help people better use rainwater, with various
            conservation and management solutions. Because of the pressing need
            for rainwater harvesting as our groundwater depletes, InRain
            prioritizes ways to capture water. The company encourages methods
            like bioswales, which effectively make the land work toward keeping
            the water we need in the ground and out of our storm sewers.
            <br></br>
            <br></br>
            The construction company{" "}
            <bold className="text-green-500 font-semibold">
              Inrain Construction Pvt. Ltd.
            </bold>{" "}
            focuses primarily on the building of bioswales. They are good at it.
            They have a lot of experience building them. Bioswales are
            essentially very large, linear rain gardens. They can also be much
            more than just wet, green, unremarkable, canal-like spaces. They
            have their own "native plants" that go out in large-scale
            installation and function as measure-and-control structures in
            stormwater management.
            <br></br>
            <br></br>
            Modern residential communities and industrial areas especially
            benefit from bioswales. After it rains, a lot of the water that
            falls on our pavement doesn't go into the ground but instead flows
            across our roofs, roads, and lawns and into storm drains.
            Uncontrolled, this surplus stormwater does a lot of damage. We're
            starting to pay attention to that. The authorities in hydrology tell
            us that we're better off in the "now and place" of bioswales because
            they're under much better control and much more beneficial.
            <br></br>
            <br></br>
            It is easy to incorporate bioswales into present-day infrastructure.
            Typical places to set them up are parking lots, along sidewalks, in
            parks, and streets, and in any other open space. It is critical to
            test the soil prior to installation to ascertain that the water that
            runs into the bioswale can infiltrate the soil and reach the nearby
            water table at a rate that is consistent with natural processes.
            Advanced technology ensures that even in a constructed space, the
            bioswale can still look and function like a natural one. <br></br>
            <br></br>
            <bold className="text-green-500 font-semibold">
              Inrain Construction Pvt. Ltd.
            </bold>{" "}
            intends to use this approach to deliver viable, long-term solutions
            for handling rainwater.
          </p>
        </div>
        <Image
          className="mt-10 md:m-10 md:h-72 md:min-w-96"
          src={serviceImg10}
        />
      </div>
      <ServicesDetails />
      <Footer />
    </>
  );
};

export default BioswaleForRainwater;
