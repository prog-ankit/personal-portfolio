import SectionWrapper from "../hoc";
import { motion } from "framer-motion";

import { styles } from "../styles";
import {  textVariant } from "../utils/motion";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiSolidity,
  SiFirebase,
  SiLaravel,
  SiAndroidstudio,
  SiMysql,
  SiSpringboot,
  SiTailwindcss,
  SiMicrosoftazure,
  SiApachemaven
} from "react-icons/si";
import { FaAws,FaPhp } from "react-icons/fa6";
import { FaSalesforce } from "react-icons/fa";
import { TbBrandFlutter } from "react-icons/tb";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>My Competencies</p>
                <h2 className={styles.sectionHeadText}>Skillset</h2>

      </motion.div>

    <div className="flex flex-wrap justify-center pb-12 my-10">
      <div className="flex flex-col justify-center items-center tech-icons gap-y-4">
        <DiJava className="mx-4 my-4"/>
      </div>
      <div className="flex flex-col justify-center items-center tech-icons">
        <SiSpringboot className="mx-4 my-4"/>
      </div>
      <div className="flex flex-col justify-center items-center tech-icons">
        <TbBrandFlutter className="mx-4 my-4"/>
      </div>
      <div className="flex flex-col justify-center items-center tech-icons">
        <DiNodejs className="mx-4 my-4"/>
      </div>
      <div className="flex flex-col justify-center items-center tech-icons">
        <SiAndroidstudio className="mx-4 my-4"/>
      </div>
      <div className="flex flex-col justify-center items-center tech-icons">
        <DiJavascript1 className="mx-4 my-4"/>
      </div>
      <div className="flex flex-col justify-center items-center tech-icons">
        <DiReact className="mx-4 my-4"/>
      </div>
      <div className="flex flex-col justify-center items-center tech-icons">
        <FaPhp className="mx-4 my-4"/>
      </div>
      <div className="flex flex-col justify-center items-center tech-icons">
        <SiLaravel className="mx-4 my-4"/>
      </div>
      <div className="flex flex-col justify-center items-center tech-icons">
        <DiPython className="mx-4 my-4"/>
      </div>
      <div className="flex flex-col justify-center items-center tech-icons">
        <SiSolidity className="mx-4 my-4"/>
      </div>
      <div className="flex flex-col justify-center items-center tech-icons">
        <DiGit className="mx-4 my-4"/>
      </div>
      <div className="flex flex-col justify-center items-center tech-icons">
        <SiMysql className="mx-4 my-4"/>
      </div>
      <div className="flex flex-col justify-center items-center tech-icons">
        <FaAws className="mx-4 my-4"/>
      </div>
      <div className="flex flex-col justify-center items-center tech-icons">
        <SiFirebase className="mx-4 my-4"/>
      </div>
      <div className="flex flex-col justify-center items-center tech-icons">
        <DiMongodb className="mx-4 my-4"/>
      </div>
      <div className="flex flex-col justify-center items-center tech-icons">
        <SiTailwindcss className="mx-4 my-4"/>
      </div>
      <div className="flex flex-col justify-center items-center tech-icons">
        <SiMicrosoftazure className="mx-4 my-4"/>
      </div>
      <div className="flex flex-col justify-center items-center tech-icons">
        <SiApachemaven className="mx-4 my-4"/>
      </div>
   
      <div className="flex flex-col justify-center items-center tech-icons">
        <FaSalesforce className="mx-4 my-4"/>
      </div>
   
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
