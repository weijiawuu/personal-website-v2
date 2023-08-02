import React from 'react';
import {Typewriter} from 'react-simple-typewriter';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full min-h-screen mx-auto text-center flex flex-col justify-center relative'>
        <p className='text-[#8e8d8a] font-bold p-0.5 text-xl'>
          Hello and welcome to my website
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[#e85a4f]'>
          My name is Weijia Wu
        </h1>
        <div className='flex justify-center items-center text-[#e85a4f] md:text-5xl sm:text-4xl text-xl font-bold py-4'>
          <p className=''>
            I have experience in &nbsp;
          </p>
          <div className='text-[#e98074]'>
            <Typewriter
              words={['C++', 'Python', 'Verilog', 'React', 'MATLAB']}
              cursor
              typeSpeed={130}
              deleteSpeed={120}
              loop
            />
          </div>
        </div>
        <p className='max-w-[600px] text-2xl font-bold mx-auto text-[#d8c3a5]'>Currently studying computer engineering at the University of Michigan</p>
        <a href="/WeijiaWuResumeWebsite.pdf" download>
          <button className='bg-[#8e8d8a] w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-[#eae7dc] hover:bg-red-500 hover:text-white hover:scale-105 transition-all duration-300'>
              Resume
          </button>
        </a>
      </div>

      {/*test 2'>}

      {/* <div className='flex justify-center gap-8 mt-[0px] fixed bottom-0 left-0 w-full py-6 px-4 text-gray-300'>
        <div>
          <div className='flex justify-center gap-8'>
            <a href='https://www.instagram.com' className='icon-link'>
              <FaSquareEnvelope size={30} />
            </a>
            <a href='https://www.linkedin.com/in/weijiawu2004/' className='icon-link'>
              <FaLinkedin size={30} />
            </a>
            <a href='https://www.github.com' className='icon-link'>
              <FaSquareGithub size={30} />
            </a>
          </div>
          <h1 className='text-sm font-md text-[#e85a4f] mt-8'>
            Designed and created by Weijia Wu with React and Tailwind CSS
          </h1>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
