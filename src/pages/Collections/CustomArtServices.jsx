import React from 'react'
import IndigenousFqa, { ColonialFqa, Contemporaryfqa, LandscapeFqA } from '../../components/FQA/Australianfqa'
import { ArtConsultingfqa } from '../../components/FQA/CustomArtServicesfqa'

export default function CustomArtServices() {
  return (
    <>
    <div className="relative ">
    <div
         className="absolute top-0 left-0 w-full h-full bg- bg-center bg-cover"
       />
       <div className="container mx-auto px-6 sm:px-20 py-10 md:py-20 flex flex-col sm:flex-row items-center relative z-10">
         <div className="sm:w-full xl:w-full flex flex-col items-center justify-center py-16 sm:py-0">
           <h1 className="text-3xl xl:text-7xl text-blue-900  text-center">
             Welcome to the Custom Art Services.
           </h1>
 
           <p className="xl:text-lg  tracking-wider text-gray-900 text-center">
             At LuxCraftDecor, we delve into the rich and vibrant world of Australian Art, a category that encompasses the diverse tapestry of Australia's cultural and artistic history. From the ancient narratives of Indigenous Art to the contemporary expressions of modern artists, this section is an ode to the land down under and its artistic evolution.
           </p>
           <div className="flex gap-5">
             <button href="#" className="text-black sm:font-xl uppercase py-3 px- sm:py-4 sm:px-8 rounded-full border border-blue-900 shadow-lg bg-white hover:bg-white mt-8 sm:mt-16">
               Explore Paintings
             </button>
           </div>
         </div>
         </div>
     </div>
 
 
 
   <div class="flex flex-col px-6 py-5 sm:px-20 lg:flex-row">
   <div class="w-full lg:w-1/2 p-4">
     <p class="text-5xl mb-4 text-[#454545] ">Art Consulting Services at LuxCraftDecor:</p>
     <p class="text-lg text-[#676767] ">Welcome to LuxcraftDecor’s Art Consulting Services, where we bridge the gap between your vision and the perfect piece of art to complement it. In the bustling city of Melbourne and beyond, we understand the transformative power of art in both personal and professional spaces. Our bespoke art consulting service is dedicated to helping you find that unique piece that speaks to your style, space, and budget.</p>
  <ArtConsultingfqa/>
   </div>
   <div class="w-full lg:w-1/2 p-4">
     <img src="https://cdn.tatlerasia.com/tatlerasia/i/2023/02/03181402-screenshot-2023-02-03-at-60857-pm_cover_1500x1075.jpg" alt="Image Description" class="w-full h-auto object-cover" />
   </div>
 </div>
 
 
 <div class="flex flex-col px-6 py-5 sm:px-20 lg:flex-row">
 <div class="w-full lg:w-1/2 p-4">
     <img src="https://images.saatchiart.com/saatchi/999525/art/5837329/4907129-HSC00002-7.jpg" alt="Image Description" class="w-full h-auto object-cover" />
   </div>
   <div class="w-full lg:w-1/2 p-4">
     <p class="text-5xl mb-4 text-[#454545] ">Commissioned Artwork at LuxCraftDecor Unleash Creativity, Tailor Art to Your Vision:</p>
     <p class="text-lg text-[#676767] ">At LuxCraftDecor, we believe that art is not just an expression but a conversation. That's why we offer bespoke commissioned artwork services, connecting you with skilled artists who bring your visions to life. Whether it's a piece for your home, a unique gift, or a centrepiece for your corporate space, our commissioned art is about making your dreams tangible.</p>
  <ColonialFqa/>
   </div>
  
 </div>
 
 
 
 
 
 
 
 
 
 </>
  )
}
