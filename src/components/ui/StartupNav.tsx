"use client";

import { AnimatePresence, MotionConfig, Variants, motion } from "motion/react";
import React, {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";

const TRANSITION = {
  type: "spring",
  bounce: 0.1,
  duration: 0.4,
};

interface FloatingPanelContextType {
  isOpen: boolean;
  openFloatingPanel: (rect: DOMRect) => void;
  closeFloatingPanel: () => void;
  uniqueId: string;
  note: string;
  setNote: (note: string) => void;
  triggerRect: DOMRect | null;
  title: string;
  setTitle: (title: string) => void;
}

const FloatingPanelContext = createContext<
  FloatingPanelContextType | undefined
>(undefined);

function useFloatingPanel() {
  const context = useContext(FloatingPanelContext);
  if (!context) {
    throw new Error(
      "useFloatingPanel must be used within a FloatingPanelProvider"
    );
  }
  return context;
}

function useFloatingPanelLogic() {
  const uniqueId = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [note, setNote] = useState("");
  const [triggerRect, setTriggerRect] = useState<DOMRect | null>(null);
  const [title, setTitle] = useState("");

  const openFloatingPanel = (rect: DOMRect) => {
    setTriggerRect(rect);
    setIsOpen(true);
  };
  const closeFloatingPanel = () => {
    setIsOpen(false);
    setTriggerRect(null);
    setNote("");
  };

  return {
    isOpen,
    openFloatingPanel,
    closeFloatingPanel,
    uniqueId,
    note,
    setNote,
    triggerRect,
    title,
    setTitle,
  };
}

interface FloatingPanelRootProps {
  children: React.ReactNode;
  className?: string;
}

export function FloatingPanelRoot({
  children,
  className,
}: FloatingPanelRootProps) {
  const floatingPanelLogic = useFloatingPanelLogic();

  return (
    <FloatingPanelContext.Provider value={floatingPanelLogic}>
      <MotionConfig transition={TRANSITION}>
        <div className={cn("relative", className)}>{children}</div>
      </MotionConfig>
    </FloatingPanelContext.Provider>
  );
}

interface FloatingPanelTriggerProps {
  hasLabel: boolean;
  className?: string;
  title: string;
  onClick: () => void;
  active: string;
  name: string;
}

export function FloatingPanelTrigger({
  hasLabel,
  className,
  title,
  active,
  name,
  onClick,
}: FloatingPanelTriggerProps) {
  const { openFloatingPanel, closeFloatingPanel, uniqueId, setTitle } =
    useFloatingPanel();
  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    if (triggerRef.current) {
      closeFloatingPanel();
      openFloatingPanel(triggerRef.current.getBoundingClientRect());
      setTitle(title);
      onClick();
    }
  };

  useEffect(() => {
    if (title === "starks") {
      handleClick();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, triggerRef.current]);

  return (
    <motion.button
      ref={triggerRef}
      layoutId={`floating-panel-trigger-${uniqueId}`}
      className={cn(
        "w-full p-[1.1rem] cursor-pointer false transition-all duration-300",
        active === name && `bg-[#0c2645]`,
        name === "starks" && `!rounded-s-full`,
        name === "Beaupreneur" && `!rounded-e-full`,
        className
      )}
      style={{ borderRadius: 0 }}
      onClick={handleClick}
      //   whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-haspopup="dialog"
      aria-expanded={false}
    >
      <motion.div
        layoutId={`floating-panel-label-container-${uniqueId}`}
        className="w-fit h-full col mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit flex items-center justify-center"
      >
        <Image
          alt={title}
          loading="lazy"
          width={20}
          height={20}
          decoding="async"
          data-nimg="1"
          className={cn(
            "w-full",
            title === "Beaupreneur" && "!w-36",
            title === "iwaria" && "!w-20"
          )}
          src={`/svg/${title}.svg`}
        />
        {hasLabel ? title : ""}
      </motion.div>
    </motion.button>
  );
}

interface FloatingPanelContentProps {
  children: React.ReactNode;
  className?: string;
  active: string;
}

export function FloatingPanelContent({
  children,
  className,
  active,
}: FloatingPanelContentProps) {
  const {
    isOpen,
    closeFloatingPanel,
    openFloatingPanel,
    uniqueId,
    triggerRect,
    title,
  } = useFloatingPanel();
  const contentRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const [parentWidth, setparentWidth] = useState(0)
  
  useEffect(() => {
    if (title !== active) {
      closeFloatingPanel();
    }
  }, [active, closeFloatingPanel, openFloatingPanel, title]);

  const variants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  useEffect(() => {
    if (parentRef.current) {
      const parentWidth = parentRef.current.getBoundingClientRect().width;
      setparentWidth(parentWidth);
    }
  }, [parentRef]);

  return (
    <div ref={parentRef}>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              ref={contentRef}
              layoutId={`floating-panel-${uniqueId}`}
              className={cn("z-50 w-max", className)}
              style={{
                //   borderRadius: 12,
                left: triggerRect ? triggerRect.left : "50%",
                marginLeft:
                  active === "iwaria"
                    ? -(parentWidth) * 1.30
                    : active === "Beaupreneur"
                    ? -(parentWidth) * 1.30
                    : "",
                top: triggerRect ? triggerRect.bottom + 8 : "50%",
                transformOrigin: "top left",
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
              role="dialog"
              aria-modal="true"
              aria-labelledby={`floating-panel-title-${uniqueId}`}
            >
              <div className="mt-5 w-full max-w-[600px] rounded-[1.8rem] flex flex-col sm:flex-row p-5 sm:p-7 bg-[#0c2645] text-white space-x-5">
                {children}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
