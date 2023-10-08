import React from 'react';
import {FaSquareEnvelope, FaSquareGithub, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='max-w-[1240px] py-6 px-4 text-gray-300 mx-auto text-center'>
      <div>
        <h1 className='text-3xl font-bold text-[#e85a4f] mb-8'>Socials</h1>
        <div className='flex justify-center gap-8'>
          <a href='mailto:weijiawu.work@gmail.com' className='icon-link'>
            <FaSquareEnvelope size={30} />
          </a>
          <a href='https://www.linkedin.com/in/weijiawu2004/' className='icon-link'>
            <FaLinkedin size={30} />
          </a>
          <a href='https://www.github.com/weijiawuu' className='icon-link'>
            <FaSquareGithub size={30} />
          </a>
        </div>
        <h1 className='text-sm font-md text-[#e85a4f] mt-8'>Designed and created by Weijia Wu with React and Tailwind CSS</h1>
      </div>
    </div>
  );
};

export default Footer;
