import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-900 to-black text-white'>  
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col  justify-center w-full h-full'>
            <div className='pb-8' >
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20 '> 
            Hi, I'm Imane Ouahmane, a passionate Full Stack Developer. My journey in the world of programming began 
            with a deep curiosity and love for creating solutions that make a positive impact. In the past, I have worked 
            on a variety of projects, gaining proficiency in both frontend and backend technologies. On the frontend, I 
            specialize in crafting intuitive and responsive user interfaces using modern frameworks such as React.js. On the 
            backend, I've developed server-side logic, API integration, and database management with technologies like Node.js,
             Express, and MongoDB. My technical skill set includes expertise in HTML, CSS, JavaScript, React.js, Node.js, Express.js,
             MongoDB, and more. I am also well-versed in version control systems like Git and collaborative tools like GitHub.
            </p>
            <br />
            <p className='text-xl'>
            I am passionate about staying updated with the latest industry trends and 
            technologies to deliver cutting-edge solutions. My goal is to contribute to
             projects that challenge me and allow me to continuously grow as a developer.
              Let's build something amazing together! Feel free to reach out for collaboration,
               inquiries, or just to say hello.
            </p>
        </div>
    </div>
  )
}

export default About