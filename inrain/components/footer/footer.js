import React from "react";
import Image from "next/image";
import logo from "../../public/without-bg-logo.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { MailOutline } from "@mui/icons-material";
import CallIcon from "@mui/icons-material/Call";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { Clients } from "../clients/clients";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <Clients />
      <div className="bg-green-600">
        <div className="md:flex md:mr-7">
          <div
            data-aos="zoom-in-up"
            className="text-left ml-7 pt-10 md:w-[25%]"
          >
            <h3 className="text-2xl font-semibold pb-3 m-1 text-white">
              Our Social Links
            </h3>
            <div className="flex mb-7 gap-5">
              <Link
                target="_blank"
                href={
                  "https://www.facebook.com/p/InRain-Construction-Pvt-Ltd-100084454944911/?_rdr"
                }
              >
                <li className="list-none hover:text-white">
                  <FacebookIcon fontSize="large" />
                </li>
              </Link>
              <Link
                target="_blank"
                href={"https://www.instagram.com/inrainconstruction_/"}
              >
                <li className="list-none hover:text-white">
                  <InstagramIcon fontSize="large" />
                </li>
              </Link>
              <Link target="_blank" href={"https://x.com/InrainC"}>
                <li className="list-none hover:text-white">
                  <XIcon fontSize="large" />
                </li>
              </Link>
              <Link
                target="_blank"
                href={
                  "https://www.linkedin.com/company/35590476/admin/dashboard/"
                }
              >
                <li className="list-none hover:text-white">
                  <LinkedInIcon fontSize="large" />
                </li>
              </Link>
              <Link target="_blank" href={"https://youtube.com/@inrainharvesting?si=Fxx_8_rhzHt2ZBLF"}>
                <li className="list-none hover:text-white">
                  <YouTubeIcon fontSize="large" />
                </li>
              </Link>
              <Link
                target="_blank"
                href={"https://in.pinterest.com/inrainc0212/"}
              >
                <li className="list-none hover:text-white">
                  <PinterestIcon fontSize="large" />
                </li>
              </Link>
            </div>
          </div>

          <div
            data-aos="zoom-in-up"
            className="text-left ml-7 mb-7 md:w-[25%] md:pt-10"
          >
            <h3 className="text-2xl font-semibold pb-3 m-1 text-white">
              Quick Links
            </h3>
            <p className="font-medium text-lg m-1 text-white hover:text-sky-700">
              <Link href="/">Home</Link>
            </p>
            <p className="font-medium text-lg m-1 text-white hover:text-sky-700">
              <Link href="/about">About</Link>
            </p>
            <p className="font-medium text-lg m-1 text-white hover:text-sky-700">
              <Link href="/services">Services</Link>
            </p>
            <p className="font-medium text-lg m-1 text-white hover:text-sky-700">
              <Link href="/products">Product</Link>
            </p>
            <p className="font-medium text-lg m-1 text-white hover:text-sky-700">
              <Link href="/contact-us">Contact Us</Link>
            </p>
          </div>

          <div
            data-aos="zoom-in-up"
            className="text-left ml-7 mb-7 md:w-[25%] md:pt-10"
          >
            <h3 className="text-2xl font-semibold pb-3 m-1 text-white">
              Our Products
            </h3>
            <Link href={"/services/rainwater-harvesting-system"}>
              <li className="list-none text-[15px] text-white hover:tracking-wide hover:text-sky-700">
                <ArrowRightAltIcon fontSize="medium" />
                Rainwater Harvesting System
              </li>
            </Link>
            <Link href={"/services/rainwater-harvesting-system-in-delhi-ncr"}>
              <li className="list-none text-[15px] text-white hover:tracking-wide hover:text-sky-700">
                <ArrowRightAltIcon fontSize="medium" />
                Rainwater Harvesting System in Delhi
              </li>
            </Link>
            <Link href={"/services/modular-rainwater-harvesting-system"}>
              <li className="list-none text-[15px] text-white hover:tracking-wide hover:text-sky-700">
                <ArrowRightAltIcon fontSize="medium" />
                Modular Rainwater Harvesting System
              </li>
            </Link>
            <Link href={"/services/roof-top-rainwater-harvesting-system"}>
              <li className="list-none text-[15px] text-white hover:tracking-wide hover:text-sky-700">
                <ArrowRightAltIcon fontSize="medium" />
                Rooftop Rainwater Harvesting System
              </li>
            </Link>
            <Link
              href={"/services/co-polymer-based-rainwater-harvesting-system"}
            >
              <li className="list-none text-[15px] text-white hover:tracking-wide hover:text-sky-700">
                <ArrowRightAltIcon fontSize="medium" />
                Polymer Based Rainwater Harvesting System
              </li>
            </Link>
            <Link href={"/services/storm-water-recharge-and-management-system"}>
              <li className="list-none text-[15px] text-white hover:tracking-wide hover:text-sky-700">
                <ArrowRightAltIcon fontSize="medium" />
                Storm Water Management Company
              </li>
            </Link>
            <Link
              href={
                "/services/modular-rainwater-harvesting-system-for-industries"
              }
            >
              <li className="list-none text-[15px] text-white hover:tracking-wide hover:text-sky-700">
                <ArrowRightAltIcon fontSize="medium" />
                Modular Rainwater Harvesting System for Industries
              </li>
            </Link>
          </div>

          <div
            data-aos="zoom-in-up"
            className="text-left ml-7 md:w-[25%] md:pt-10"
          >
            <h3 className="text-2xl font-semibold m-1 mb-2 text-white">
              Our Office
            </h3>
            <div className="flex mb-5">
              <LocationOnIcon className="mr-2" />
              <a href="https://maps.app.goo.gl/QSZoYkgd8GufagvC6">
                <p className="font-medium text-base text-white hover:text-sky-700">
                  Plot No 06, KH431, 1st floor, Main Road Chattarpur-Satbari,
                  Satbari, New delhi 110074
                </p>
              </a>
            </div>
            <li className="list-none mb-2 text-white hover:text-sky-700">
              <a
                className="text-base"
                href="mailto:sales@inrainwaterharvesting.com"
              >
                <MailOutline />
                sales@inrainwaterharvesting.com
              </a>
            </li>
            <li className="list-none mb-2 text-white hover:text-sky-700">
              <a className=" text-base" href="tel:+919953070003">
                <CallIcon fontSize="small" />
                +91-9953070003
              </a>
            </li>
            <li className="list-none mb-2 text-white hover:text-sky-700">
              <a className="text-base" href="tel:+9101143791960">
                <CallIcon fontSize="small" />
                +91 01143791960
              </a>
            </li>
            {/* <h3 className='text-xl font-semibold pb-3 m-1'>Registered Office</h3>
            <div className='flex justify-center mb-5'>
                <LocationOnIcon className='mr-2'/>
                <p className='font-medium text-lg'>Khasra No - 148 Plot No - 219, GF, Rajpur Khurd Ext, New Delhi 110074</p>
            </div> */}
          </div>
        </div>

        <div className="text-center p-4">
          <p className="text-xs md:text-sm">
            ©Copyright 2024 InRain Construction Pvt Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};
