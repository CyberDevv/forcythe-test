"use client";
import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  isDefault,
  wrapperClassName,
}: {
  words: string | (string | [string, string])[];
  className?: string;
  filter?: boolean;
  isDefault?: boolean;
  duration?: number;
  wrapperClassName?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray =
    isDefault && typeof words === "string" ? words.split(" ") : [];

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className={wrapperClassName}>
        {isDefault
          ? wordsArray.map((word, idx) => {
              return (
                <motion.span
                  key={word + idx}
                  className={cn("opacity-0", className)}
                  style={{
                    filter: filter ? "blur(10px)" : "none",
                  }}
                >
                  {word}{" "}
                </motion.span>
              );
            })
          : Array.isArray(words) &&
            words.map((word) => {
              const [text, wordClassName] = Array.isArray(word)
                ? word
                : [word, ""];
              const wordsArray = text.split(" ");
              return wordsArray.map((word, idx) => {
                return (
                  <motion.span
                    key={word + idx}
                    className={cn("opacity-0", className, wordClassName)}
                    style={{
                      filter: filter ? "blur(10px)" : "none",
                    }}
                  >
                    {word}{" "}
                  </motion.span>
                );
              });
            })}
      </motion.div>
    );
  };

  return <>{renderWords()}</>;
};
