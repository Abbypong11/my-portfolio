import React from "react";

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="h-screen w-full bg-gradient-to-b from-black  to-gray-800 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Portfolio
          </p>
        </div>
        <div>
          <p className="text-xl mt-20">check out some of my work</p>

          <br />

          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
            praesentium temporibus ea corrupti dolor illum? Quis, beatae? Nobis
            velit earum dolores nihil omnis cupiditate incidunt nostrum. Fuga
            tenetur eveniet id!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
