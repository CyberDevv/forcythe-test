import Image from "next/image";
import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const Showcase = ({ label, desc }: { label: string; desc?: string }) => (
  <HoverBorderGradient>
    <div className="w-fit p-2 bg-[#60A6E7] bg-opacity-60 rounded-md mb-5">
      <Image
        alt="Experience"
        loading="lazy"
        width={30}
        height={30}
        decoding="async"
        data-nimg="1"
        src="/svg/layers-three.svg"
      />
    </div>
    <TextGenerateEffect
      duration={2}
      filter={false}
      wrapperClassName="mb-5"
      className="text-2xl font-medium"
      words={label}
      isDefault
    />
    <TextGenerateEffect
      duration={2}
      filter={false}
      wrapperClassName="mb-0"
      className="text-[#aea9b1] text-[17.5px]"
      words={desc!}
      isDefault
    />
  </HoverBorderGradient>
);

const ShowcaseContainer = () => {
  return (
    <div className="bg-[#0c2645] bg-[linear-gradient(0deg,rgba(12,_38,_69,_1)_20%,rgba(3,_5,_22,_1)_70%)]">
      <div className="container_fluid py-14">
        <TextGenerateEffect
          duration={2}
          filter={false}
          wrapperClassName="text-center mb-10 "
          className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] text-foreground-secondary"
          isDefault
          words={"Your best call for B2B/B2C product innovation"}
        />
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8">
          <Showcase
            label="Experience"
            desc="Decades of collective wisdom. Leverage our extensive experience to avoid common pitfalls and accelerate your business growth."
          />
          <Showcase
            label="Quick Support"
            desc="We are your reliable partner, always there when you need us, ensuring smooth operations at every stage of your growth."
          />
          <Showcase
            label="Cost Savings"
            desc="Maximising impact, minimising costs efficiency is key. We provide cost-effective solutions without compromising on quality."
          />
        </div>
      </div>
    </div>
  );
};

export default ShowcaseContainer;
