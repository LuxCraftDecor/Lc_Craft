import React from 'react';
import { useState, useContext } from 'react';
import myContext from '../../context/data/myContext';
import style from './sortproduct.module.css';

export default function Sortprotuctcard() {
  const context = useContext(myContext);
  const { mode, product } = context;
  const handmadePaintings = product.filter((item) => item.productType === 'Handmade Painting');
  const firstHandmadePainting = handmadePaintings.length > 0 ? handmadePaintings[0] : null;
  const secondHandmadePainting = handmadePaintings.length > 1 ? handmadePaintings[1] : null;
  const thirdHandmadePainting = handmadePaintings.length > 2 ? handmadePaintings[2] : null;
  const fourthHandmadePainting = handmadePaintings.length > 3 ? handmadePaintings[3] : null;
  const fifthHandmadePainting = handmadePaintings.length > 4 ? handmadePaintings[4] : null;
  const sixthHandmadePainting = handmadePaintings.length > 5 ? handmadePaintings[5] : null;

  const handlechangehandmade = () => {
    // Your handling logic for the images
  };

  return (
    <div className="w-[100%] flex justify-center bg-white	" >
      <h1>SHOP HANDMADE PAINTINGS</h1>
      <div className="relative w-[784px] h-[780px] bg-red-700 pt-10">
        {firstHandmadePainting && (
          <img
            key={firstHandmadePainting.id}
            className="absolute w-[142px] h-[209px] top-[70px] left-[90px] object-cover"        
            alt={firstHandmadePainting.productType}
            src={firstHandmadePainting.imageUrl}
            onClick={handlechangehandmade}
          />
        )}
        {secondHandmadePainting && (
          <img
            key={secondHandmadePainting.id}
            className="absolute w-[142px] h-[209px] top-[71px] left-[251px] object-cover"         
               alt={secondHandmadePainting.productType}
            src={secondHandmadePainting.imageUrl}
            onClick={handlechangehandmade}
          />
        )}
        {thirdHandmadePainting && (
          <img
            key={thirdHandmadePainting.id}
            className="absolute w-[142px] h-[209px] top-[513px] left-[419px] object-cover"          
              alt={thirdHandmadePainting.productType}
            src={thirdHandmadePainting.imageUrl}
            onClick={handlechangehandmade}
          />
        )}
        {fourthHandmadePainting && (
          <img
            key={fourthHandmadePainting.id}
            className="absolute w-[142px] h-[209px] top-[514px] left-[576px] object-cover"           
             alt={fourthHandmadePainting.productType}
            src={fourthHandmadePainting.imageUrl}
            onClick={handlechangehandmade}
          />
        )}
        {fifthHandmadePainting && (
          <img
            key={fifthHandmadePainting.id}
            className="absolute w-[304px] h-[416px] top-[71px] left-[414px] object-cover"           
             alt={fifthHandmadePainting.productType}
            src={fifthHandmadePainting.imageUrl}
            onClick={handlechangehandmade}
          />
        )}
        {sixthHandmadePainting && (
          <img
            key={sixthHandmadePainting.id}
            className="absolute w-[303px] h-[416px] top-[306px] left-[90px] object-cover"           
             alt={sixthHandmadePainting.productType}
            src={sixthHandmadePainting.imageUrl}
            onClick={handlechangehandmade}
          />
        )}
      </div>
    </div>
  );
}
