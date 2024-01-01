import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import ReactTyped from "react-typed";

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-white relative z-0"
    >
      <div className="grid grid-cols-1 max-w-screen-lg mx-auto md:flex-row items-center justify-center h-full px-4">
        <div className="md:w-1/2 z-10 mt-20 text-center md:text-left">
          <h2 className="text-4xl sm:text-4xl font-bold text-black mb-4">
            I'm Imane Ouahmane a <br />
            <ReactTyped
              strings={["Full Stack Developer"]}
              typeSpeed={100}
              loop
              className="text-sky-400 "
            />
          </h2>
          <div className="text-gray-500 max-w-md">
            <p>
              Hi! My name is Imane, and I am a full-stack developer with
              experience in building web applications using JavaScript, Node.js,
              Express, MongoDB, React.js ...
            </p>
          </div>
          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300 ">
                <MdOutlineKeyboardArrowRight size={30} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
