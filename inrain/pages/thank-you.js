import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";
import rain2 from "./../public/tree.png";
import Image from "next/image";
import { Button } from "@mui/material";
import Link from "next/link";

const ThankYou = () => {
  return (
    <>
      <Navbar />
      
      <div className="m-10 h-40 rounded-2xl flex justify-center items-center bg-green-400">
        <h1 className="text-xl font-semibold">
          Thank you for your interest<br></br>We will get back to you soon...
        </h1>
      </div>
      <Image
        alt="img"
        className="w-9/12 drop-shadow-2xl object-cover m-auto"
        src={rain2}
      />
      <div className="m-10 text-center">
      <Link href="/"><Button variant="contained">Go To Homepage</Button></Link>
      </div>
      <Footer />
    </>
  );
};

export default ThankYou;
