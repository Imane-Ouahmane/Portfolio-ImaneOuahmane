import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaCertificate, FaCode } from 'react-icons/fa';

function About() {
  return (
    <div name='about' className='w-full  bg-gradient-to-b from-gray-900 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-white'>About</p>
        </div> 
        <VerticalTimeline lineColor='#fff'>
          <VerticalTimelineElement
            className='vertical-timeline-element--education text-white'
            iconStyle={{ background: 'black', color: '#fff', position: 'absolute', top: '0' }}
            icon={<FaGraduationCap />}
            date='2021-2023'>
            <h3 className='text-xl font-semibold text-black mb-2'>Education</h3>
            <p className='text-black'>Technician specialized in digital development</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className='vertical-timeline-element--education text-white'
            iconStyle={{ background: 'black', color: '#fff', position: 'absolute', top: '0' }}
            icon={<FaCertificate />}
            date='08/2023-12/2023'>
            <h3 className='text-xl font-semibold text-black mb-2'>JobInTech</h3>
            <p className='text-black'>Full Stack MERN Developer</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className='vertical-timeline-element--intership text-white'
            iconStyle={{ background: 'black', color: '#fff', position: 'absolute', top: '0' }}
            icon={<FaCode />}
            date='08/2023-12/2023'>
            <h3 className='text-xl font-semibold text-black mb-2'>ARKx Academy</h3>
            <p className='text-black'>MERN Stack Developer Internship</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default About;
