import React from "react";
import Banner from "./Banner";
import Info from "./Info";
import MakeAppionment from "./MakeAppionment";
import News from "./News";
import Services from "./Services";

const Home = () => {
  return (
    <div className="px-12">
      <Banner />
      <Info />
      <Services />
      <News />
      <MakeAppionment />
    </div>
  );
};

export default Home;
