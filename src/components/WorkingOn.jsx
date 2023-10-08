import React from 'react';

const WorkingOn = () => {
  return (
    <div className='py-16 bg-white h-[620px]'>
      <h1 className='text-3xl font-bold text-center mb-8 mt-16 text-[#e85a4f]'>What I'm Working On</h1>
      <div className='max-w-[1240px] mx-auto grid gap-16 lg:grid-cols-3 mb-16'>
        <div className='bg-[#eae7dc] p-6 rounded-lg shadow-md hover:scale-105 transition duration-300'>
          <h2 className='text-2xl font-bold mb-2 text-[#e85a4f]'>Website</h2>
          <p className='text-[#8e8d8a]'>I am currently working on my personal site, making updates and changes frequently and adding information about myself. I have already revamped this site twice to add in the newest technologies such as React and Tailwind CSS</p>
        </div>
        <div className='bg-[#eae7dc] p-6 rounded-lg shadow-md hover:scale-105 transition duration-300'>
          <h2 className='text-2xl font-bold mb-2 text-[#e85a4f]'>App</h2>
          <p className='text-[#8e8d8a]'>I am building my own webapp with the MERN stack, to familiarize myself with software engineering and learn the newest technologies.</p>
        </div>
        <div className='bg-[#eae7dc] p-6 rounded-lg shadow-md hover:scale-105 transition duration-300'>
          <h2 className='text-2xl font-bold mb-2 text-[#e85a4f]'>Game</h2>
          <p className='text-[#8e8d8a]'>I am building a bot/api to track statistics and personal improvement for one of my favorite online games. This is a WIP and could be changed to a weather API or other.</p>
        </div>
      </div>
    </div>
  );
};

export default WorkingOn;
