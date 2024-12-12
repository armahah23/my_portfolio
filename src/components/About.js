import React from "react";
// countup
import CountUp from "react-countup";
// intersection observer hook
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";
// Link
import { Link } from "react-scroll";

const About = () => {
  const { ref, inView } = useInView({
    // triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="section" ref={ref} id="about">
      <div className="container max-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-2 lg:gap-y-0 h-screen">
          {/* image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about lg:flex-row bg-contain bg-no-repeat h-[400px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:flex-row"
          >
            {/* text */}
            <div className="flex-1">
              <h2 className="h2 text-accent">About Me</h2>
              <h3 className="h3 mb-4">I am a Full Stack Developer</h3>
              <p className="mb-4">
                I'm a dedicated full stack developer with a passion for crafting
                seamless digital experiences. With a love for problem-solving
                and building impactful solutions, I approach each project with
                energy and attention to detail. As a sports enthusiast, I carry
                the same focus and drive from the field to my coding, always
                pushing for growth and resilience in every challenge.
              </p>
            </div>
            {/* stats */}
            <div className="flex gap-x-6 flex-col lg:gap-x-10 lg:flex-col mb-8">
              <div className="flex gap-x-6 mb-6">
                <div>
                  <div className="text-[36px] font-teritary text-gradient mb-2">
                    {inView ? (
                      <CountUp start={0} end={24} duration={5} />
                    ) : null}
                  </div>
                  <div className="font-primary text-sm tracking-[2px]">
                    Months of <br />
                    Academic
                  </div>
                </div>
                <div>
                  <div className="text-[36px] font-teritary text-gradient mb-2">
                    {inView ? (
                      <CountUp start={0} end={10} duration={2} />
                    ) : null}
                    +
                  </div>
                  <div className="font-primary text-sm tracking-[2px]">
                    Projects <br />
                    Completed
                  </div>
                </div>
                <div>
                  <div className="text-[36px] font-teritary text-gradient mb-2">
                    {inView ? (
                      <CountUp start={0} end={20} duration={2} />
                    ) : null}
                    +
                  </div>
                  <div className="font-primary text-sm tracking-[2px]">
                    Projects in <br />
                    Graphic Designing
                  </div>
                </div>
              </div>
              <div className="flex gap-x-8 items-center">
                <Link to="contact" smooth={true} duration={1000}>
                  <button className="btn btn-lg">Contact Me</button>
                </Link>
                {/* <a href="#" className="text-gradient btn-link">
                  My Portfolio
                </a> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
