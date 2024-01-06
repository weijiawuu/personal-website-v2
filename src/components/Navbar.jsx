import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="border-b-2" style={{ borderColor: '#8e8d8a' }}>
      <div className="flex justify-between items-center h-[80px] max-w-[1600px] mx-auto font-bold text-[#8e8d8a] text-xl">
        <Link to="https://www.linkedin.com/in/weijiawu2004/" className='text-3xl font-bold text-[#8e8d8a] hover:text-[#e85a4f]'>
          Weijia
        </Link>
        <ul className='hidden md:flex'>
          <li className='p-4'>
            <Link to="/" className='hover:text-[#e85a4f]'>Home</Link>
          </li>
          <li className='p-4'>
            <Link to="/about" className='hover:text-[#e85a4f]'>About</Link>
          </li>
          <li className='p-4'>
            <Link to="/projects" className='hover:text-[#e85a4f]'>Projects</Link>
          </li>
          <li className='p-4'>
            <Link to="/resume" className='hover:text-[#e85a4f]'>Resume</Link>
          </li>
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[white] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <h1 className='w-full text-3xl font-bold p-4 border-b border-gray-600'>Pages</h1>
          <li className='p-4 border-b border-gray-600'>
            <Link to="/" className='hover:text-[#e85a4f]'>Home</Link>
          </li>
          <li className='p-4 border-b border-gray-600'>
            <Link to="/about" className='hover:text-[#e85a4f]'>About</Link>
          </li>
          <li className='p-4 border-b border-gray-600'>
            <Link to="/contact" className='hover:text-[#e85a4f]'>Newsletter</Link>
          </li>
          <li className='p-4 border-b border-gray-600'>
            <Link to="/resume" className='hover:text-[#e85a4f]'>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
