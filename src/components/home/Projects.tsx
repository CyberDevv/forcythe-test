import Image from "next/image";
import Marquee from "react-fast-marquee";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const Projects = ({ image }: { image: string }) => (
  <Image
    alt={image}
    loading="lazy"
    width={100}
    height={100}
    decoding="async"
    data-nimg="1"
    className="overflow-hidden w-auto h-[340px]"
    src={`/images/${image}.svg`}
  />
);

const ProjectsContainer = () => {
  return (
    <div className="py-10">
      <div className="min-h-[60px]">
        <TextGenerateEffect
          duration={2}
          filter={false}
          wrapperClassName="mb-12 max-w-[90%] mx-auto text-center"
          className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem]"
          words={[
            "Success in",
            [" Motion", "text-foreground-primary"],
            " Our clients' journey",
          ]}
        />
      </div>

      <div className="flex flex-col gap-5 bg-[#030516]/10 bg-[linear-gradient(0deg,rgba(3,_5,_22,_0)_20%,rgba(3,_5,_22,_1)_80%)]">
        <Marquee className="space-x-5">
          <Projects image="activity" />
          <Projects image="africaFund" />
          <Projects image="exec-pro" />
          <Projects image="phone" />
          <Projects image="stac" />
          <Projects image="starks" />
        </Marquee>
        <Marquee className="space-x-5" direction="right">
          <Projects image="starks" />
          <Projects image="stac" />
          <Projects image="phone" />
          <Projects image="exec-pro" />
          <Projects image="africaFund" />
          <Projects image="activity" />
        </Marquee>
      </div>
    </div>
  );
};

export default ProjectsContainer;
