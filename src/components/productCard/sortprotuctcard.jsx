import React from 'react';
import { useState, useContext } from 'react';
import myContext from '../../context/data/myContext';
import { useNavigate } from 'react-router-dom';

export default function Sortprotuctcard() {
  const context = useContext(myContext);
  const { mode, product } = context;
  const navigate = useNavigate();

  const HandmadePaintings = product
    .filter((item) => item.productType === 'Handmade Painting')
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 8);

  const handlechangehandmade = (clickedHandmadePainting) => {
    navigate(`/allproducts/${clickedHandmadePainting}`);
  };

  return (
    <div className="w-full bg-white pb-5">
       <div className="w-full flex justify-center items-center mb-6 lg:mb-10">
  <div className="h-1 w-20 bg-black mr-5 rounded"></div>
    <h1 className="sm:text-3xl text-2xl  font-medium title-font mb-2 uppercase text-black">Handmade paintings</h1>
    <div className="h-1 w-20 bg-black ml-5 rounded"></div>
  </div>
      <div className="flex justify-center items-center m-4 md:m-6 lg:m-10">
        <div className="flex flex-wrap">
          {HandmadePaintings.map((handmadePaintings, index) => (
            <div key={handmadePaintings.id} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4 px-2 py-5">
              <div className="border border-[#e8e4e4] rounded overflow-hidden p-5">
                <img
                  className="w-full h-auto object-cover cursor-pointer"
                  alt={handmadePaintings.productType}
                  src={handmadePaintings.imageUrl}
                  onClick={() => handlechangehandmade(handmadePaintings.productType)}
                />
                <div className=" flex flex-col justify-center items-center space-y-5 ">
                  <h1 className='text-base font-thin	 text-[#373c41]'>{handmadePaintings.title}</h1>
                  <p className="text-base font-thin	 text-[#373c41]">${handmadePaintings.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
