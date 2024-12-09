import React from "react";
import Image from "next/image";
import Navbar from "./components/subC/Navbar";
import Footer from "./components/subC/Footer";

const Work = () => {
  const projects = [
    {
      title: "Brand Evolution Campaign",
      client: "TechCorp Solutions",
      category: "Brand Strategy",
      image: "/images/work1.jpg",
      description:
        "Complete brand refresh and digital marketing strategy that increased engagement by 150%",
      results: ["150% increase in engagement", "200% ROI", "1M+ impressions"],
    },
    {
      title: "Social Media Growth",
      client: "EcoFriendly Co",
      category: "Social Media Marketing",
      image: "/images/work2.jpg",
      description:
        "Organic social media strategy focused on community building and brand awareness",
      results: [
        "100k+ new followers",
        "45% engagement rate",
        "300% increase in leads",
      ],
    },
    {
      title: "Performance Marketing",
      client: "FitLife Gear",
      category: "Paid Advertising",
      image: "/images/work3.jpg",
      description:
        "Data-driven paid social campaign optimized for conversions and ROAS",
      results: ["3x ROAS", "50k+ conversions", "40% lower CPA"],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Delivering exceptional results through strategic digital marketing
              solutions
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-sm text-purple-600 font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-2 text-gray-900">
                    {project.title}
                  </h2>
                  <h3 className="text-lg text-gray-700 mb-3">
                    {project.client}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2 text-gray-900">
                      Key Results:
                    </h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {project.results.map((result, idx) => (
                        <li key={idx}>{result}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Work;
