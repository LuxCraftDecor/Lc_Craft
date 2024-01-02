import React from 'react';
import { useState, useEffect } from 'react';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import Watermark from '@uiw/react-watermark';
import image1 from '../../assets/Buddhist Art_Banner1.webp';
import watermarkimg from '../../assets/luxcraft logo_white.png';
import { useNavigate } from 'react-router-dom';

function HeroSection() {
  let slides = [image1];

  return (
    <div style={{ position: 'relative' }}>
      <div className="w-full cursor-pointer m-auto">
        <Carousel slides={slides} />
      </div>
    </div>
  );
}

function Carousel({ slides }) {
  let [current, setCurrent] = useState(0);
  let [isHovered, setIsHovered] = useState(false);
   const navigate =useNavigate();
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
  const handlenavigate =()=>{
    Navigate('/allproduct/budhha')
  }

  return (
    <div
      className="overflow-hidden relative transition-transform ease-out duration-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`flex`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, index) => (
          <div key={index} className="cursor-pointer relative w-full md:w-full h-full transition-opacity ease-out duration-1000">
            {isHovered ? (
              <img src={s} className="w-full h-full" alt={`slide-${index}`} />
            ) : (
              <Watermark image={watermarkimg} height={20}>
                <img src={s} className="w-full h-full" alt={`slide-${index}`} />
              </Watermark>
            )}
            {isHovered && (
              <div className="cursor-pointer absolute top-0 left-0 w-full h-full flex items-center justify-center transition-opacity ease-out duration-1000">
                <button onClick={handlenavigate} className="cursor-pointer text-white text-2xl bg-black bg-opacity-90 p-2 rounded transition-opacity ease-out duration-1000">
                  Shop Now
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl transition-opacity ease-out duration-1000">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full transition-opacity ease-out duration-1000">
        {slides.map((s, i) => (
          <div
            onClick={() => {
              setCurrent(i);
            }}
            key={`circle${i}`}
            className={`rounded-full w-5 h-5 cursor-pointer transition-bg ease-out duration-1000 ${
              i === current ? 'bg-white' : 'bg-gray-1000'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
