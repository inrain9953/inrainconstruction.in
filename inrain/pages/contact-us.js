import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";
import Image from "next/image";
import logo from "./../public/logo.png";
import rain2 from "./../public/tree.png";
import { useRouter } from "next/router";
import solution_water from "../public/solution_water.jpg";

const Contact = () => {
  const router = useRouter();
  const contactapikey = "b31f7db9-d973-45c2-bd1f-9013efbc3f00";
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", contactapikey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      router.push("/thank-you");
    }
  };

  return (
    <>
      <Navbar />
      <div className="m-5">
        <Image
          alt="img"
          className="w-full rounded-xl md:h-80 shadow-xl"
          src={solution_water}
          loading="eager"
          priority={true}
          unoptimized={true}
        />
      </div>
      <div className="md:flex items-center">
        <div data-aos="zoom-in-up" className="text-center pt-5 md:w-[60%]">
          <h1 className="text-2xl font-semibold md:text-[3rem] m-3">
            InRain<sup>®</sup> Construction Pvt. Ltd.
          </h1>
          <p className="md:text-xl text-green-500 m-3 drop-shadow-lg md:pt-3">
            Our commitment to innovation, quality, and sustainability has made
            us a trusted partner in the industry.
          </p>
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
          data-aos="zoom-in-up"
          className="max-w-fit ml-auto mr-auto drop-shadow-2xl pt-10"
        >
          <div className="Form-container">
            <div className="">
              <Image
                className="w-28 m-auto"
                src={logo}
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
              />
              <input
                required=""
                className="input"
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone No."
              />
              <input
                required=""
                className="input"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
              <textarea
                required=""
                className="input"
                type="text"
                name="message"
                id="message"
                placeholder="Message"
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
