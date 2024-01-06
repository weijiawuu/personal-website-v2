import React, { useState } from 'react';
import Confetti from 'react-confetti';

function About() {
  const [confettiRunning, setConfettiRunning] = useState(false);

  const handlePictureClick = () => {
    setConfettiRunning(true);
    setTimeout(() => setConfettiRunning(false), 3500);
  };

  return (
    <div className="py-40">
      {confettiRunning && <Confetti recycle={false} />}
      <div className="w-full mx-auto px-24 md:grid md:grid-cols-2">
        <div className="md:pl-20">
          <h1 className="text-5xl font-bold text-[#e85a4f] mb-8">About Me</h1>
          <p className="text-3xl text-[#8e8d8a]">
            Hi there! I'm Weijia, a second-year computer engineering student at the University of Michigan. <br /> <br />
            I have a strong interest in computer hardware, chip design, and robotics, but I am also passionate about software development, machine learning, and autonomous control systems. <br /> <br />
            Outside of school, I love watching sports, working out, and playing the piano. I also enjoy travelling with friends and family, as well as spending time outdoors! <br /> <br />
            I am always learning and exploring the latest technologies to improve my skills, and this website was made to showcase
            the projects that I am working on.
          </p>
        </div>
        <div className="md:pl-40">
          <img src="/WeijiaWuSeniorPic.jpg" alt="Weijia" className="rounded-lg shadow-md max-w-full transition duration-300 ease-in-out transform hover:scale-[1.03]" onClick={handlePictureClick} style={{ width: '100%', maxWidth: '500px' }} />
        </div>
      </div>
    </div>
  );
}

export default About;
