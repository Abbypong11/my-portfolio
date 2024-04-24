import React from "react";
import HeroImage from "../assets/webdev.jpg";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full ">
          <h3 className="text-4xl sm:text-7xl font-bold text-white pt-32 ">
            Hi! <br />
            I'm Abigail
          </h3>
          <p className="text-gray-500 text-xl py-8 max-w-md">
            Passionate about creating engaging and user-friendly web
            experiences. <br />
            As a junior web developer with foundation in both front-end and
            backend development, creating visually stunning websites that
            captivate audiences is my goal.
          </p>
          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <RiArrowRightSLine size={20} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-4xl mx-auto w-2/4 md:w-full px-12"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
