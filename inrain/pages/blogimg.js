import React from "react";
import Image from "next/image";
import blog1img from "../public/blogs/blog1.webp";
import blog2img from "../public/blogs/blog2img.jpg";

const BlogImg = () => {
  return (
    <div>
      <div>
        <Image src={blog1img} alt="img" />
        <Image src={blog2img} alt="img" />
      </div>
    </div>
  );
};

export default BlogImg;
