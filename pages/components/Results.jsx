import React from "react";
import Image from "next/image";
import CountUp from "react-countup";
const OurResults = () => {
  return (
    <section className="text-center py-10 md:py-20 px-4 md:px-0">
      <h4 className="text-base text-gray-500 mb-2 md:mb-4">Performance</h4>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
        Our Results
      </h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-8 md:mb-12 text-sm md:text-base">
        For our clients, we have helped them gain traction on their channels and
        get conversions for their business.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
        <div className="text-center">
          <h3 className="text-teal-500 text-3xl md:text-4xl font-semibold">
            <CountUp end={120} suffix="M+" enableScrollSpy scrollSpyOnce />
          </h3>
          <p className="text-black text-xs md:text-sm mt-4 md:mt-6 text-left md:ml-16">
            Total Views on Social <br /> Media on all platforms
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-red-500 text-3xl md:text-4xl font-semibold">
            <CountUp end={1000} prefix=">" enableScrollSpy scrollSpyOnce />
          </h3>
          <p className="text-black text-xs md:text-sm mt-4 md:mt-6 text-left md:ml-16">
            Paid Search Campaigns <br /> Launched
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-green-500 text-3xl md:text-4xl font-semibold md:mr-10">
            <CountUp end={25} suffix="+" enableScrollSpy scrollSpyOnce />
          </h3>
          <p className="text-black text-xs md:text-sm mt-4 md:mt-6 text-left md:ml-16">
            GEOs covered in performance marketing
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-purple-500 text-3xl md:text-4xl font-semibold">
            <CountUp
              end={15.5}
              suffix="M"
              decimals={1}
              enableScrollSpy
              scrollSpyOnce
            />
          </h3>
          <p className="text-black text-xs md:text-sm mt-4 md:mt-6 text-left md:ml-16">
            Engagement we provided for our client&apos;s business
          </p>
        </div>
      </div>

      <p className="text-gray-500 mt-16 md:mt-24 text-sm md:text-base">
        And we&apos;ve spent 3 years doing it with great teams at
      </p>
      <Image
        className="mt-6 md:mt-10 w-full"
        src="/svgs/line1.svg"
        alt="Results"
        width={1000}
        height={1000}
      />
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-6 justify-center items-center mt-6 md:mt-8 max-w-5xl mx-auto text-center">
        {[
          { src: "/svgs/netflix.svg", alt: "Netflix logo" },
          { src: "/svgs/marvel.svg", alt: "Marvel logo" },
          { src: "/svgs/amazon.svg", alt: "Amazon miniTV logo" },
          { src: "/svgs/sony.svg", alt: "Sony Liv logo" },
          { src: "/svgs/realme.svg", alt: "Realme logo" },
          { src: "/svgs/tcf.svg", alt: "TVF logo" },
          { src: "/svgs/netflix.svg", alt: "Netflix logo" },
          { src: "/svgs/marvel.svg", alt: "Marvel logo" },
          { src: "/svgs/amazon.svg", alt: "Amazon miniTV logo" },
          { src: "/svgs/sony.svg", alt: "Sony Liv logo" },
          { src: "/svgs/realme.svg", alt: "Realme logo" },
          { src: "/svgs/tcf.svg", alt: "TVF logo" },
        ].map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={50}
              className="w-20 md:w-24 h-auto"
            />
          </div>
        ))}
      </div>
      <Image
        src="/svgs/line1.svg"
        alt="Results"
        width={1000}
        height={1000}
        className="w-full mt-6 md:mt-10"
      />
    </section>
  );
};

export default OurResults;
