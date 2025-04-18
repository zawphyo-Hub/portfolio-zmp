import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import "../index.css";

const InputField = ({ label, value, onChange, placeholder, name, type }) => (
  <label className="flex flex-col">
    <span className="text-white font-medium mb-4">{label}</span>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-white py-4 px-6 placeholder:text-black text-black rounded-lg outline-none border-none font-medium"
    />
  </label>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setNameError("");
    setConfirmation("");

    if (!validateEmail(form.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (!form.name.trim()) {
      setNameError("Name is required.");
      return;
    }


    setLoading(true);

    emailjs
      .send(
        "service_1tnirpv", 
        "template_fzaam8s",
        {
          from_name: form.name,
          to_name: "Zaw Min Phyo",
          from_email: form.email,
          to_email: "zawminp2003@gmail.com",
          message: form.message,
        },
        "nkfFpgIL1ZN4xAXml"
      )
      .then(
        () => {
          setLoading(false);
          setConfirmation("Thank you! I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        }
      )
      .catch((error) => {
        setLoading(false);
        console.error(error);
        setConfirmation("Something went wrong. Please try again. :/");
      });
  };

  return (

    <>
    <motion.div variants={textVariant()}>
            
            <h2 className={`${styles.sectionHeadText}`}>Contact</h2>
    </motion.div>
    <div className="w-full flex">
            <motion.p   variants={fadeIn('', '', 0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
            This message will be delivered to my email address.
             
            </motion.p>
      </div>
   
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black p-8 rounded-2xl">
        <p className='text-white'>Get in touch with me</p>
        {/* <h3 className='text-white text-[23px]'>Contact Me</h3> */}

        <form ref={formRef} onSubmit={handleSubmit} className="mt-6 flex flex-col gap-8 ">
          <InputField
            label="Your Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            type="text"
          />
          {nameError && <span className="text-red-500">{nameError}</span>}

          <InputField
            label="Email Address"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            type="email"
          />
          {emailError && <span className="text-red-500">{emailError}</span>}

          <InputField
            label="Your Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Enter Your Message"
            type="text"
          />

          <button
            type="submit"
            className="bg-green-500 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold"
          >
            {loading ? "Sending..." : "Send"}
          </button>
          {confirmation && <p className="text-green-500">{confirmation}</p>}
        </form>
      </motion.div>

      {/* <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div> */}
    </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
