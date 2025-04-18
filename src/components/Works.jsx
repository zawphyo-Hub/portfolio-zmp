import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


const ProjectCard = ({ name, description, tags, techImages, image, project_live_link, source_code_link }) => {

  const handleLiveLink = () => {
    console.log("Live link:", project_live_link);
    if (!project_live_link || project_live_link === "none") {
      toast.info("This website hasn't been deployed yet. Please visit GitHub.");
      return;
    } else {
      window.open(project_live_link, "_blank");
    }
  };
  return (
    <motion.div variants={fadeIn("up", "spring")} >
      <div
        
        className="bg-black p-4 rounded-2xl sm:w-[360px] h-[475px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl border-2 border-white"
          />
          
        </div>
        <div className="mt-5 h-[95px]">
          <h3 className="text-white font-bold text-[20px]">{name}</h3>
          <p className="mt-2 text-white text-[14px]">{description}</p>
        </div>
        
        {/* <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div> */}
        
        <div className="mt-7 flex flex-wrap gap-2.5 ">
          {techImages.map((img, index) => (
            <img key={index} src={img} alt="tech" className="w-[18px] h-[19px] " />
          ))}
        </div>
        
        <br></br>
        <div className=" flex justify-between items-end ">
  
            <div
              onClick={handleLiveLink}
              className="black-gradient border-radius-[6px] flex justify-center items-center cursor-pointer hover:underline transition-colors duration-150"
            > 
             <p className="hover:text-green-400">Visit<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2 text-white group-hover:underline"/></p> 
            </div>

            
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient rounded-full flex justify-center items-center cursor-pointer mr-2 hover:underline transition-colors duration-150"
            >
              <p className="hover:text-green-400">GitHub</p> 
            </div>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience through examples
          of my work. Each project is linked to GitHub repositories and some projects
          have already been deployed in GitHub.
         
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7 ">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
