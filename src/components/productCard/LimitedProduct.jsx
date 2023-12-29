import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';
import { useNavigate } from 'react-router-dom';

export default function LimitedProduct() {
    const context = useContext(myContext);
    const { mode, product } = context;
    const navigate = useNavigate();
    const firstHandmadePainting = "https://cdn.pixabay.com/photo/2019/12/15/08/14/body-painting-4696539_1280.jpg";
    const secondHandmadePainting = "https://cdn.pixabay.com/photo/2017/11/20/02/00/fantasy-2964231_1280.jpg";
    const thirdHandmadePainting ="https://indianartzone.com/pub/media/catalog/product/a/f/affection_1.jpg"
    const fourthHandmadePainting = "https://cdn.pixabay.com/photo/2017/06/24/02/56/art-2436545_1280.jpg"
    const fifthHandmadePainting = "https://cdn.pixabay.com/photo/2017/07/15/15/50/fantasy-2506830_1280.jpg"
    const sixthHandmadePainting = "https://cdn.pixabay.com/photo/2015/07/15/09/00/man-845847_1280.jpg"
  
    const handlechangehandmade = (clickedHandmadePainting) => {
      navigate(`/allproducts/${clickedHandmadePainting}`)  };
  return (
    <div className="w-[100%] mt-24 " >

  
<div className="w-full relative mb-6 lg:mb-20">
    <div className="relative w-full h-full">
        <div className=" top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center z-1">
        <img src="https://cakeartista.com/wp-content/uploads/2022/11/2-imageedit_4_9972333369.png" alt='bgimage' style={{ width: '600px', height:'70px', objectFit: 'cover', position: 'absolute', zIndex: -1 }}/>

            <h1 className="sm:text-3xl text-2xl uppercase font-medium title-font mb-2 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>
                Limited Edition
            </h1>
        </div>
    </div>
</div>





  <div className='flex justify-center items-center m-20 bg-white pb-5 '>
  <div className="relative  md:space-y-8 flex flex-col p-5 ">

   <div className='flex'>
    <div className='flex   flex-row space-x-8 '>
    <div className='relative overflow-hidden'>
        <img
            className='md:w-64 md:h-72 w-20 h-20  transition-transform transform transform-origin-center duration-1000 hover:scale-125'
            alt=""
            src={firstHandmadePainting}
        />
            <div className="absolute bottom-10 left-0 right-0 flex items-center justify-center text-center  ">
               <p className='text-black bg-white px-10 py-2 text-2xl'> Australian Art </p>
            </div>
         </div>
        <div  className='relative overflow-hidden'>
        <img
        
        className='md:w-64 md:h-72 w-20 h-20  transition-transform transform transform-origin-center duration-1000 hover:scale-125'       
        alt=""
        src={secondHandmadePainting}
      />
      <div className="absolute bottom-10 left-0 right-0 flex items-center justify-center text-center  ">
               <p className='text-black bg-white px-10 py-2 text-2xl'> Australian Art </p>
            </div>
    </div>
    <div className=' relative overflow-hidden'>  
    
    <img
         
         className='md:w-[34rem] md:h-72 w-20 h-20  transition-transform transform transform-origin-center duration-1000 hover:scale-125'       
         alt=""
         src={thirdHandmadePainting}
       />
       <div className="absolute bottom-10 left-0 right-0 flex items-center justify-center text-center  ">
                <p className='text-black bg-white px-10 py-2 text-2xl'> Australian Art </p>
             </div>
    </div>
   
   
    </div>
  

   </div>

   <div className='flex  '>
   
    <div className='flex flex-row space-x-8 '>
    <div className=' relative overflow-hidden'>  
    
    <img
         
         className='md:w-[34rem] md:h-72 w-20 h-20  transition-transform transform transform-origin-center duration-1000 hover:scale-125'       
         alt=""
         src={fourthHandmadePainting}
       />
       <div className="absolute bottom-10 left-0 right-0 flex items-center justify-center text-center  ">
                <p className='text-black bg-white px-10 py-2 text-2xl'> Australian Art </p>
             </div>
     </div>
        <div className='relative overflow-hidden' >
        <img
        
        className='md:w-64 md:h-72 w-20 h-20  transition-transform transform transform-origin-center duration-1000 hover:scale-125'       
        alt=""
        src={fifthHandmadePainting}
      />
      <div className="absolute bottom-10 left-0 right-0 flex items-center justify-center text-center  ">
               <p className='text-black bg-white px-10 py-2 text-2xl'> Australian Art </p>
            </div>
        </div>
        <div  className='relative overflow-hidden'>
        <img
        
        className='md:w-64 md:h-72 w-20 h-20  transition-transform transform transform-origin-center duration-1000 hover:scale-125'       
        alt=""
        src={sixthHandmadePainting}
      />
      <div className="absolute bottom-10 left-0 right-0 flex items-center justify-center text-center  ">
               <p className='text-black bg-white px-10 py-2 text-2xl'> Australian Art </p>
            </div>
    </div>
   
   
    </div>
   

   </div>
  
  </div>
  </div>
  
</div>
  )
}
