import React from 'react';
import portfolio from '../assets/portfolio/portfoimg.jpg';

function Projects() {
  const portfolios = [
    {
      id: 1,
      src: portfolio,
    },

    // Add more projects here
  ];

  return (
     <div name='projects' className='bg-white w-full text-black md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pd-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
          <p className='py-6 '>Check out some of my work right here </p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map(({ id, src }) => (
            <div key={id} className='shadow-md shadow-gray-600 bg-black rounded-lg hover:scale-105'>
              <img src={src} alt="" className='rounded-md w-full h-auto' />
              <div className='flex items-center justify-center'>
                <button className='w-1/2 px-6 py-3 m-4 hover:scale-105 bg-gray-800 text-white rounded-md'>
                  Demo
                </button>
                <button className='w-1/2 px-6 py-3 m-4 hover:scale-105 bg-gray-800 text-white rounded-md'>
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
