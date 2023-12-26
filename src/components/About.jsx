import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaCertificate, FaCode } from 'react-icons/fa';
import { Link } from "react-scroll";

function About() {
  const [option, setOption] = useState('Education');

  const handleOptionClick = (selectedOption) => {
    setOption(selectedOption);
  };

  const renderTimeline = () => {
    if (option === 'Education') {
      return (
        <VerticalTimeline lineColor='#000'>
            <VerticalTimelineElement
              className='vertical-timeline-element--education text-black'
              iconStyle={{ background: 'black', color: '#fff', position: 'absolute', top: '0' }}
              icon={<FaCertificate />}
              date='08/2023 - 12/2023'>
              <h3 className='text-xl font-semibold text-black mb-2'>JobInTech</h3>
              <p className='text-black'>Full Stack MERN Developer</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className='vertical-timeline-element--education text-black'
              iconStyle={{ background: 'black', color: '#fff', position: 'absolute', top: '0' }}
              icon={<FaGraduationCap />}
              date='09/2021 - 07/2023'>
              <h3 className='text-xl font-semibold text-black mb-2'>OFPPT</h3>
              <p className='text-black'>Technician specialized in digital development</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
      );
    } else if (option === 'Experience') {
      return (
        <VerticalTimeline lineColor='#000'>
          <VerticalTimelineElement
              className='vertical-timeline-element--intership text-black'
              iconStyle={{ background: 'black', color: '#fff', position: 'absolute', top: '0' }}
              icon={<FaCode />}
              date='08/2023-12/2023'>
              <h3 className='text-xl font-semibold text-black mb-2'>ARKx Academy</h3>
              <p className='text-black'>MERN Stack Developer Internship</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
      );
    }
  };

  const links = [
    { id: 1, link: 'Education' },
    { id: 2, link: 'Experience' },
  ];

  return (
    <div name='about' className='w-full bg-white text-black'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-black'>About</p>
        </div>
        <div className='flex'>
          {links.map(({ id, link }) => (
            <ul
              key={id}
              className={`px-4 pr-8 cursor-pointer capitalize font-medium text-black hover:scale-125 duration-200 ${
                option === link ? 'border-b-4 border-black' : ''
              }`}
              onClick={() => handleOptionClick(link)}
            >
              {link}
            </ul>
          ))}
        </div>
        <div onClick={() => setOption(!option)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
          {option === 'Education' ? <FaGraduationCap size={30} /> : <FaCode size={30} />}
        </div>
        {renderTimeline()}
      </div>
    </div>
  );
}

export default About;
