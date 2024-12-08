import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Work = (props) => {
  return (
    <div className="font-sans bg-black text-white h-screen flex flex-col relative overflow-x-hidden overflow-y-hidden">
      <Navbar />
      <main className="px-4 md:px-14 flex-grow flex flex-col justify-center min-h-screen">
        <h1 className="text-2xl md:text-[50px] font-bold leading-tight tracking-[-2%] mb-6">
          {props.title}
        </h1>
        <p className="text-base md:text-lg text-gray-400 max-w-2xl">
          {props.description}
        </p>
      </main>
    </div>
  );
};

export default Work;
