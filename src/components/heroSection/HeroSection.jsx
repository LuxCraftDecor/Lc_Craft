import React from 'react';
import { useState, useEffect } from "react";
import {BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill} from "react-icons/bs";
import image1 from '../../assets/Buddhist Art_Banner1.webp'
import Watermark from '@uiw/react-watermark';
import watermarkimg from '../../assets/luxcraft logo_white.png'
function HeroSection() {

  let slides = [
   image1
  ];


  return (
  <div style={{ position: 'relative' }}>
  {/* <img src={backgroundImage} alt='bgimage' style={{ width: '100%', height:'450px', objectFit: 'cover', position: 'absolute', zIndex: -1 }}/> */}
    <div className="w-[100%]  m-auto">
    <Carousel slides={slides}   />
  </div>
  </div>
  );
}

export default HeroSection;


function Carousel({ slides }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };


  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [current]);

  return (<>
    <div className="overflow-hidden relative ">
      <Watermark 
      image={watermarkimg} height={20} 
      >
      <div
        className={`flex transition ease-out duration-500`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, index) => (
          <img key={index} src={s} className="w-[100%] md:w-[100%] h-[100%] " alt={`slide-${index}`} />
        ))}
        
      </div>
      </Watermark>
      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>     
    </div>
    </>
  );
}
