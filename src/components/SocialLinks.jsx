import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonFill } from 'react-icons/bs';

function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/imane-ouahmane/',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/Imane-Ouahmane',
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:imaneouahmane202@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonFill size={30} />
        </>
      ),
      href: '/public/Full Stack Devloper.pdf',
      style: 'rounded-br-md',
      download: true,
    },
  ];

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className='flex justify-between  bg-transparent items-center w-40 h-14 p-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 hover:backdrop-blur-xl hover:p-6 '
          >
            <a
              href={href}
              className='flex text-black justify-between items-center w-full'
              download={download}
              target='_blank'
              rel='norereferrer'
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;
