import React from "react";
import Home from "./components/Home";
import { CardHoverEffectDemo } from "./components/Cards";
import Mv from "./components/Mv";
import Footer from "./components/subC/Footer";
import OurResults from "./components/Results";

import FiveServices from "./components/subC/FiveServices";
const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Home />
      <CardHoverEffectDemo />
      <Mv />
      <OurResults />
      <FiveServices />

      <Footer />
    </div>
  );
};

export default Index;
