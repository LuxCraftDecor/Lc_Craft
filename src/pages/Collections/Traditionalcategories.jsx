import React from 'react';
import { BaroqueStylefqa, ClassicRealismfqa, Impressionismfqa, Renaissancefqa } from '../../components/FQA/Traditionalfqa';


export default function Traditionalcategories() {
  return (
    <>
    <div className="relative ">
    <div
         className="absolute top-0 left-0 w-full h-full bg- bg-center bg-cover"
       />
       <div className="container mx-auto px-6 sm:px-20 py-10 md:py-20 flex flex-col sm:flex-row items-center relative z-10">
         <div className="sm:w-full xl:w-full flex flex-col items-center justify-center py-16 sm:py-0">
           <h1 className="text-2xl xl:text-6xl text-blue-900  text-center">
           Welcome to the World of Traditional Art at LuxcraftDecor
           </h1>
           <p className='text-lg xl:text-xl text-lime-500  text-center'>Explore the Timeless Elegance of Traditional Art</p>
 
           <p className="xl:text-lg  tracking-wider text-gray-900 text-center">
           Traditional art, a celebration of historical styles and techniques, stands as a testament to the enduring legacy of artistic expression. In this world, each brushstroke carries the weight of history, and every color palette tells a story. At LuxcraftDecor, we invite you on a journey through the ages, where the past's artistic marvels come alive.           </p>
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
     <img src="https://images.saatchiart.com/saatchi/999525/art/5837329/4907129-HSC00002-7.jpg" alt="Image Description" class="w-full h-auto object-cover" />
   </div>
   <div class="w-full lg:w-1/2 p-4">
     <p class="text-5xl mb-4 text-[#454545] ">Baroque Style: The Dance of Drama and Grandeur</p>
     <p class="text-lg text-[#676767] ">The Baroque style, known for its exuberance, invites you to a world where art dances with drama. This style plays with intense contrasts and grandeur, creating a sensory feast. Our Baroque collection is a gateway to an era where art was not just an aesthetic choice but an emotional journey, full of energy and movement.</p>
  <BaroqueStylefqa/>
   </div>
  
 </div>
 
   <div class="flex flex-col px-6 py-5 sm:px-20 lg:flex-row">
   <div class="w-full lg:w-1/2 p-4">
     <p class="text-5xl mb-4 text-[#454545] ">"Embrace the Legacy of Art with Classical Realism - A Journey Through Timeless Beauty"</p>
     <p class="text-lg text-[#676767] ">In the realm of Classical Realism, art transcends time. Born from the ashes of the Renaissance, this style embraces the pursuit of beauty and truth. Our collection showcases meticulous attention to detail and a profound respect for the natural world. Here, art isn't just seen; it's experienced, connecting you to a time where mastery of form and light reigned supreme.</p>
  <ClassicRealismfqa/>
   </div>
   <div class="w-full lg:w-1/2 p-4">
     <img src="https://cdn.tatlerasia.com/tatlerasia/i/2023/02/03181402-screenshot-2023-02-03-at-60857-pm_cover_1500x1075.jpg" alt="Image Description" class="w-full h-auto object-cover" />
   </div>
 </div>
 
 <div class="flex flex-col px-6 py-5 sm:px-20 lg:flex-row">
 <div class="w-full lg:w-1/2 p-4">
     <img src="https://i.pinimg.com/736x/e8/69/93/e869935e0d239272cafdd47b37149b18.jpg" alt="Image Description" class="w-full h-auto object-cover" />
   </div>
   <div class="w-full lg:w-1/2 p-4">
     <p class="text-5xl mb-4 text-[#454545] ">Renaissance Inspired: The Dawn of Artistic Awakening</p>
     <p class="text-lg text-[#676767] ">Renaissance-inspired art marks the awakening of the cultural world. It is a celebration of humanism, where art and intellect intertwine. Our collection echoes the Renaissance spirit, showcasing works that are rich in perspective, anatomy, and human emotion, connecting you to an era of profound transformation.</p>
  <Renaissancefqa/>
   </div>
  
 </div>

 <div class="flex flex-col px-6 py-5 sm:px-20 lg:flex-row">
   <div class="w-full lg:w-1/2 p-4">
     <p class="text-5xl mb-4 text-[#454545] ">Impressionism: A Symphony of Light and Color</p>
     <p class="text-lg text-[#676767] ">Impressionism, a revolutionary art form, breaks free from the constraints of traditional techniques. It's where light and color perform a symphony on canvas, capturing moments with a freshness that's almost ethereal. Our Impressionist pieces are windows to fleeting times, encapsulating the essence of a moment with every spontaneous brushstroke.</p>
  <Impressionismfqa/>
   </div>
   <div class="w-full lg:w-1/2 p-4">
     <img src="https://artstreet.in/cdn/shop/products/819S6GP6yqL._SL1500_883x700.jpg?v=1587653317" alt="Image Description" class="w-full h-auto object-cover" />
   </div>
 </div>
 

 
 
 
 
 
 
 </>
  )
}
