import { motion } from "framer-motion";

import { styles } from "../styles";
import { skills } from "../constants";
import SectionWrapper from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";


const SkillCard = ({ index, title, icon }) => (
    // <p>Ankit bose</p>
    <Tilt className='xs:w-[250px] w-full'>
        <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
            <div options={{ max: 45, scale: 1, speed: 450, }}
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
                <img src={icon} alt='web-development' className='w-16 h-16 object-contain' />

                <h3 className='text-white text-[20px] font-bold text-center'>
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

const About = () => {
    return (

        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}> Overview</h2>

            </motion.div>

            <motion.p variants={fadeIn(',', 0.1, 1)} className='mt-4 text-secondary
          text-[17px] max-w-3xl leading-[30px]'>
                I am an IT engineer pursuing Bachelor's of Information Technolog from L.D. College of Engineering and looking forward to encharge my capabilities into an IT firm that could chanellize not only me but also help the organization to reach the new heights of success.

            </motion.p>
            <div className='mt-20 flex flex-wrap gap-8'>
                {skills.map((skill, index) => (
                    <SkillCard key={skill.title} index={index} {...skill} />
                ))}

            </div>
        </>
    )
}

export default SectionWrapper(About, "about");