import React from "react";
import PageStartSection from "./components/PageStart";
import pageInfo from "../resources/pageInfo";

const communityManagement = () => {
  return (
    <div>
      <PageStartSection title={pageInfo[4].title} description={pageInfo[4].description} number={4} />
    </div>
  );
}

export default communityManagement;
