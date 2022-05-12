import React from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import Info from "./Info";
import MakeAppionment from "./MakeAppionment";
import News from "./News";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="px-12">
      <Banner />
      <Info />
      <Services />
      <News />
      <MakeAppionment />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
