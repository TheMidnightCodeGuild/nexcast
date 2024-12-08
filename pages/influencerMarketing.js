import React from "react";
import PageStartSection from "./components/PageStart";
import pageInfo from "../resources/pageInfo";

const influencerMarketing = () => {
  return (
    <div>
      <PageStartSection title={pageInfo[1].title} description={pageInfo[1].description} number={1} />
    </div>
  );
};

export default influencerMarketing;
