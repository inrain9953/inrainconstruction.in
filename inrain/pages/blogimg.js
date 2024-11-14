import React from "react";
import Image from "next/image";
import blog1img from "../public/blogs/blog1.webp";

const BlogImg = () => {
  return (
    <div>
      <div>
        <Image src={blog1img} alt="img" />
      </div>
    </div>
  );
};

export default BlogImg;
