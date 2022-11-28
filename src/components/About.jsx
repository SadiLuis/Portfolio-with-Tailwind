import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Sadi Rueda, nice to meet you.Let's build something together</p>
            </div>
            <div>
              <p>I'm a developer from Argentina, I've been programming all kind of web applications for more than 1 year.
              I am passionate about the world of technology and all that I can contribute and learn from it, responsibility, discipline and young talent are some of the words that can describe me.
              </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
