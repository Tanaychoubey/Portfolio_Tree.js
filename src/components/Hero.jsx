import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { profile } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex justify-center items-center">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-20 flex flex-col sm:flex-row items-center gap-5">
        <div className="mt-5 sm:mt-0">
          <img src={profile} alt="Profile" className="h-72 sm:h-80 md:h-96" />
        </div>
        <div className="text-center sm:text-left">
          <h1 className="text-white text-5xl sm:text-6xl">
            Hi, I'm <span className="text-[#915EFF]">Tanay</span>
          </h1>
          <p className="mt-3 text-white-100 text-lg sm:text-xl">
            I develop APIs, user interfaces, and web applications
          </p>
          <div className="flex justify-center sm:justify-start mt-4">
            <button
              className="btn"
              type="button"
              onClick={() => window.open(resume)}
            >
              <strong>Download CV</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>
              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


// updated
