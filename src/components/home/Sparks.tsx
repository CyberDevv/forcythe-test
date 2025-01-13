"use client";

import { plans } from "@/constants/plan";
import Image from "next/image";
import { useState } from "react";
import ButtonWithOutlineOverlay from "../ButtonWithOutlineOverlay";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const SparksContainer = () => {
  const [active, setActive] = useState("Idea");

  const Spark = ({ label }: { label: string }) => (
    <button
      onClick={() => setActive(label)}
      className={`overflow-hidden px-2 md:px-2.5 py-3 md:py-3.5 rounded-full text-center text-base font-medium cursor-pointer transition-all duration-300 ${
        active === label
          ? "bg-foreground-secondary text-black"
          : " bg-transparent text-white"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="container_fluid py-20">
      <TextGenerateEffect
        duration={2}
        filter={false}
        wrapperClassName="mb-12 xl:mb-0 max-w-[45rem]"
        className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3rem]"
        words={[
          "From",
          [" Spark", "text-foreground-primary"],
          "to",
          [" Spotlight:", "text-foreground-primary"],
          " we take you every step of the way to success.",
        ]}
      />
      {plans
        .filter((plan) => plan.name === active)
        .map((plan, index) => (
          <div key={index} className="flex lg:items-end flex-col md:flex-row">
            <div className="basis-1/2 flex mb-8 md:mb-0">
              <div className="md:pr-10">
                <div className="border-2 border-foreground-secondary mb-12 rounded-full grid gap-1 grid-cols-4 p-3.5">
                  <Spark label="Idea" />
                  <Spark label="Design" />
                  <Spark label="Develop" />
                  <Spark label="Launch" />
                </div>

                <p className="text-[1.8rem] sm:text-[2rem] font-[500] leading-8 sm:leading-8 mb-12">
                  {plan.title}
                </p>
                <p className="text-[#aea9b1] text-base md:text-lg mb-8 leading-7">
                  {plan.description}
                </p>
                <ButtonWithOutlineOverlay
                  label="Book a Call"
                  icon="play"
                  hoverIcon={"play-white"}
                />
              </div>
            </div>
            <div className="basis-1/2 relative flex justify-start md:justify-end mt-6 md:mt-0">
              <Image
                alt="plan-img"
                loading="lazy"
                width={200}
                height={200}
                decoding="async"
                data-nimg="1"
                className="w-full h-[350px] md:w-[95%] md:h-[95%] lg:w-[90%] lg:h-[426px]"
                src={`/images/${plan.image}.svg`}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default SparksContainer;
