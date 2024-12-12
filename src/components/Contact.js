import React, { useRef } from "react";
import emailjs from "emailjs-com";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k7qpin8", // Replace with your EmailJS service ID
        "template_adhh8ok", // Replace with your EmailJS template ID
        form.current,
        "IiPFJCilEX1S91mXa" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Message sent successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-3xl uppercase text-accent font-medium mb-2 tracking-wide">
                get in touch
              </h4>
              <h2 className="text-[36px] lg:text-[64px] leading-none mb-8">
                let's work <br /> together
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-4 pb-16 p-4 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white
                 focus:border-accent text-white mb-4 transition-all"
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white
                 focus:border-accent text-white mb-4 transition-all"
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
            <textarea
              className="bg-transparent border-b py-8 outline-none w-full placeholder:text-white
                 focus:border-accent text-white mb-8 transition-all resize-none"
              name="message"
              placeholder="Your message"
              required
            ></textarea>
            <button type="submit" className="btn btn-lg">
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
