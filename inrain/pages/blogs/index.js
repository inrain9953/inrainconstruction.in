import { Navbar } from "@/components/navbar/navbar";
import React from "react";
import { blogHomepage } from "@/components/blogs/blog";
import { Button } from "@mui/material";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Blogs = () => {
  return (
    <>
      <Navbar />
      <div>
        <div>
          <div className="md:grid md:grid-cols-3">
            {blogHomepage.map((items) => (
              <div key={items.id} className="m-5 shadow-xl rounded-lg">
                <div>
                  <img
                    className="rounded-lg w-full"
                    src={items.image}
                    alt={items.title}
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-semibold">{items.date}</p>
                  <Link href={items.url}>
                    <h1 className="font-semibold underline hover:text-green-500 text-lg mt-2">
                      {items.title}
                    </h1>
                  </Link>
                  <p className="mt-2 text-justify">{items.description}</p>
                  <Link href={items.url}>
                    <Button className="mt-2" variant="contained" size="small">
                      Read More
                    </Button>
                  </Link>
                </div>
                <div className="flex p-3 justify-items-start gap-5 items-center">
                  <Link
                    href="https://www.facebook.com/p/InRain-Construction-Pvt-Ltd-100084454944911/?_rdr"
                    target="_blank"
                  >
                    <FacebookIcon
                      className="cursor-pointer hover:text-green-500"
                      fontSize="large"
                    />
                  </Link>
                  <Link
                    href="https://www.instagram.com/inrainconstruction_icpl/"
                    target="_blank"
                  >
                    <InstagramIcon
                      className="cursor-pointer hover:text-green-500"
                      fontSize="large"
                    />
                  </Link>
                  <Link href="https://x.com/InrainC" target="_blank">
                    <XIcon
                      className="cursor-pointer hover:text-green-500"
                      fontSize="large"
                    />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/35590476/admin/dashboard/"
                    target="_blank"
                  >
                    <LinkedInIcon
                      className="cursor-pointer hover:text-green-500"
                      fontSize="large"
                    />
                  </Link>
                  <Link
                    href="https://in.pinterest.com/inrainc0212/"
                    target="_blank"
                  >
                    <PinterestIcon
                      className="cursor-pointer hover:text-green-500"
                      fontSize="large"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
