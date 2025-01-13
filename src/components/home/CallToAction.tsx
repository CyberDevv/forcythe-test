import React from "react";
import ButtonWithOutlineOverlay from "../ButtonWithOutlineOverlay";

const CallToAction = () => {
  return (
    <div className="bg-[#071626] bg-[linear-gradient(0deg,rgba(7,_22,_38,_1)_20%,rgba(3,_5,_22,_1)_69%)]">
      <div className="container_fluid py-10 text-center">
        <div className="max-w-[45rem] mx-auto">
          <h2 className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6">
            <span className="text-foreground-primary"> Ready to Scale? </span>
            <br />
            Join successful brands that chose us as their
            <span className="text-foreground-primary"> growth accelerator </span>
          </h2>
          <div className="w-fit mx-auto mb-5">
            <ButtonWithOutlineOverlay label="Book a Call" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
