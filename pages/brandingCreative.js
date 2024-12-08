import React from "react";
import PageStartSection from "./components/PageStart";
import pageInfo from "../resources/pageInfo";

const brandingCreative = () => {
  return (
    <div>
      <PageStartSection title={pageInfo[5].title} description={pageInfo[5].description} number={5} />
    </div>
  );
};

export default brandingCreative;
