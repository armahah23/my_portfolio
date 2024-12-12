// src/components/Skills.js
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { skills } from "../data/skillsData";
import { fadeIn } from "../variants";
import { getRandomGradient } from "../utils/randomGradient";

const Skills = () => {
  return (
    <section className="section py-16" id="skills">
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-3xl font-bold text-center mb-8 text-gradient"
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className={`flex flex-col items-center p-4 shadow-lg rounded-lg ${getRandomGradient()}`}
            >
              <FontAwesomeIcon icon={skill.icon} className="w-16 h-16 mb-4 text-gray-800" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                <div
                  className="bg-gradient-to-r from-[#42A6E3] to-[#FF56F6] h-4 rounded-full"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
              <p className="text-gray-800">{skill.proficiency}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;