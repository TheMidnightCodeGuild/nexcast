import React from "react";
import Footer from "./components/subC/Footer";
import ThreePage from "./components/subC/ThreePage";
import pageInfo from "../resources/pageInfo";

const blogs = () => {
  return (
    <div>
      <ThreePage
        title={pageInfo[7].title}
        description={pageInfo[7].description}
      />
      <Footer />
    </div>
  );
};

export default blogs;
