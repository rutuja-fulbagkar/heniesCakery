import React from "react";
import Team from "../landing/Team";
import { AboutUs } from "../landing/AboutUs";

const About = () => {
  return (
    <div>
      <div
        className="container-fluid page-header py-6 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center pt-5 pb-3">
          <h1 className="display-4 text-white animated slideInDown mb-3">
            About Us
          </h1>
        </div>
      </div>

      <AboutUs />
      <Team />
    </div>
  );
};

export default About;
