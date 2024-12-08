import React from 'react';
import localFont from "next/font/local";
import Navbar from './subC/Navbar';
import OurApproachSection from './subC/OurApproach';
import ourApproachData from '../../resources/ourApproach';
import helpSectionData from '../../resources/weCanHelpYou';
import WeCanHelpYou from './subC/WeCanHelpYou';
import ServicesIncluded from './subC/ServicesIncluded';
import servicesIncluded from '../../resources/servicesIncluded';
import TheProcessWeFollow from './subC/TheProcessWeFollow';
import OurResults from './subC/OurResults';
import ourResults from '../../resources/ourResults';
import OurPlatforms from './subC/OurPlatforms';
import platforms from '../../resources/ourPlateforms';
import Footer from './subC/Footer';
const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

const PageStartSection = (props) => {
  // Add a check for ourApproachData
  const approachData = ourApproachData[props.number] || {};
  const helpData = helpSectionData[props.number] || {};
  const servicesData = servicesIncluded[props.number] || {};
  const resultsData = ourResults[props.number] || {};
  const platformsData = platforms[props.number] || {};

  return (
    <div className={`${satoshi.variable} font-sans bg-black text-white min-h-screen flex flex-col relative overflow-hidden`}>
      <Navbar />
      <main className="px-4 md:px-14 flex-grow flex flex-col justify-center min-h-screen">
        <h1 className="text-2xl md:text-[50px] font-bold leading-tight tracking-[-2%] mb-6">{props.title}</h1>
        <p className="text-base md:text-lg text-gray-400 max-w-2xl">
          {props.description}
        </p>
      </main>
      <OurApproachSection 
        description1={approachData.description1 || ''}
        description2={approachData.description2 || ''}
      />
      <WeCanHelpYou 
        text1={helpData.text1 || ''}
        text2={helpData.text2 || ''}
        text3={helpData.text3 || ''}
        text4={helpData.text4 || ''}
      />
      <ServicesIncluded 
        service1={servicesData.service1 || ''}
        service2={servicesData.service2 || ''}
        service3={servicesData.service3 || ''}
        service4={servicesData.service4 || ''}
        service5={servicesData.service5 || ''}
        service6={servicesData.service6 || ''}
        service7={servicesData.service7 || ''}
        service8={servicesData.service8 || ''}
      />
      <TheProcessWeFollow />
      <OurResults 
        result1={resultsData.result1 || ''}
        result2={resultsData.result2 || ''}
        result3={resultsData.result3 || ''}
        result4={resultsData.result4 || ''}
      />
      <OurPlatforms 
        link1={platformsData.link1 || ''}
        link2={platformsData.link2 || ''}
        link3={platformsData.link3 || ''}
        link4={platformsData.link4 || ''}
        link5={platformsData.link5 || ''}
      />
      <Footer />
    </div>
  );
};

export default PageStartSection;
