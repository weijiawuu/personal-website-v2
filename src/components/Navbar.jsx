import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="border-b-4" style={{ borderColor: '#8e8d8a', backgroundColor: 'white' }}>
      <div className="flex justify-between items-center h-[80px] max-w-[1600px] mx-auto font-bold text-[#8e8d8a] text-xl">
        <Link to="https://www.linkedin.com/in/weijiawuwork/" className='text-3xl font-bold text-[#8e8d8a] hover:text-[#e85a4f]'>
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
      </div>
    </div>
  );
};

export default Navbar;
