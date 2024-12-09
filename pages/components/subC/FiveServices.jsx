import React from "react";
import Image from "next/image";

const FiveServices = () => {
  const services = [
    {
      title: "Social Media Management",
      description: "Optimize your social presence and engage audiences effectively across platforms.",
      bgColor: "bg-green-500",
    },
    {
      title: "Content Creation",
      description: "Craft tailored content that speaks to your audience and drives engagement.",
      bgColor: "bg-orange-500",
    },
    {
      title: "Graphic Design",
      description: "Deliver stunning visuals and creative designs that stand out.",
      bgColor: "bg-purple-500",
    },
    {
      title: "Video Production and Editing",
      description: "Create impactful videos from concept to completion for any purpose.",
      bgColor: "bg-blue-500",
    },
    {
      title: "Meme Marketing",
      description: "Tap into trends and create viral meme campaigns that resonate with your audience.",
      bgColor: "bg-red-500",
    },
    {
      title: "Localized Campaigns",
      description: "Develop targeted strategies for specific regions to maximize impact.",
      bgColor: "bg-yellow-500",
    },
  ];

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
        <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold md:mb-6">
          Expertise You Can Trust
        </h2>
      </div>
      <div className="px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md text-white ${service.bgColor}`}
          >
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-sm">{service.description}</p>
            <button className="mt-4 px-4 py-2 bg-black rounded text-sm">
              Learn More
            </button>
          </div>
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
