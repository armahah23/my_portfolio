import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// (mg
import Img1 from "../assets/mnds.jpeg";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/ecoomerce site.png";
import { Link } from "react-scroll";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 flex flex-col gap-y-6 mb-6 lg:mb-0"
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work
              </h2>
              <p className="max-w-sm mb-8">
                A showcase of my personal projects, each one crafted with
                creativity and dedication. These works represent my journey of
                growth, experimentation, and passion for design.
              </p>
              <a href="https://github.com/armahah23?tab=repositories">
                <button className="btn btn-sm">View all projects</button>
              </a>
            </div>
            {/* image1 */}
            <div className="group relative overflow-hidden w-[45%] border-2 border-white/50 rounded-xl">
              {/* ovrlay */}
              <a href="https://github.com/armahah23/mnds">
                <div className="group-hover:bg-black/70 group-hover:cursor-pointer w-full h-full absolute z-40 transition-all duration-300"></div>
              </a>
              {/* img */}
              <img
                src={Img1}
                alt=""
                className="group-hover:scale-125 transition-all duration-500 "
              />
              {/* pre title */}
              <div className="absolute -bottom-full group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient ml-4">React Project</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full group-hover:bottom-12 transition-all duration-700 z-50">
                <span className="text-3xl text-white ml-4">
                  MndS Web Application
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 flex flex-col gap-y-10 mt-4"
          >
            {/* image2 */}
            <div className="group relative overflow-hidden w-[80%] border-2 border-white/50 rounded-xl">
              {/* ovrlay */}
              <a href="https://github.com/armahah23/project_Gems">
                <div className="group-hover:bg-black/70 group-hover:cursor-pointer w-full h-full absolute z-40 transition-all duration-300"></div>
              </a>
              {/* img */}
              <img
                src={Img2}
                alt=""
                className="group-hover:scale-125 transition-all duration-500"
              />
              {/* pre title */}
              <div className="absolute -bottom-full group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient ml-4">MERN Stack</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full group-hover:bottom-12 transition-all duration-700 z-50">
                <span className="text-3xl text-white ml-4">
                  Auto Care Web Solution
                </span>
              </div>
            </div>
            {/* image3 */}
            <div className="group relative overflow-hidden w-[80%] border-2 border-white/50 rounded-xl">
              {/* ovrlay */}
              <a href="https://github.com/armahah23/ecommercesite">
                <div className="group-hover:bg-black/70 group-hover:cursor-pointer w-full h-full absolute z-40 transition-all duration-300"></div>
              </a>
              {/* img */}
              <img
                src={Img3}
                alt=""
                className="group-hover:scale-125 transition-all duration-500"
              />
              {/* pre title */}
              <div className="absolute -bottom-full group-hover:bottom-24  transition-all duration-500 z-50">
                <span className="text-gradient ml-4">MERN Stack</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full group-hover:bottom-12 transition-all duration-700 z-50">
                <span className="text-3xl text-white ml-4">
                  E-Commerce Application
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
