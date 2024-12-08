import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className={cn("w-full mx-auto px-4 py-12 md:py-28", className)}>
      {!isMobile ? (
        <DesktopView
          items={items}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        />
      ) : (
        <MobileView
          items={items}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        />
      )}
    </div>
  );
};

const DesktopView = ({ items, hoveredIndex, setHoveredIndex }) => (
  <>
    <h2 className="text-center text-sm text-white mb-2">Problems</h2>
    <h2 className="text-2xl md:text-4xl font-semibold text-center mb-8 md:mb-12 text-white">
      Do any of these sound familiar?
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {items &&
        items.map((item, idx) => (
          <Link
            href={item?.link || "#"}
            key={idx}
            className="relative group block h-full w-full transition-all duration-300 ease-in-out"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}>
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-gradient-to-br from-slate-800 to-slate-900 block rounded-lg shadow-md"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.2 },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    transition: { duration: 0.2, delay: 0.1 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <CardTitle>{item.icon}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </Link>
        ))}
    </div>
  </>
);

const MobileView = ({ items, hoveredIndex, setHoveredIndex }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {items &&
      items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block h-full w-full transition-all duration-300 ease-in-out"
          onClick={() => setHoveredIndex(idx === hoveredIndex ? null : idx)}>
          <Card>
            <CardTitle>{item.icon}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
          {hoveredIndex === idx && (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 opacity-50 rounded-lg" />
          )}
        </div>
      ))}
  </div>
);

const Card = ({ className, children }) => (
  <div
    className={cn(
      "rounded-lg h-auto min-h-[8rem] md:min-h-[9rem] w-full p-2 md:p-3 overflow-hidden border border-slate-800 dark:border-white/[0.2] group-hover:border-slate-600 relative z-20 transition-all duration-300 ease-in-out backdrop-blur-sm bg-slate-900/50",
      className
    )}>
    <div className="relative z-50">
      <div className="p-1 flex flex-col items-center h-full justify-center">
        {children}
      </div>
    </div>
  </div>
);

const CardTitle = ({ className, children }) => (
  <div className={cn("mb-1 flex justify-center", className)}>{children}</div>
);

const CardDescription = ({ className, children }) => (
  <p
    className={cn(
      "text-zinc-400 tracking-wide leading-relaxed text-xs md:text-sm text-center",
      className
    )}>
    {children}
  </p>
);

export default HoverEffect;
