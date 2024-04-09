import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div
      name="skills"
      className="h-screen w-full bg-gradient-to-b from-gray-800  to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
        >
          <div className="w-full lgl:w-1/2">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
                Skills
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="overflow-x-hidden">
                <p className="text-sm uppercase font-medium">React</p>
                <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                  <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  >
                    <span className="absolute -top-7 right-0">60%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-sm uppercase font-medium">HTML 5</p>
                <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                  <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  >
                    <span className="absolute -top-7 right-0">90%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-sm uppercase font-medium">CSS 3</p>
                <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                  <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  >
                    <span className="absolute -top-7 right-0">60%%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-sm uppercase font-medium">Tailwind CSS</p>
                <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                  <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  >
                    <span className="absolute -top-7 right-0">75%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-sm uppercase font-medium">JAVASCRIPT</p>
                <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                  <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[55%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  >
                    <span className="absolute -top-7 right-0">55%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-sm uppercase font-medium">GITHUB</p>
                <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                  <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  >
                    <span className="absolute -top-7 right-0">70%</span>
                  </motion.span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
