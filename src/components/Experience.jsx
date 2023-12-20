import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactimg from "../assets/react.png";
import nodejs from "../assets/node.png";
import mongodb from "../assets/mongodb.png";
import expressjs from "../assets/expressjs.png";
import typescript from "../assets/typescript.png";
import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";

function Experience() {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactimg,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: typescript,
      title: "TypeScript",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: nodejs,
      title: "NodeJS",
      style: "shadow-green-300",
    },
    {
      id: 7,
      src: expressjs,
      title: "ExpressJS",
      style: "shadow-yellow-500",
    },
    {
      id: 8,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-300",
    },
    {
      id: 9,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: 10,
      src: tailwind,
      title: "Tailwind ",
      style: "shadow-sky-400",
    },
    {
      id: 11,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-900 to to-black w-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
