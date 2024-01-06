import React from 'react';

const TechBubble = ({ children }) => (
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    {children}
  </span>
);

const WorkingOn = () => {
  return (
    <div className='py-16 bg-dark-blue'>
      <h1 className='text-5xl font-bold text-center mb-16 text-[#e85a4f]'>Projects</h1>
      <div className='px-52 mx-auto grid gap-16 md:grid-cols-2'>

        {/* Project Card 1 */}
        <div className='bg-white rounded-lg shadow-lg border-2' style={{ borderColor: '#8e8d8a' }}>
          <img src="websitePhoto.png" alt="Personal Website" className="w-full h-80 object-cover" />
          <div className='p-8'>
            <h2 className='text-2xl font-bold mb-2'>Personal Website V2</h2>
            <p className='text-gray-600'>My portfolio website, providing more information about me and showcasing my skills and projects.</p>
          </div>
          <div className='flex p-4 border-t border-gray-200 justify-between items-center'>
            <div className='flex flex-wrap'>
              <TechBubble>React</TechBubble>
              <TechBubble>TailwindCSS</TechBubble>
              <TechBubble>HTML/CSS</TechBubble>
              <TechBubble>Javascript</TechBubble>
            </div>
            <a href='https://www.github.com/weijiawuu' className='text-blue-500 hover:underline'>Learn more</a>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className='bg-white rounded-lg shadow-lg border-2' style={{ borderColor: '#8e8d8a' }}>
          <img src="robotpic.jpg" alt="Last Stretch Food Delivery Robot" className="w-full h-80 object-cover" /> {/* Project image */}
          <div className='p-8'>
            <h2 className='text-2xl font-bold mb-2'>Last Stretch Food Delivery Robot</h2>
            <p className='text-gray-600'>Created a robot that could autonomously navigate and drop off food to specified rooms.</p>
          </div>
          <div className='flex p-4 border-t border-gray-200 justify-between items-center'>
            <div className='flex flex-wrap'>
              <TechBubble>Python</TechBubble>
              <TechBubble>Arduino</TechBubble>
              <TechBubble>AutoCAD</TechBubble>
            </div>
            <a href='https://www.github.com/weijiawuu' className='text-blue-500 hover:underline'>Learn more</a>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className='bg-white rounded-lg shadow-lg border-2' style={{ borderColor: '#8e8d8a' }}>
          <img src="trafficlightpic.jpg" alt="Traffic Light Controller" className="w-full h-80 object-cover" /> {/* Project image */}
          <div className='p-8'>
            <h2 className='text-2xl font-bold mb-2'>Traffic Light Controller</h2>
            <p className='text-gray-600'>Used Verilog to develop a simple traffic light controller on the Altera DE2-115 development board, handling turns as well as optimizing wait times.</p>
          </div>
          <div className='flex p-4 border-t border-gray-200 justify-between items-center'>
            <div className='flex flex-wrap'>
              <TechBubble>Verilog</TechBubble>
              <TechBubble>Intel Quartus Prime</TechBubble>
              <TechBubble>ModelSim</TechBubble>
            </div>
            <a href='https://www.github.com/weijiawuu' className='text-blue-500 hover:underline'>Learn more</a>
          </div>
        </div>

        {/* Project Card 4 */}
        <div className='bg-white rounded-lg shadow-lg border-2' style={{ borderColor: '#8e8d8a' }}>
          <img src="piazzapic.png" alt="Piazza Post Classifier" className="w-full h-80 object-cover" /> {/* Project image */}
          <div className='p-8'>
            <h2 className='text-2xl font-bold mb-2'>Piazza Post Classifier</h2>
            <p className='text-gray-600'>Built a Piazza post classifier to intelligently sort Piazza posts into their respective categories using machine learning algorithms.</p>
          </div>
          <div className='flex p-4 border-t border-gray-200 justify-between items-center'>
            <div className='flex flex-wrap'>
              <TechBubble>C++</TechBubble>
              <TechBubble>Machine Learning</TechBubble>
            </div>
            <a href='https://www.github.com/weijiawuu' className='text-blue-500 hover:underline'>Learn more</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingOn;
