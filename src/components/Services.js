import React from "react";
// icon
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// vartants
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
// services data
const services = [
  {
    name: "Full Stack Development",
    description:
      "Building seamless, scalable applications from front to back, using MERN Stack and ensuring smooth user experiences and robust functionality.",
    link: "Learn more",
  },
  {
    name: "Graphic Design",
    description:
      "Creating eye-catching visuals with Photoshop, Canva, and Illustrator to bring ideas to life with style and clarity.",
    link: "Learn more",
  },
  {
    name: "UI/ UX Design",
    description:
      "Designing intuitive, user-centered interfaces with Figma, focused on enhancing user engagement and satisfaction.",
    link: "Learn more",
  },
  {
    name: "Cloud Computing",
    description:
      "Exploring scalable solutions with AWS to enhance performance, flexibility, and reliability in modern applications.",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <>
      <section className="section mt-6" id="services">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row">
            {/* text & image */}
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
            >
              <h2 className="h2 text-accent mb-4">What i Do</h2>
              <h3 className="h3 max-w-[450px] mb-8">
                Explore projects that showcase my full stack expertise,
                featuring user-friendly interfaces and scalable backend
                solutions. Each project reflects my skills in creating impactful
                applications.
              </h3>
              <Link to="works" smooth={true} duration={500}>
                <button className="btn btn-sm">See My works</button>
              </Link>
            </motion.div>
            {/* service */}
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex-1"
            >
              {/* service list */}
              <div>
                {services.map((service, index) => {
                  const { name, description, link } = service;
                  return (
                    <div
                      key={index}
                      className="border-b border-white/20 h-[130px] mb-[6px] flex"
                    >
                      <div className="max-w-[476px]">
                        <h4 className="tracking-wider font-primary font-semibold mb-4">
                          {name}
                        </h4>
                        <p className="font-secondary leading-tight">
                          {description}
                        </p>
                      </div>
                      <div className="flex flex-col flex-1 items-end">
                        <Link 
                          to="banner" smooth={true} duration={1000}
                          className="btn w-9 h-9 mb-[42px] flex justify-center items-center cursor-pointer"
                        >
                          <BsArrowUpRight />
                        </Link>
                        <Link
                          to="banner" smooth={true} duration={1000}
                          className="text-gradient text-sm cursor-pointer"
                        >
                          {link}
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
