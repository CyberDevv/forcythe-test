import { socialHandles } from "@/constants/LINKS";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CusLink = ({ icon, link }: { icon: string; link: string }) => (
  <a
    target="_blank"
    className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-foreground-primary flex justify-center items-center"
    href={link}
  >
    <Image
      alt="social"
      loading="lazy"
      width={20}
      height={20}
      decoding="async"
      data-nimg="1"
      src={`/svg/${icon}.svg`}
    />
  </a>
);

const NavLink = ({ label }: { label: string }) => (
  <li className="text-base text-foreground-secondary font-medium">
    <Link href="/">{label}</Link>
  </li>
);

const Footer = () => {
  return (
    <div className="bg-[#071626]">
      <div className="container_fluid py-10 ">
        <div className="lg:grid lg:grid-cols-3 my-10">
          <div className="max-w-lg mb-10 lg:mb-0">
            <div className="w-full grid grid-cols-4">
              <input
                className="py-3 col-span-3 bg-transparent outline-none border border-white rounded-s-full px-4 text-sm placeholder:text-[#79767D]"
                type="text"
                placeholder="Your Email Address"
              />
              <button className="py-3 h-full bg-white text-black hover:bg-[#064386] hover:text-white custom-animate rounded-e-full text-sm font-medium border border-l-0 border-white">
                Subscribe
              </button>
            </div>
            <div className="flex gap-3 mt-5 items-center">
              <div className="w-5 h-5 border-2 rounded-full bg-transparent border-white cursor-pointer flex items-center justify-center">
                <input
                  className="hidden"
                  type="checkbox"
                  id="agreement"
                  name="agreement"
                />
              </div>
              <label htmlFor="agreement" className="text-sm cursor-pointer">
                I agree to receive other notifications from Forcythe
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:col-span-2 gap-10 md:gap-0">
            <div className="lg:pl-14 md:col-span-2 md:pr-10">
              <Image
                alt="Forcythe logo"
                fetchPriority="high"
                width={130}
                height={9}
                decoding="async"
                data-nimg="1"
                className="mb-5 md:mb-8"
                src="/svg/forcythe logo.svg"
              />
              <p className=" text-[#aea9b1]">
                We are the growth company for businesses looking to scale. We
                are dedicated to transforming businesses with bespoke digital
                solutions that drive growth.
              </p>
              <div className="mt-10 hidden md:flex items-center gap-2">
                {socialHandles.map((socialHandle) => (
                  <CusLink
                    key={socialHandle.icon}
                    icon={socialHandle.icon}
                    link={socialHandle.link}
                  />
                ))}
              </div>
            </div>
            <div className="lg:pl-10">
              <h3 className="mb-8 text-2xl font-bold">Company</h3>
              <ul className="flex flex-col gap-2">
                <NavLink label="About" />
                <NavLink label="Services" />
                <NavLink label="Portfolio" />
                <NavLink label="Studio" />
                <NavLink label="Foundation" />
                <NavLink label="Careers" />
                <NavLink label="Blog" />
              </ul>

              <div className="mt-10 flex md:hidden items-center gap-2 w-fit mx-auto">
                {socialHandles.map((socialHandle) => (
                  <CusLink
                    key={socialHandle.icon}
                    icon={socialHandle.icon}
                    link={socialHandle.link}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="copyright border-t-[1px] border-foreground-primary">
          <p className="text-foreground-secondary text-sm mt-5 text-center md:text-left">
            Copyright © {new Date().getFullYear()} Forcythe. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
