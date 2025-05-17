import React from "react";
import Image from "next/image";
import blog1img from "../public/blogs/blog1.webp";
import blog2img from "../public/blogs/blog2img.jpg";
import blog3img from "../public/blogs/blog3img.jpg";
import blog4img from "../public/blogs/blog4img.jpg";
import blog5img from "../public/blogs/blog5.jpg";


const BlogImg = () => {
  return (
    <div>
      <div>
        <Image src={blog1img} alt="img" />
        <Image src={blog2img} alt="img" />
        <Image src={blog3img} alt="img" />
        <Image src={blog4img} alt="img" />
        <Image src={blog5img} alt="img" />
      </div>
    </div>
  );
};

export default BlogImg;
