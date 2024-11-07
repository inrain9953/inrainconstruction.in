import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";
import Image from "next/image";
import renewableEnergy from "./../public/renewable-energy.png";
import banner from "./../public/banner4.jpg";
import service2 from "./../public/service2.jpg";
import aboutImg from "./../public/InRain/rain2.jpg";
import { AboutContent } from "@/components/constant";
import rain2 from "./../public/tree.png";
import { AboutTechnology } from "@/components/aboutTechnology/aboutTechnology";
import Head from "next/head";

const About = () => {

  const title = "About US | InRain® Construction Pvt. Ltd.";
  const desc =
    "InRain® Water Harvesting company has successfully Installed morethan 400 Rain Water Harvesting Projects enabling in conserving billion of gallons of water from of getting it waste.";
  const keyword =
    "Rainwater Harvesting System, Water Conservation, Modular Tank Systems, Sustainable Water Management, Monolithic Structures, RWH Technology, Ground Water Recharge, Clean Energy Solutions, Modular Rainwater Harvesting, Water Table Recharge";
  const canonical = "https://www.inrainconstruction.in/about";
  const ogUrl = "https://www.inrainconstruction.in/about";
  const ogTitle = "About Us | InRain® Construction Pvt. Ltd.";
  const ogDescription =
    "InRain® Water Harvesting company has successfully Installed morethan 400 Rain Water Harvesting Projects enabling in conserving billion of gallons of water from of getting it waste.";
  const twittertitle = "About US | InRain® Construction Pvt. Ltd.";
  const twitterdescription =
    "InRain Water Harvesting company has successfully Installed morethan 400 Rain Water Harvesting Projects enabling in conserving billion of gallons of water from of getting it waste.";

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
      <div data-aos="fade-up" className="m-5">
        <Image
          className="w-full rounded-xl shadow-xl"
          alt="img"
          src={banner}
          loading="eager"
          priority={true}
          unoptimized={true}
        />
      </div>
      <div data-aos="fade-up" className="m-10 text-left md:m-20">
        <div className="">
          <h1 className="text-2xl font-bold md:text-[3rem] md:font-semibold">
            InRain<sup>®</sup> Construction Pvt. Ltd.
          </h1>
          <div className="md:flex md:items-center md:justify-between">
            <p className="text-md text-justify pt-2 text-gray-700 md:w-2/3 md:text-lg md:pt-5">
              At{" "}
              <bold className="text-green-500 font-semibold">
                InRain<sup>®</sup> Construction Pvt. Ltd.
              </bold>
              , we excel in harnessing the potential of water through innovative
              and advanced water harvesting solutions. Our mission is to help
              clients maximize their water resources while promoting
              environmental conservation. By offering comprehensive services, we
              empower our clients to implement sustainable water management
              practices effectively.<br></br>
              <br></br> Our journey began with a vision to address the growing
              water scarcity issues and make a positive environmental impact.
              Over the years, we have refined our techniques and expanded our
              expertise, enabling us to deliver tailored solutions that cater to
              the specific needs of each client. Our dedication to quality and
              sustainability has earned us a trusted reputation in the industry.
              <br></br>
              <br></br>The design phase is critical, as it involves creating
              customized systems that align with the client’s goals and site
              conditions. We use advanced modeling and simulation tools to
              optimize the design, ensuring maximum water collection and
              efficiency. Our systems are not only functional but also
              aesthetically pleasing, seamlessly integrating with the existing
              infrastructure.<br></br>
              <br></br>
              Our experienced specialists handle installation, utilizing the
              latest water harvesting techniques. We use high-quality materials
              and equipment to ensure the durability and reliability of our
              systems. The installation process is streamlined to minimize
              disruption to the client’s operations and ensure timely project
              completion.<br></br>
              <br></br> One of our significant achievements is the
              <bold className="text-black font-semibold">
                {" "}
                successful installation of over 1000 Rainwater Harvesting (RWH)
                systems
              </bold>{" "}
              for a diverse range of esteemed clients. A few of our striking
              clients include{" "}
              <bold className="text-black font-semibold">
                Tata | PepsiCo | Hindustan Unilever | Denso | Fujita | Ahresty |
                Supreme Pipes | Mittal Construction Company | GLS Infra | PWD |
                Airport terminals | keen cities, and Supreme Court Judges
                Bungalows.
              </bold>{" "}
              These ventures have not only made a difference in helping our
              clients optimize their water assets, but they have also
              contributed to noteworthy natural benefits.
            </p>
            <Image
              className="w-full md:w-80 mt-5 rounded-lg"
              alt="img"
              src={aboutImg}
              loading="eager"
              priority={true}
              unoptimized={true}
            ></Image>
          </div>
        </div>
      </div>

      <div className="m-5 md:m-20 md:flex md:justify-center">
        <iframe
          className="md:h-[500px] md:w-[70%]"
          width="100%"
          height="340px"
          title="Youtube Video Player"
          src="https://www.youtube.com/embed/3DyJAcKe0OM"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture web-share clipboard-write"
          frameborder="0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="">
        <div data-aos="fade-up" className="text-left md:text-left md:m-20 m-10">
          <h1 className="text-2xl font-bold md:text-[2rem] md:font-semibold">
            Why InRain<sup>®</sup> Construction :
          </h1>
          <div className="md:flex items-center">
            <p className="text-md text-justify pt-5 text-gray-700 md:text-lg md:pt-5">
              {" "}
              <bold className="font-semibold text-black">Expertise:</bold> With
              years of experience in rainwater harvesting, we have developed the
              expertise and skills necessary to create customized solutions for
              a variety of applications and environments. Our team stays up to
              date with the latest industry advancements, allowing us to offer
              innovative and cutting-edge solutions.<br></br>
              <br></br>{" "}
              <bold className="font-semibold text-black">
                High-profile Clientele:
              </bold>{" "}
              Our successful collaborations with respected organizations such as
              HUL, PepsiCo, and Sobha Developers showcase our ability to meet
              the highest standards of quality and reliability. We value our
              strong client relationships and are committed to consistently
              exceeding their expectations.
              <br></br>
              <br></br>{" "}
              <bold className="font-semibold text-black">
                In-house Manufacturing:
              </bold>{" "}
              By operating our own manufacturing facilities for modular
              rainwater harvesting structures and filters, we maintain full
              control over the production process. This ensures superior
              quality, cost efficiency, and timely delivery of our products.
              <br></br>
              <br></br>{" "}
              <bold className="font-semibold text-black">
                Sustainability Focus:
              </bold>{" "}
              We understand the critical role sustainable practices play in
              tackling water scarcity and protecting the environment. Our
              solutions are designed to conserve water, promote ecological
              balance, and reduce reliance on external water sources.<br></br>
              <br></br>
              <bold className="font-semibold text-black">
                Comprehensive Services:
              </bold>{" "}
              At InRain Construction, we offer a complete range of services,
              from initial project evaluation to installation and ongoing
              maintenance, ensuring the peak performance of rainwater harvesting
              systems. Our dedicated team provides technical support and
              monitoring to sustain long-term efficiency.
              <br></br>
              <br></br>
              InRain Construction Private Limited is committed to
              revolutionizing water resource management through advanced
              rainwater harvesting techniques. Combining industry expertise,
              top-tier manufacturing capabilities, and a focus on
              sustainability, we aim to create a greener, more water-efficient
              future for our clients and communities.{" "}
            </p>
            <Image
              data-aos="zoom-in-up"
              alt="img"
              className="w-9/12 drop-shadow-2xl md:ml-5 object-cover m-auto"
              src={rain2}
              loading="eager"
              priority={true}
              unoptimized={true}
            />
          </div>
        </div>
        <div data-aos="fade-up" className="m-5">
          <Image
            className="w-full md:h-72 rounded-xl shadow-xl"
            src={service2}
            alt="img"
            loading="eager"
            priority={true}
            unoptimized={true}
          />
        </div>
        <div className="text-center flex justify-center mt-10">
          <ol className="drop-shadow-2xl inline-grid grid-cols-2 gap-6 md:flex">
            {AboutContent.map((item) => (
              <div
                data-aos="fade-up"
                className="rounded-xl bg-sky-400 h-36 w-44 flex items-center cursor-pointer"
              >
                <div className="p-2">
                  <Image
                    className="m-auto"
                    src={renewableEnergy}
                    loading="eager"
                    priority={true}
                    unoptimized={true}
                  ></Image>
                  <li className="font-medium">{item.content}</li>
                </div>
              </div>
            ))}
          </ol>
        </div>
      </div>
      <AboutTechnology />
      <Footer />
    </>
  );
};

export default About;
