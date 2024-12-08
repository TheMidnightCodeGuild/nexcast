import React from "react";

import ThreePage from "./components/subC/ThreePage";
import pageInfo from "../resources/pageInfo";
import Footer from "./components/subC/Footer";
const work = () => {
  return (
    <div>
      <ThreePage
        title={pageInfo[6].title}
        description={pageInfo[6].description}
      />
      <Footer />
    </div>
  );
};

export default work;
