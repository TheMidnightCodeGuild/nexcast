import React from "react";
import Dservice from "./Dservice";
import dServices from "@/resources/dService";
import Image from "next/image";

const FiveServices = () => {
  const industries = [
    "HEALTH TECH",
    "FINTECH",
    "CRYPTO",
    "E-COMMERCE",
    "RETAIL",
    "NGOs",
    "SAAS",
    "PUBLIC SERVICE",
    "TRAVEL",
    "HOSPITALITY",
    "NON - PROFIT",
    "ENTERTAINMENT",
  ];

  return (
    <>
      <div className="text-center pt-10 md:pt-32">
        <h4 className="text-base md:text-base text-gray-500 mb-2 md:mb-4">
          Services
        </h4>
        <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold md:mb-6">
          Expertise You Can Trust
        </h2>
      </div>
      <div className="px-4 md:px-8 ">
        {dServices.slice(0, 6).map((service, index) => (
          <Dservice key={index} {...service} />
        ))}
      </div>
      <div className="max-w-[90%] lg:max-w-[1300px] mx-auto px-4 py-16 md:py-32">
        <h2 className="text-lg md:text-xl lg:text-2xl text-center text-gray-500 mb-10 md:mb-20">
          We work with these industries
        </h2>
        <Image
          className="my-5 w-full"
          src="/svgs/bigline.svg"
          alt="Line"
          width={1000}
          height={1000}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 p-2 md:p-4">
          {industries.map((industry, index) => (
            <div key={index} className="text-center p-2">
              <p className="text-xs md:text-sm text-gray-500">{industry}</p>
            </div>
          ))}
        </div>
        <Image
          className="my-5 md:my-10 w-full"
          src="/svgs/bigline.svg"
          alt="Line"
          width={1000}
          height={1000}
        />
      </div>
    </>
  );
};

export default FiveServices;
