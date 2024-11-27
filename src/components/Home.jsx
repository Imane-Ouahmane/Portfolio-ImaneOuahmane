import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import ReactTyped from "react-typed";

function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="text-center md:text-left">
        <h1 className="text-4xl sm:text-4xl font-bold text-black mb-4">
          Hi, I am <br />
          <h2>Imane Ouahmane</h2>
          <ReactTyped
            strings={["a Full Stack Developer"]}
            typeSpeed={100}
            loop
            className="text-sky-400"
          />
        </h1>
        <div className="text-gray-500 text-2xl max-w-md">
          <p>
            My name is Imane, and I am a full-stack developer with experience
            in building web applications using JavaScript, Node.js, Express,
            MongoDB, React.js ...
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
  );
}

export default Home;
