import React from 'react';

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
               <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>About</p> 
            </div>

            <p className='text-xl mt-20'> As a junior web developer, I am dedicated to
            crafting engaging and user-friendly experiences on the web. I
            specialize in front-end development, creating visually stunning
            websites that captivate audiences. .!</p>

            <br />

            <p className='text-xl'>Explore my portfolio to see how I
            transform ideas into interactive realities, and let's collaborate to
            bring your vision to the digital world</p>
        </div>
    </div>
  )
}

export default About;