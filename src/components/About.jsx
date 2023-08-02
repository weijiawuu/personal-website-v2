import React from 'react';

function About() {
    return (
      <div className="bg-white py-16">
        <div className="w-full mx-auto px-16 md:grid md:grid-cols-2">
          <div className="md:pr-20">
            <h1 className="text-5xl font-bold text-[#e85a4f] mb-8">About Me</h1>
            <p className="text-2xl text-[#8e8d8a]">
              Hi there! I'm Weijia, a second-year computer engineering student at the University of Michigan. <br /> <br />
              I have a strong interest in software and web development, machine learning, and autonomous control systems. <br /> <br />
              I am always learning and exploring the latest technologies to improve my skills, and this website was made to showcase
              the projects that I am working on.
            </p>
          </div>
          <div className="md:pl-12">
            <img src="/WeijiaWuSeniorPic.jpg" alt="Weijia" className="rounded-lg shadow-md max-w-full" style={{ width: '100%', maxWidth: '500px' }} />
          </div>
        </div>
      </div>
    );
  }
  
  export default About;
  
