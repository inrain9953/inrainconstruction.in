import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";
import Image from "next/image";
import logo from "./../public/logo.png";
import rain2 from "./../public/tree.png";
import { useRouter } from "next/router";
import solution_water from "../public/solution_water.jpg";
import { MailOutline } from "@mui/icons-material";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const title =
    "Rainwater Harvesting Company | Contact Us | InRain® Construction Pvt. Ltd.";
  const desc =
    "Explore the benefits of Modular Rainwater Harvesting Systems, an innovative solution for water conservation. Learn how this space-efficient, cost-effective, and eco-friendly technology can address water scarcity while supporting sustainable development.";
  const keyword =
    "Modular rainwater harvesting, sustainable water management, water conservation system, rainwater reuse, eco-friendly water solutions, polymer-based rainwater harvesting, efficient water storage, quick installation rainwater systems, low-maintenance rainwater harvesting, urban water solutions, sustainable development";
  const canonical = "https://www.inrainconstruction.in/contact-us";
  const ogUrl = "https://www.inrainconstruction.in/contact-us";
  const ogTitle =
    "Rainwater Harvesting Company | Contact Us | InRain® Construction Pvt. Ltd.";
  const ogDescription =
    "Explore the benefits of Modular Rainwater Harvesting Systems, an innovative solution for water conservation. Learn how this space-efficient, cost-effective, and eco-friendly technology can address water scarcity while supporting sustainable development.";
  const twittertitle =
    "Rainwater Harvesting Company | Contact Us | InRain® Construction Pvt. Ltd.";
  const twitterdescription =
    "Explore the benefits of Modular Rainwater Harvesting Systems, an innovative solution for water conservation. Learn how this space-efficient, cost-effective, and eco-friendly technology can address water scarcity while supporting sustainable development.";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/signup", formData);
      if (response.status == 200) {
        alert(response.data);
        router.push("/");
      } else {
        alert("Invalid Submission. Try Again...");
      }
    } catch (error) {
      alert("Refresh the page and try again...");
    }
  };

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
          alt="img"
          className="w-full rounded-xl md:h-80 shadow-xl"
          src={solution_water}
          loading="eager"
          priority={true}
          unoptimized={true}
        />
        <div className="absolute md:bottom-5 bottom-0 md:left-5 left-2">
          <p className="text-xs md:text-lg text-black">
            <Link className="hover:text-green-500" href={"/"}>
              Home
            </Link>{" "}
            / Contact Us
          </p>
        </div>
      </div>
      <div className="md:flex items-center">
        <div data-aos="fade-up" className="text-center pt-5 md:w-[60%]">
          <div className="text-center m-5 text-black">
            <h1 className="text-3xl font-semibold">Contact Us</h1>
            <div>
              <p className="text-lg mt-2 mb-2">
                The Company has Successfully Installed Morethan 4000 Rainwater
                Harvesting Projects.
              </p>
              <a
                className="hover:text-green-500 md:mr-5"
                href="mailto:sales@inrainwaterharvesting.com"
              >
                <MailOutline fontSize="small" />
                sales@inrainwaterharvesting.com
              </a>
              <br className="md:hidden" />
              <a
                className="hover:text-green-500 md:ml-5"
                href="tel:+919910220794"
              >
                <CallIcon fontSize="small" />
                +91-9910220794
              </a>
            </div>
            <div className="mt-3">
              <a
                className="font-medium text-base hover:text-sky-700"
                href="https://maps.app.goo.gl/QSZoYkgd8GufagvC6"
              >
                <LocationOnIcon fontSize="small" />
                Plot No 06, KH431, 1st floor, Main Road Chattarpur-Satbari,
                Satbari, New Delhi 110074
              </a>
            </div>
          </div>
          <Image
            alt="img"
            className="w-9/12 drop-shadow-2xl object-cover m-auto"
            src={rain2}
            loading="eager"
            priority={true}
            unoptimized={true}
          />
        </div>
        <div
          data-aos="fade-up"
          className="max-w-fit ml-auto mr-auto drop-shadow-2xl pt-10"
        >
          <div className="Form-container">
            <div className="">
              <Image
                className="w-28 m-auto"
                src={logo}
                alt="img"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
            </div>
            <form onSubmit={onSubmit} className="form">
              <input
                required=""
                className="input"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                required=""
                className="input"
                type="tel"
                name="mobile"
                id="phone"
                placeholder="Phone No."
                value={formData.mobile}
                onChange={handleChange}
              />
              <input
                required=""
                className="input"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                required=""
                className="input"
                type="text"
                name="message"
                id="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              />

              <input
                className="login-button bg-sky-400"
                type="submit"
                value="Send"
              />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
