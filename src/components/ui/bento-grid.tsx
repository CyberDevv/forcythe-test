import { cn } from "@/lib/utils";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  title,
  author,
  date,
  image,
}: {
  className?: string;
  title: string;
  author: string;
  date: string;
  image: string;
}) => {
  return (
    <div className="w-full h-max pb-5 rounded-[1.3rem] relative overflow-hidden cursor-pointer group hover:shadow-sm hover:shadow-foreground-primary transition-all duration-500">
      <div className="h-60 sm:h-56 relative mb-6">
        <div className="bg-foreground-primary z-0 size-full absolute top-0 left-0 bg-opacity-10 rounded-[1.3rem] animate-pulse" />
        <Image
          alt={image}
          loading="lazy"
          decoding="async"
          fill
          className="object-cover size-full rounded-[1.3rem] transition-transform duration-300 transform group-hover:scale-105"
          sizes="100vw"
          src={`/images/blog/${image}.webp`}
        />
      </div>
      <div className="pl-5 relative before:absolute before:w-[1px] before:h-[90%] before:bg-white before:left-0 before:top-[50%] before:-translate-y-[50%] group-hover:translate-x-4 transition-all">
        <p className="text-lg font-semibold mb-1">Blog</p>
        <div className="text-base text-[#aea9b1] flex items-center mb-6">
          <p>{author}</p>
          <div className="h-2 w-2 rounded-full bg-white mx-[6px] "></div>
          <p>{date}</p>
        </div>
        <h5 className="text-xl md:text-2xl font-semibold line-clamp-2">
          {title}
        </h5>
      </div>
    </div>
  );
};
