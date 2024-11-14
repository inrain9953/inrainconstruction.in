import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import Button from "@mui/material/Button";
import { MailOutline } from "@mui/icons-material";
import CallIcon from "@mui/icons-material/Call";
import Link from "next/link";
import { useState } from "react";
import PopUp from "../popup";

export const Navbar = () => {
  const [openSidebarMenu, setOpenSidebarMenu] = useState(false);
  function openSidebar() {
    setOpenSidebarMenu(!openSidebarMenu);
  }

  return (
    <>
      <div className="sticky top-0 z-50 bg-transparent bg-gradient backdrop-blur">
        <div className="p-1 flex justify-between items-center">
          <Link href={"/"}>
            <Image
              alt="img"
              className="w-20 ml-2 md:ml-5"
              src={logo}
              loading="eager"
              priority={true}
              unoptimized={true}
            ></Image>
          </Link>
          <div className="hidden md:flex gap-16 text-lg mr-5">
            <Link className="hover:text-green-500" href={"/"}>
              Home
            </Link>
            <Link className="hover:text-green-500" href="/about">
              About
            </Link>
            <Link className="hover:text-green-500" href="/services">
              Services
            </Link>
            <Link className="hover:text-green-500" href="/products">
              Products
            </Link>
            <Link className="hover:text-green-500" href="/blogs">
              Blogs
            </Link>
            <Link className="hover:text-green-500" href="/contact-us">
              Contact
            </Link>
            <a href="tel:+919953070003">
              <Button variant="contained">Call Us</Button>
            </a>
          </div>

          {/* Hamburger */}
          <div className="mr-2 md:hidden">
            <label className="hamburger">
              <input type="checkbox" onClick={openSidebar} />
              <svg viewBox="0 0 32 32">
                <path
                  className="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path className="line" d="M7 16 27 16"></path>
              </svg>
            </label>
          </div>
        </div>

        <div className="flex p-1 items-center text-sm bg-slate-500 md:hidden justify-between">
          <a className="ml-1" href="mailto:sales@inrainwaterharvesting.com">
            <MailOutline fontSize="small" />
            sales@inrainwaterharvesting.com
          </a>
          <p>|</p>
          <a className="mr-1" href="tel:+919953070003">
            <Button size="small" variant="contained">
              <CallIcon fontSize="small" />
              Call Us
            </Button>
          </a>
        </div>

        <div className="hidden md:flex justify-center gap-6 bg-sky-500">
          <MailOutline />
          <a
            className="hover:text-green-700"
            href="mailto:sales@inrainwaterharvesting.com"
          >
            sales@inrainwaterharvesting.com
          </a>
          <br></br>
          <MailOutline />
          <a
            className="hover:text-green-700"
            href="mailto:inrainconstruction@gmail.com"
          >
            inrainconstruction@gmail.com
          </a>
          <br></br>
          <CallIcon />
          <a className="hover:text-green-700" href="tel:+919953070003">
            +91-9953070003
          </a>
        </div>
      </div>

      <div className="md:hidden">
        <ul
          className="sidebar-ul font-semibold rounded-xl bg-gray-300 bg-transparent backdrop-blur-xl"
          style={openSidebarMenu ? { right: "15px" } : {}}
        >
          <li>
            <Link href={"/"} style={{ textDecoration: "none" }}>
              <Image
                alt="img"
                className="w-20"
                src={logo}
                loading="eager"
                priority={true}
                unoptimized={true}
              ></Image>
            </Link>
          </li>
          <li className="hover:text-green-500">
            <Link href="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li className="hover:text-green-500">
            <Link href="/about" style={{ textDecoration: "none" }}>
              About
            </Link>
          </li>
          <li className="hover:text-green-500">
            <Link href="/services" style={{ textDecoration: "none" }}>
              Services
            </Link>
          </li>
          <li className="hover:text-green-500">
            <Link href="/products" style={{ textDecoration: "none" }}>
              Products
            </Link>
          </li>
          <li className="hover:text-green-500">
            <Link href="/blogs" style={{ textDecoration: "none" }}>
              Blogs
            </Link>
          </li>
          <li className="hover:text-green-500">
            <Link href="/contact-us" style={{ textDecoration: "none" }}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <PopUp />
    </>
  );
};
