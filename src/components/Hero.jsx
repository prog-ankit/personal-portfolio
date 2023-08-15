import { motion } from "framer-motion";
import { styles } from "../styles";

import ComputersCanvas from "./canvas/Computers";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Hero = () => {
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Ankit Bose", "Blockchain Enthusiast.", "Cloud Certified.", "Developer."], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 200,
            backSpeed: 100,
            backDelay: 200,
            loop: true

        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section className="relative w-full h-screen">
            <div
                className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
                <div className='flex flex-col justify-center items-center'>
                    <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
                    <div className='w-1 sm:h-80 h-60 violet-gradient' />
                </div>
                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>Hi👋, I'm <span ref={el} className="text-[#915EFF]">
                        Ankit Bose
                    </span></h1>
                    <p className={`${styles.heroSubText} text-white-100`}>
                        Exploring the Tech World💻 & Survival Prepping🎇
                    </p>
                    <div className="social">
                        <a href="https://www.linkedin.com/in/ankit-bose-5356441b2/" target="_blank"><i className="ri-linkedin-box-fill"></i></a>
                        <a href="https://www.instagram.com/ankit._.2310/" target="_blank"><i className="ri-instagram-fill"></i></a>
                        <a href="https://twitter.com/AnkitBo15047729" target="_blank"><i className="ri-twitter-fill"></i></a>
                        <a href="https://github.com/prog-ankit/" target="_blank"><i className="ri-github-fill"></i></a>
                    </div>
                    <div className="main-btn">
                        <a href="https://drive.google.com/file/d/19wI8C_ZzBQl7RyqypOC1BmAZYwu2KVql/view?usp=sharing" target="_blank" className="btn">Download CV</a>
                    </div>
                </div>

            </div>

            {/* <ComputersCanvas /> */}
            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <a href="#about">
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                        <motion.div animate={{ y: [0, 24, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }} className="w-3 h-3 rounded-full bg-secondary mb-1" />
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Hero
