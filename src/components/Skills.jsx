import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Virtual } from "swiper/modules";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
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

function Skills() {
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
      style: "shadow-yellow-500 ",
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

  // const params = {
  //   spaceBetween: 30,
  //   slidesPerView: 6,
  //   centeredSlides: true,

  //   autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  //   },
  // };

  return (
    <div name="skills" className="bg-white w-full h-auto">
      <div className="max-w-screen-lg mx-auto p-4   text-black">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline ">
            Skills
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Virtual,]}
          // onSwiper={setSwiperRef}
          slidesPerView={6}
          centeredSlides={true}
          spaceBetween={30}
          autoplay={{
            delay: 900,
            disableOnInteraction: false,
            
          }}
          loop={true}
          virtual
          className="py-16"
        >
          {techs.map(({ id, src, title,  }, index) => (
            <SwiperSlide
              key={id}
              virtualIndex={index}
              className={`swiper-slide shadow-md hover:scale-105 duration-500 py-2  rounded-lg flex flex-col items-center`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Skills;

// import React, { useRef, useState } from "react";

// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";

// import "swiper/css/navigation";

// import "./style.css";

// export default function App() {
//   // const [swiperRef, setSwiperRef] = useState(null);
//   // const prependNumber = useRef(1);
//   // Create array with 500 slides
//   const [slides, setSlides] = useState(
//     Array.from({ length: 6 }).map((_, index) => `Slide ${index + 1}`)
//   );

//   return (
//     <>
//       <Swiper
//         modules={[Autoplay, Virtual, Navigation]}
//         // onSwiper={setSwiperRef}
//         slidesPerView={6}
//         centeredSlides={true}
//         spaceBetween={30}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: true,
//         }}
//         loop={true}
//         navigation={true}
//         virtual
//       >
//         {slides.map((slideContent, index) => (
//           <SwiperSlide key={slideContent} virtualIndex={index}>
//             {slideContent}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   );
// }
