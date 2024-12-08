import { HoverEffect } from "./ui/card-hover-effect";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Cards() {
  return <CardHoverEffectDemo />;
}

export function CardHoverEffectDemo() {
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
    <div className="w-full min-h-screen bg-[#090a15] text-white sm:py-4 pt-32 px-4 md:px-8 lg:px-16">
      {isMobile ? (
        <>
          <div className="flex flex-col items-center">
            <h2 className="text-center text-sm text-white mb-2">Problems</h2>
            <h2 className="text-2xl md:text-4xl font-semibold mb-8 md:mb-12 text-white text-center">
              Do any of these sound familiar?
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {projects.slice(0, 4).map((project, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg">
                {project.icon}
                <p className="mt-2 text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <HoverEffect items={projects} />
      )}
    </div>
  );
}

export const projects = [
  {
    description: "Good marketers are hard to find, never stick long.",
    icon: (
      <Image
        src="/images/1.svg"
        alt="Stripe Icon"
        width={40}
        height={40}
        className="w-8 h-8 md:w-10 md:h-10"
      />
    ),
  },
  {
    description: "Good marketers are hard to find, never stick long.",
    icon: (
      <Image
        src="/images/2.svg"
        alt="Netflix Icon"
        width={40}
        height={40}
        className="w-8 h-8 md:w-10 md:h-10"
      />
    ),
  },
  {
    description: "Good marketers are hard to find, never stick long.",
    icon: (
      <Image
        src="/images/3.svg"
        alt="Google Icon"
        width={40}
        height={40}
        className="w-8 h-8 md:w-10 md:h-10"
      />
    ),
  },
  {
    description: "Good marketers are hard to find, never stick long.",
    icon: (
      <Image
        src="/images/4.svg"
        alt="Meta Icon"
        width={40}
        height={40}
        className="w-8 h-8 md:w-10 md:h-10"
      />
    ),
  },
  {
    description: "Good marketers are hard to find, never stick long.",
    icon: (
      <Image
        src="/images/4.svg"
        alt="Amazon Icon"
        width={40}
        height={40}
        className="w-8 h-8 md:w-10 md:h-10"
      />
    ),
  },
  {
    description: "Good marketers are hard to find, never stick long.",
    icon: (
      <Image
        src="/images/4.svg"
        alt="Microsoft Icon"
        width={40}
        height={40}
        className="w-8 h-8 md:w-10 md:h-10"
      />
    ),
  },
  {
    description: "Good marketers are hard to find, never stick long.",
    icon: (
      <Image
        src="/images/7.svg"
        alt="Apple Icon"
        width={40}
        height={40}
        className="w-8 h-8 md:w-10 md:h-10"
      />
    ),
  },
  {
    description: "Good marketers are hard to find, never stick long.",
    icon: (
      <Image
        src="/images/8.svg"
        alt="Tesla Icon"
        width={40}
        height={40}
        className="w-8 h-8 md:w-10 md:h-10"
      />
    ),
  },
  {
    description: "Good marketers are hard to find, never stick long.",
    icon: (
      <Image
        src="/images/9.svg"
        alt="Adobe Icon"
        width={40}
        height={40}
        className="w-8 h-8 md:w-10 md:h-10"
      />
    ),
  },
  {
    description: "Good marketers are hard to find, never stick long.",
    icon: (
      <Image
        src="/images/4.svg"
        alt="Salesforce Icon"
        width={40}
        height={40}
        className="w-8 h-8 md:w-10 md:h-10"
      />
    ),
  },
  {
    description: "Good marketers are hard to find, never stick long.",
    icon: (
      <Image
        src="/images/4.svg"
        alt="Twitter Icon"
        width={40}
        height={40}
        className="w-8 h-8 md:w-10 md:h-10"
      />
    ),
  },
  {
    description: "Good marketers are hard to find, never stick long.",
    icon: (
      <Image
        src="/images/4.svg"
        alt="LinkedIn Icon"
        width={40}
        height={40}
        className="w-8 h-8 md:w-10 md:h-10"
      />
    ),
  },
];
