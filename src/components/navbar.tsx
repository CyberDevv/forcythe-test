import { navLinks } from "@/constants/LINKS";
import Image from "next/image";
import Link from "next/link";
import ButtonWithOutlineOverlay from "./ButtonWithOutlineOverlay";
import { Button } from "./ui/button";

const NavLink = ({ label }: { label: string }) => {
  return (
    <li>
      <Link href="/">{label}</Link>
    </li>
  );
};

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 py-[1.8rem] z-30 backdrop-blur-md">
      <div className="container_fluid flex justify-between gap-10 items-center">
        <div className="flex items-center gap-20">
          <Link href="/">
            <Image
              alt="Forcythe logo"
              fetchPriority="high"
              width={150}
              height={10}
              decoding="async"
              data-nimg="1"
              className="w-28 sm:w-32 md:w-auto"
              src="/svg/forcythe logo.svg"
            />
          </Link>
          <ul className="hidden md:flex items-center gap-4 text-base">
            {navLinks.map((link) => (
              <NavLink key={link} label={link} />
            ))}
          </ul>
        </div>

        <div className="hidden md:block">
          <ButtonWithOutlineOverlay label="Book a Call" />
        </div>

        <Button
          variant={"ghost"}
          className="bg-white/10 hover:bg-white/20 rounded-md p-3 md:hidden hamburger"
        >
          <Image
            alt="menu"
            loading="lazy"
            width={18}
            height={18}
            decoding="async"
            data-nimg="1"
            src="/svg/menu.svg"
          />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
