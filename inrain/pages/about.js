import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";
import Image from "next/image";
import renewableEnergy from "./../public/renewable-energy.png";
import aboutImg from "./../public/InRain/rain2.jpg";
import { AboutContent } from "@/components/constant";
import rain2 from "./../public/tree.png";
import { AboutTechnology } from "@/components/aboutTechnology/aboutTechnology";

const About = () => {
  return (
    <>
      <Navbar />
      <div data-aos="zoom-in-up" className="m-10 text-left md:m-20">
        <div className="">
          <h1 className="text-2xl font-bold md:text-[3rem] md:font-semibold">
            InRain<sup>®</sup> Construction Pvt. Ltd.
          </h1>
          <div className="md:flex md:items-center md:justify-between">
            <p className="text-md pt-2 text-gray-700 md:w-2/3 md:text-lg md:pt-5">
              At{" "}
              <bold className="text-green-500 font-semibold">
                InRain<sup>®</sup> Construction Pvt. Ltd.
              </bold>
              , we exceed expectations in utilizing the potential of water
              through cutting-edge, inventive water gathering arrangements. Our
              objective is to help our clients optimize their water assets while
              advancing natural preservation. By giving comprehensive
              administrations, we empower our clients to execute feasible water
              administration hones effectively.<br></br>
              <br></br> Our travel started with a vision to address the
              developing water shortage issues and to make a positive natural
              impact. Over a long time, we have refined our methods and extended
              our capabilities, permitting us to provide custom-made
              arrangements that meet the unique needs of each client. Our
              commitment to quality and supportability has established us as a
              trusted accomplice in the industry.<br></br>
              <br></br> The plan stage is basic, as it includes making
              customized frameworks that adjust to the client's targets and
              location conditions. We utilize advanced modeling and reenactment
              instruments to optimize the plan, guaranteeing the most extreme
              water collection and utilization. Our plans are not as utilitarian
              but moreover tastefully satisfying, mixing consistently with the
              existing infrastructure.<br></br>
              <br></br>
              Installation is carried out by our talented specialists, who are
              prepared with the most recent water collection strategies. We
              utilize high-quality materials and gear to guarantee the life span
              and unwavering quality of the frameworks. Our establishment handle
              is streamlined to minimize disturbance to the client's operations
              and to guarantee opportune completion.<br></br>
              <br></br> One of our noteworthy accomplishments is the fruitful
              <bold className="text-black font-semibold">
                {" "}
                execution of over 1000 Rainwater Harvesting(RWH) units
              </bold>{" "}
              for an assorted range of regarded clients. A few of our striking
              clients include{" "}
              <bold className="text-black font-semibold">
                Tata | PepsiCo | Hindustan Unilever | Denso | Fujita | Ahresty |
                Supreme Pipes | Mittal Construction Company | GLS Infra | PWD |
                Airport terminals | keen cities, and Incomparable Court Judges
                Bungalows.
              </bold>{" "}
              These ventures have not only made a difference in helping our
              clients optimize their water assets, but they have also
              contributed to noteworthy natural benefits.
            </p>
            <Image
              className="w-full md:w-80"
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
        <div
          data-aos="zoom-in-up"
          className="text-left md:text-left md:m-20 m-10"
        >
          <h1 className="text-2xl font-bold md:text-[2rem] md:font-semibold">
            Why InRain<sup>®</sup> Construction :
          </h1>
          <div className="md:flex items-center">
            <p className="text-md pt-5 text-gray-700 md:text-lg md:pt-5">
              {" "}
              <bold className="font-semibold text-black">Expertise:</bold>{" "}
              Leveraging our extensive experience in rainwater harvesting, we
              possess the expertise and skills necessary to develop tailored
              solutions for various applications and environments. Our team
              stays abreast of the latest advancements in the industry, enabling
              us to provide innovative and cutting-edge solutions.<br></br>
              <br></br>{" "}
              <bold className="font-semibold text-black">
                High-profile Clientele:
              </bold>{" "}
              Our successful partnerships with renowned organizations such as
              HUL, PepsiCo, and Sobha Developers demonstrate our capability to
              meet the highest standards of quality and reliability. We value
              our strong client relationships and are committed to consistently
              exceeding expectations.
              <br></br>
              <br></br>{" "}
              <bold className="font-semibold text-black">
                In-house Manufacturing:
              </bold>{" "}
              With our own manufacturing facilities for rainwater harvesting
              modular structures and filters, we retain complete control over
              the production process. This ensures superior quality,
              cost-effectiveness, and timely delivery of our products.<br></br>
              <br></br>{" "}
              <bold className="font-semibold text-black">
                Sustainability Focus:
              </bold>{" "}
              We recognize the importance of sustainable practices in addressing
              water scarcity and protecting the environment. Our solutions are
              designed to conserve water, support ecological balance, and reduce
              dependence on external water sources.<br></br>
              <br></br>
              <bold className="font-semibold text-black">
                Comprehensive Services:
              </bold>{" "}
              InRain Construction offers a full range of services from initial
              project assessment through installation and ongoing maintenance,
              ensuring the optimal performance of rainwater harvesting systems.
              Our dedicated team provides technical support and monitoring
              services to maintain continued efficiency.
              <br></br>
              <br></br>
              InRain Construction Private Limited is dedicated to transforming
              water resource management through advanced rainwater harvesting
              techniques. With our industry expertise, quality manufacturing
              capabilities, and sustainability-focused approach, we strive to
              create a greener, more water-efficient future for our clients and
              communities.{" "}
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
        <div className="pt-5 text-center md:pt-10 md:m-20">
          <ol className="drop-shadow-2xl inline-grid grid-cols-2 gap-6 cursor-pointer md:flex">
            {AboutContent.map((item) => (
              <div
                data-aos="zoom-in-up"
                className="rounded-xl bg-sky-400 h-36 w-44 flex items-center"
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
