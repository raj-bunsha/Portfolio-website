import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  
  return (
    <section className={`relative w-full h-screen py-20 flex-wrap`}>
        <div className="flex flex-wrap h-full">
            <div className="flex flex-col text-center items-center justify-center w-full md:w-1/2 md:h-full">
                <h1 className={`${styles.heroHeadText} text-white`}>
                    Hi, I'm <span className='text-[#915EFF]'>RAJ</span>
                </h1>
                <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                    I develop Games, User <br className='sm:block hidden' />
                    Interfaces and Web Applications
                </p>
            </div>
            <div className="w-full md:w-1/2 h-full">
                <ComputersCanvas />
            </div>
        </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

    </section>
  );
};

export default Hero;
