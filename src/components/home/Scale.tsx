import React from "react";
import NumberTicker from "../ui/number-ticker";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const NumberCounter = ({
  label,
  amount,
}: {
  label: string;
  amount: number;
}) => (
  <div className="flex flex-col text-left w-fit">
    <p className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-foreground-primary font-medium">
      <NumberTicker value={amount} />+
    </p>
    <p className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
      {label}
    </p>
  </div>
);

const Scale = () => {
  return (
    <div className="py-14 md:py-20 xl:py-28 bg-[#0c2645] bg-[linear-gradient(180deg,rgba(12,_38,_69,_1)_20%,rgba(3,_5,_22,_1)_60%)]">
      <div className="max-w-[52rem] mx-auto bg-[url('/svg/arc.svg')] lg:bg-[url('/svg/arc-L.svg')] bg-cover md:bg-contain lg:bg-contain bg-top bg-no-repeat">
        <div className="pt-20 sm:pt-40 lg:pt-60 pb-10 md:pb-14 lg:pb-20 max-w-xl mx-auto text-center px-5">
          <TextGenerateEffect
            duration={2}
            filter={false}
            wrapperClassName="mb-14 lg:mb-20 max-w-[19rem] md:max-w-md mx-auto"
            className="text-xl md:text-2xl lg:text-3xl font-medium"
            words={[
              "We build solutions that help",
              [" businesses", "text-foreground-primary"],
              " of all sizes to",
              [" scale", "text-foreground-primary"],
            ]}
          />
          <div className="flex justify-evenly sm:justify-between items-center gap-3">
            <NumberCounter label="Clients" amount={50} />
            <NumberCounter label="Projects" amount={120} />
            <NumberCounter label="Team Leads" amount={10} />
            <NumberCounter label="Glorious Years" amount={10} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scale;
