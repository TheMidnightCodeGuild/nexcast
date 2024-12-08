import React from "react";
import PageStartSection from "./components/PageStart";
import pageInfo from "../resources/pageInfo";

const paidSocial = () => {
  return (
    <div>
      <PageStartSection title={pageInfo[2].title} description={pageInfo[2].description} number={2} />
    </div>
  );
};

export default paidSocial;
