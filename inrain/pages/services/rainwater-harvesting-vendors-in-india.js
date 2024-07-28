import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { ServicesDetails } from "@/components/servicesDetails/servicesDetails";
import React from "react";
import Image from "next/image";
import serviceImg7 from "../../public/services/harvesting7.jpg";

const RWHvendorsInIndia = () => {
  return (
    <>
      <Navbar />
      <div
        data-aos="zoom-in-up"
        className="text-left m-10 md:m-20 md:flex items-center"
      >
        <div className="">
          <h1 className="text-2xl md:text-[2rem] font-semibold">
            Rainwater Harvesting Vendors in India
          </h1>
          <p className="text-md md:text-lg pt-5 text-gray-500">
            <bold className="text-green-500 font-semibold">
              InRain Construction Pvt. Ltd.
            </bold>{" "}
            a water conservation and management company is one of the leading
            water conservation and management service providers. We are well
            known to provide technology-based modern solutions that fit today’s
            requirements. We are the top most rainwater harvesting vendors in
            India. We completely understand the challenges of the
            modern-day industries and housing societies. Therefore, we offer
            technologically advanced but cost-effective solutions for water
            conservation needs.
            <br></br>
            <br></br>
            Our rainwater harvesting systems are based on advanced German
            technology. We are proud to say that we are fully committed to the
            ‘Make in India’ initiative and all our manufacturing is in-house
            which helps in keeping a consistent quality, thereby helping us in
            achieving better customer satisfaction.
            <br></br>
            <br></br>India is a country which is densely populated and there is
            a rising need for eco-friendly water conservation techniques. Hence,
            our advanced modular rainwater harvesting system is a perfect match
            for our growing nation. Fortunately, our country has a very good geo
            location and it sees a decent rainfall every year, so utilizing the
            available natural rainwater is perfectly suitable here. Our modular
            rainwater harvesting systems are not only economical and
            eco-friendly but also help in space saving which is one of the major
            requirements in a country like India.
            <br></br>
            <br></br>
            The groundwater level is depreciating all across the globe very fast
            due to the extensive use of the available resources. Hence, having a
            good and effective rainwater harvesting system is a need of the
            hour. We are a proud contributor to this socio-economic cause by
            helping people utilize natural rainwater. Our team has proudly
            supported more than 150+ rainwater harvesting projects. We provide
            our support for the installation, maintenance and management of rain
            water harvesting projects. The rainwater harvesting solutions that
            we provide are economical, eco-friendly, and environment-friendly
            and have the advantage over the old traditional methods of rainwater
            harvesting.
          </p>
        </div>
        <Image
          className="mt-10 md:m-10 md:h-72 md:min-w-96"
          src={serviceImg7}
        />
      </div>
      <ServicesDetails />
      <Footer />
    </>
  );
};

export default RWHvendorsInIndia;
