import React from "react";
import Navbar from "./subC/Navbar";
import Image from "next/image";

const PitchhmeLanding = () => {
  return (
    <div
      className={` bg-black text-white min-h-screen flex flex-col relative overflow-hidden`}>
      <Image
        src="/images/logo.png"
        alt="image"
        width={800}
        height={800}
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:w-[800px] sm:h-[800px] w-[400px] h-[400px] object-cover"
      />
      <div className="flex flex-col h-screen relative z-10">
        <Navbar />

        {/* Main Section */}
        <main className="px-4 md:px-14 flex-grow flex flex-col justify-end">
          <div className="mb-14">
            <div className=" text-white text-sm mb-4">
              Creative content marketing solutions{" "}
            </div>
            <h1 className="text-2xl md:text-[50px] font-bold leading-tight tracking-[-2%] mb-6">
              They Post. We Perform. That&apos;s the Difference!
            </h1>
            <p className="text-base md:text-base text-gray-400">
              Craft smarter, faster, and measurable marketing strategies{" "}
              <br className="hidden md:inline" /> that bring next-level results
              — truly badhiya.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PitchhmeLanding;
