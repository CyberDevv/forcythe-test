import Image from "next/image";
import { Button } from "./ui/button";

const ButtonWithOutlineOverlay = ({
  label,
  icon,
  hoverIcon,
}: {
  label: string;
  icon?: string;
  hoverIcon?: string;
}) => {
  return (
    <div className="relative w-fit group">
      <Button variant={"outlineOverlay"}>
        {label}
        {icon && (
          <Image
            alt={icon!}
            loading="lazy"
            width={10}
            height={10}
            decoding="async"
            data-nimg="1"
            className="group-hover:hidden"
            src={`/svg/${icon}.svg`}
          />
        )}
        {hoverIcon && (
          <Image
            alt={icon!}
            loading="lazy"
            width={10}
            height={10}
            decoding="async"
            data-nimg="1"
            className="hidden group-hover:block"
            src={`/svg/${hoverIcon}.svg`}
          />
        )}
      </Button>
      <div className="size-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
    </div>
  );
};

ButtonWithOutlineOverlay.displayName = "ButtonWithOutlineOverlay";

export default ButtonWithOutlineOverlay;
