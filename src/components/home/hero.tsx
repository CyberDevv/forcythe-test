import React from "react";
import ButtonWithOutlineOverlay from "../ButtonWithOutlineOverlay";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const Hero = () => {
  return (
    <div className="container_fluid">
      <div className="w-full bg-white/10 p-5 py-8 md:p-8 lg:p-10 my-10 rounded-[2rem] sm:rounded-[3rem]">
        <div className="max-w-[56rem]">
          <TextGenerateEffect
            duration={2}
            filter={false}
            wrapperClassName="mb-7"
            className="text-[3.5rem] sm:text-[4rem]  lg:text-[5rem] font-normal leading-[1] "
            words={[
              "We build",
              [" products", "text-foreground-primary"],
              " that shape a better future",
            ]}
          />
          <div className="mb-8 max-w-3xl">
            <TextGenerateEffect
              duration={2}
              filter={false}
              isDefault
              className="text-[#aea9b1] text-base md:text-lg mb-8 leading-7"
              words={
                "We're the architects of digital excellence across industries. We redefine business with cutting-edge digital strategies that invokes sector-wide transformation."
              }
            />
          </div>
          <div className="mb-5">
            <ButtonWithOutlineOverlay
              label="Book a Call"
              icon="play"
              hoverIcon={"play-white"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
