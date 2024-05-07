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
          text-[17px] max-w-4xl leading-[35px]'>
                Hi, I'm an IT engineer graduating in 2024, with a diverse skill set in development, architecture, and speech technologies. I have a solid understanding of the Software Development Lifecycle and its practical application in app and web development. I am dedicated to continuous learning, and I consistently bring 100% effort and determination to every project. My goal is to excel in all my endeavors and drive success through hard work and commitment.

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