import React, { useEffect, useState } from "react";
// images 
import Image2 from "../assets/Image2.png";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";

// icons
import {
  FaGithub,
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
  FaBehanceSquare,
  FaTiktok,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Banner = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const storedLikeCount = localStorage.getItem("likeCount");
    if (storedLikeCount) {
      setLikeCount(parseInt(storedLikeCount, 10));
    }
    const storedIsClicked = localStorage.getItem("isClicked");
    if (storedIsClicked) {
      setIsClicked(JSON.parse(storedIsClicked));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("likeCount", likeCount);
  }, [likeCount]);

  useEffect(() => {
    localStorage.setItem("isClicked", isClicked);
  }, [isClicked]);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
    setIsClicked(true);
  };

  return (
    <section className="flex items-center w-[100] mt-4" id="home">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center ">
        <div className="flex flex-col gap-y-4 lg:flex-row  lg:gap-max-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[24px] font-bold leading-[0.8] lg:text-[48px]"
            >
              MUHAMADHU <span>AFRIH</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-4 text-[19.2px] lg:text-[36px] font-secondary uppercase font-semibold leading-1"
            >
              <span className="mr-4 text-white mb-12">I am a</span>
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "Graphic Designer",
                  2000,
                  "Freelancer",
                  2000,
                  "Sports Person",
                  2000,
                ]}
                speed={50}
                className="text-accent leading-normal"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-4  max-w-lg mx-auto md:mx-0"
            >
              I’m a dedicated full stack developer with expertise in creating
              dynamic, user-focused applications. My journey has led me to
              specialize in the MERN stack, where I combine creativity with
              technical skill to bring impactful projects to life. From backend
              architecture to responsive front-end designs, I’m committed to
              crafting seamless digital experiences. Let's build the future of
              technology, one line of code at a time.
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-4 items-center mb-4 mx-auto lg:mx-0"
            >
              <Link to="contact" smooth={true} duration={1000}>
                <button className="btn btn-lg">Contact Me</button>
              </Link>
              <a
                href="/public/Afrih.pdf" // Make sure the path is correct
                download="Afrih_CV.pdf" // Sets the downloaded file name
                className="text-gradient btn-link"
              >
                Download My CV
              </a>
              {isClicked ? <button
                onClick={handleLike}
              >
                <FaHeart />
              </button> : <button
                onClick={handleLike}
              >
                <FaRegHeart />
              </button>}
              <span>{likeCount} Likes</span>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-4 max-w-max mx-auto 19:mx-0"
            >
              <a href="https://www.facebook.com/armah.ah.56">
                <FaFacebookSquare />
              </a>
              <a href="https://github.com/armahah23">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/arm-afrih/">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/armah_ah/">
                <FaInstagram />
              </a>
              <a href="https://www.behance.net/ArmahAH">
                <FaBehanceSquare />
              </a>
              <a href="https://twitter.com/ARMAHAH">
                <RiTwitterXFill />
              </a>
              <a href="https://www.tiktok.com/@armahah">
                <FaTiktok />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            // viewport={{ once: false, amount: 0.7 }}
            className="hidden lg:flex flex-1 max-w-[320px] 1g: max-w-[482px]"
          >
            <img
              src={Image2}
              alt="Avatar"
              className="w-[70%] h-auto ml-[20%] mb-[25%]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
