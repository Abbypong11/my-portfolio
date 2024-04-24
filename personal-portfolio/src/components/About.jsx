import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            About
          </p>
        </div>

        <p className="text-xl mt-15">
          Since the beginning of my software Development journey, I've been fascinated by the power of technology to bring ideas to life on the web. My journey into web development began with a curiosity-driven exploration of HTML and CSS, and since then, I've immersed myself in learning the latest technologies and best practices to craft engaging online experiences.
        </p>
       

        <br />

        <p className="text-xl">
          Collaboration is at the heart of my process, and I thrive in
          environments where I can work closely with designers, developers, and
          clients to turn ideas into reality. I believe in continuous learning
          and staying up-to-date with industry trends, which drives me to
          constantly expand my skill set and adapt to new challenges
        </p>

        <br />

        <p className="text-xl">
          Beyond coding, I'm passionate about problem-solving, creativity, and
          making a positive impact through technology. Outside of the digital
          realm, you can find me exploring nature, experimenting with new
          recipes in the kitchen, or getting lost in a good book.
        </p>

        <br />

        <p className="text-xl">
          I'm excited to share my projects with you and to continue growing as a
          web developer. Let's collaborate and bring your ideas to life on the
          web!
        </p>
      </div>
    </div>
  );
};

export default About;
