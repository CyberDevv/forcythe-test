"use client";
import {
  FloatingPanelContent,
  FloatingPanelRoot,
  FloatingPanelTrigger,
} from "@/components/ui/StartupNav";

import { StartupsData } from "@/constants/Startups";
import Image from "next/image";
import { useState } from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export const Test = ({
  title,
  description,
  handleImage,
  handle,
}: {
  title: string;
  description: string;
  handle: string;
  handleImage: string;
}) => (
  <>
    <div className="sm:basis-[58%]">
      <TextGenerateEffect
        duration={2}
        filter={false}
        wrapperClassName="mb-4"
        className="text-base font-bold"
        isDefault
        words={title}
      />

      <TextGenerateEffect
        duration={2}
        filter={false}
        wrapperClassName="mb-3"
        className="text-base leading-7"
        words={description}
        isDefault
      />

      <TextGenerateEffect
        duration={2}
        filter={false}
        wrapperClassName="mb-4"
        className="text-[15px] font-semibold"
        isDefault
        words={handle}
      />
    </div>
    <div className="w-full h-[24rem] sm:w-auto sm:h-auto sm:basis-[42%] relative object-top mt-3 sm:mt-0">
      <Image
        alt="ceo"
        loading="lazy"
        decoding="async"
        data-nimg="fill"
        fill
        className="rounded-xl relative object-top size-full object-cover right-0 left-0 top-0 bottom-0"
        src={`/images/${handleImage}.svg`}
      />
    </div>
  </>
);

const StartupsContainer = () => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="container_fluid py-10 ">
      <TextGenerateEffect
        duration={2}
        filter={false}
        wrapperClassName="mb-12 max-w-4xl mx-auto text-center"
        className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3.5rem]"
        words={[
          "Discover the",
          [" transformative stories", "text-foreground-primary"],
          " of startups that scaled new heights with us",
        ]}
      />

      <div className="relative w-full overflow-x-scroll hide-scrollbar hidden lg:block">
        <div className="w-full rounded-full grid grid-cols-5 min-w-[750px] z-50">
          {StartupsData.map((startup, index) => {
            return (
              <FloatingPanelRoot key={index}>
                <FloatingPanelTrigger
                  hasLabel={startup?.hasLabel || false}
                  title={startup.image}
                  name={startup.name}
                  onClick={() => setActive(startup.name)}
                  active={active!}
                />
                <FloatingPanelContent active={active!}>
                  <Test
                    title={startup.title!}
                    handle={startup.handle!}
                    description={startup.desc!}
                    handleImage={startup.handleImage}
                  />
                </FloatingPanelContent>
              </FloatingPanelRoot>
            );
          })}
        </div>
        <div className="w-full absolute top-0 border-[1px] border-[#06438C] -z-10 rounded-full grid grid-cols-5 min-w-[750px] h-[64.19px]"></div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <div className="relative w-full overflow-x-scroll hide-scrollbar ">
          <div className="w-full border-[1px] border-[#06438C] -z-10 rounded-full grid grid-cols-5 min-w-[750px] h-[64.19px]">
            {StartupsData.map((startup, index) => {
              return (
                <FloatingPanelRoot key={index}>
                  <FloatingPanelTrigger
                    hasLabel={startup?.hasLabel || false}
                    title={startup.image}
                    name={startup.name}
                    onClick={() => setActive(startup.name)}
                    active={active!}
                  />
                </FloatingPanelRoot>
              );
            })}
          </div>
        </div>
        <div>
          {StartupsData.filter((startup) => startup.name === active).map(
            (startup, index) => {
              return (
                <div
                  key={index}
                  className="mt-5 w-full max-w-[600px] rounded-[1.8rem] flex flex-col sm:flex-row p-5 sm:p-7 bg-[#0c2645] text-white"
                >
                  <Test
                    title={startup.title!}
                    handle={startup.handle!}
                    description={startup.desc!}
                    handleImage={startup.handleImage}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default StartupsContainer;
