import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";
import rain2 from "./../public/tree.png";
import Image from "next/image";
import { Button } from "@mui/material";
import Link from "next/link";
import service13 from "../public/service13.jpg";

const ThankYou = () => {
  return (
    <>
      <Navbar />
      <div className="m-5">
        <Image
          className="w-full md:h-72 shadow-xl rounded-xl"
          src={service13}
          alt="img"
          loading="eager"
          priority={true}
          unoptimized={true}
        />
      </div>
      <div className="m-10 h-40 rounded-2xl flex justify-center items-center bg-green-400">
        <p className="text-xl text-center font-semibold p-5">
          Thank you for your interest<br></br>Our team will get back to you
          soon...
        </p>
      </div>
      <Image
        alt="img"
        className="w-1/2 md:w-1/4 drop-shadow-2xl object-cover m-auto"
        src={rain2}
        loading="eager"
        priority={true}
        unoptimized={true}
      />
      <div className="m-10 text-center">
        <Link href="/">
          <Button variant="contained">Go To Homepage</Button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default ThankYou;
