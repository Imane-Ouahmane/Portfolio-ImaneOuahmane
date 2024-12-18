import { useState } from 'react';
import React from 'react';
import Popup from './Popup'; 
import portfolio from '../assets/portfolio/portfolioimg.jpg';
import homeport from '../assets/portfolio/homeport.jpg';
import aboutport from '../assets/portfolio/aboutport.jpg';
import projectsport from '../assets/portfolio/projectsport.jpg';
import skillsport from '../assets/portfolio/skillsport.jpg';
import contactport from '../assets/portfolio/contactport.jpg';



function Projects() {
  const portfolios = [
    {
      id: 1,
      src: portfolio,
      link: 'https://github.com/Imane-Ouahmane/Portfolio-ImaneOuahmane/tree/main',
    },
    // Add more projects here
  ];

  const redirectToGitHub = (githubLink) => {
    window.location.href = githubLink;
  };

  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };


  return (
    <div name='projects' className='bg-white w-full text-black md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pd-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
          <p className='py-6 '>Check out some of my work right here </p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map(({ id, src, link }) => (
            <div key={id} className='shadow-md shadow-gray-600 bg-black rounded-lg hover:scale-105'>
              <img src={src} alt="" className='rounded-md w-full h-auto' />
              <div className='flex items-center justify-center'>
                <button
                  className='w-1/2 px-6 py-3 m-4 hover:scale-105 bg-gray-800 text-white rounded-md'
                  onClick={openPopup}
                >
                  Demo
                </button>
                <button
                  onClick={() => redirectToGitHub(link)}
                  className='w-1/2 px-6 py-3 m-4 hover:scale-105 bg-gray-800 text-white rounded-md'
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
        {showPopup && (
          <Popup
            images={[ homeport, aboutport, projectsport, skillsport, contactport]}
            onClose={closePopup}
          />
        )}
      </div>
    </div>
  );
}

export default Projects;
