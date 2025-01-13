import React from "react";
import ButtonWithOutlineOverlay from "../ButtonWithOutlineOverlay";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { blogData } from "@/constants/Blog";

const Blog = () => {
  return (
    <div className="container_fluid my-10 lg:mb-24">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
        <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6 sm:mb-4 md:mb-0">
          Read our articles, news and product blog
        </p>
        <ButtonWithOutlineOverlay
          label="Visit Blog"
          icon="play"
          hoverIcon={"play-white"}
        />
      </div>
      <BentoGrid>
        {blogData.map((blog, i) => (
          <BentoGridItem
            key={i}
            title={blog.title}
            author={blog.author}
            date={blog.date}
            image={blog.image}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default Blog;

