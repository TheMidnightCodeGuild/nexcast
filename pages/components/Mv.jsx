import React from "react";
import Image from "next/image";

const SolutionsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen py-16 md:py-32 px-4 md:px-8">
      {/* Solutions Heading */}
      <div className="text-center mb-8 md:mb-10">
        <p className="text-black text-sm">Solutions</p>
        <h2 className="text-3xl md:text-[48px] font-bold mt-2 font-['Satoshi_Variable'] leading-tight md:leading-[56px] tracking-[-0.02em] text-center">
          If they resonate... you&apos;re not alone.
          <br className="hidden md:block" />
          We can help.
        </h2>
        <p className="mt-4 text-base md:text-[20px] font-['Inter'] font-normal leading-relaxed md:leading-[32px] text-center">
          Led by{" "}
          <span className="text-[#5414F5] cursor-pointer">Arpit Pandey</span>{" "}
          and <span className="text-[#5414F5] cursor-pointer">Chirag Bum</span>,
          our studio delivers the quality of a big,
          <br className="hidden md:block" /> expensive agency with the pace and
          agility of a dedicated team.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative w-full max-w-4xl">
        <h2 className="absolute text-[#5414F5] top-4 right-4 md:top-[250px] md:left-[600px] flex items-center text-sm md:text-base">
          Our Vision
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1">
            <path
              d="M7.5 15L12.5 10L7.5 5"
              stroke="#5414F5"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </h2>
        <h2 className="absolute text-[#5414F5] bottom-4 left-4 md:top-[14rem] md:left-[12rem]  flex items-center text-sm md:text-base">
          Our Mission
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1">
            <path
              d="M7.5 15L12.5 10L7.5 5"
              stroke="#5414F5"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </h2>
        <Image
          src="/images/vm.webp"
          alt="Our Mission"
          width={1020}
          height={742}
          layout="responsive"
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default SolutionsSection;
