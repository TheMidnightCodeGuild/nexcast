import React from "react";
import PageStartSection from "./components/PageStart";
import pageInfo from "../resources/pageInfo";

const paidSearch = () => {
  return (
    <div>
      <PageStartSection title={pageInfo[3].title} description={pageInfo[3].description} number={3} />
    </div>
  );
};

export default paidSearch;
