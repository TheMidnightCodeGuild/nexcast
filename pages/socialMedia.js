import React from "react";
import PageStartSection from "./components/PageStart";
import pageInfo from "../resources/pageInfo";

const socialMedia = () => {
  return (
    <div>
      <PageStartSection title={pageInfo[0].title} description={pageInfo[0].description} number={0} />
    </div>
  );
};

export default socialMedia;
