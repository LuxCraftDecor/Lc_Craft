import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';
import { useNavigate } from 'react-router-dom';
import { IoIosStar } from "react-icons/io";

export default function LimitedProduct() {
    const context = useContext(myContext);
    const { mode, product } = context;
    const navigate = useNavigate();
   
    const handlechangehandmade = (clickedHandmadePainting) => {
      navigate('/allproducts')  };
  return (
    <div  >
    <FetureProduct/>
    <div class='flex flex-col my-8 md:my-24  mx-4 md:mx-8 lg:mx-20 xl:mx-40'>
  <div>
  <div class='mb-10'>
  <h1 class='text-left md:text-left lg:text-left text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#11181f] '>Limited Edition</h1>
</div>

  <div class='flex flex-col md:flex-row'>
    <div class='mb-4 md:mr-3 lg:mr-7'>
      <img class='w-full md:w-72 lg:w-80 xl:w-96' src='https://dotcompatterns.files.wordpress.com/2022/04/ryan-spencer-xkarpkd5lvg-unsplash.jpg?w=1024' alt='Santorini'/>
      <p class='my-4 text-left font-bold underline text-[#od1f3a] '>Learn More</p>
      <p class='text-left text-[#11181f] '>Santorini was ranked the world’s top island by many magazines and travel sites, including the Travel+Leisure Magazine, and the BBC.</p>
    </div>

    <div class='mb-4 md:mr-4 lg:mr-8'>
      <img class='w-full md:w-72 lg:w-80 xl:w-96' src='https://dotcompatterns.files.wordpress.com/2022/04/hello-lightbulb-yb6wfhbkx40-unsplash.jpg?w=1024' alt='Santorini'/>
      <p class='my-4 text-left font-bold underline text-[#od1f3a]'>Learn More</p>
      <p class='text-left text-[#11181f] '>Santorini was ranked the world’s top island by many magazines and travel sites, including the Travel+Leisure Magazine, and the BBC.</p>
    </div>

    <div class='mb-4'>
      <img class='w-full md:w-72 lg:w-80 xl:w-96' src='https://dotcompatterns.files.wordpress.com/2022/04/hello-lightbulb-yc8qqp50bda-unsplash.jpg?w=1024' alt='Santorini'/>
      <p class='my-4 text-left font-bold underline text-[#od1f3a]'>Learn More</p>
      <p class='text-left text-[#11181f] '>Santorini was ranked the world’s top island by many magazines and travel sites, including the Travel+Leisure Magazine, and the BBC.</p>
    </div>
  </div>
  </div>


<div className='py-10 md:py-20 lg:py-32'>
<div className='px-6 md:px-12 lg:px-24 xl:px-40'>
    <h1 className='text-center font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 md:mb-6 text-[#11181f] '>New Arrivals</h1>
    <p className='text-center text-base md:text-lg lg:text-xl xl:text-2xl text-[#11181f] '>Introducing our latest curated ceramics collection, that will bring a touch of artisanal charm to your home. Now available exclusively in our online store.</p>
  </div>
  <div class='flex flex-col md:flex-row py-10'>
    <div class='mb-4 md:mr-3 lg:mr-7'>
      <img class='w-full md:w-72 lg:w-80 xl:w-96' src='https://dotcompatterns.files.wordpress.com/2023/08/pexels-vladimir-gladkov-6213674.jpg' alt='Santorini'/>
    </div>

    <div class='mb-4 md:mr-4 lg:mr-8'>
      <img class='w-full md:w-72 lg:w-80 xl:w-96' src='https://dotcompatterns.files.wordpress.com/2023/08/pexels-vladimir-gladkov-6208154.jpg' alt='Santorini'/>
    </div>

    <div class='mb-4'>
      <img class='w-full md:w-72 lg:w-80 xl:w-96' src='https://dotcompatterns.files.wordpress.com/2023/08/pexels-d0b3d0b0d0bbd0b8d0bdd0b0-d0bbd0b0d181d0b0d0b5d0b2d0b0-11065506resized.jpg' alt='Santorini'/>
    </div>
  </div>
  <div className='flex justify-center items-center'>
  <button onClick={handlechangehandmade} className="text-center text-base md:text-lg  bg-blue-700 text-white px-4 md:px-5 py-2 rounded">Shop Now</button> {/* Added responsive padding and font size */}
  </div>

</div>


<div className='py-20'>
  <div class='mb-10 '>
  <h1 class='text-left md:text-left lg:text-left text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#11181f] '>Popular products</h1>
</div>

  <div class='flex flex-col md:flex-row'>
    <div class='mb-4 md:mr-3 lg:mr-7'>
      <img class='w-full md:w-64 lg:w-72 xl:w-80' src='https://dotcompatterns.files.wordpress.com/2022/04/hi-estudio-mi_vusbrwxk-unsplash.jpg?w=1024' alt='Santorini'/>
      <p class='mt-4 text-left font-bold underline text-[#11181f] '>Learn More</p>
      <p class='text-left text-[#11181f] '>£180.00</p>
    </div>

    <div class='mb-4 md:mr-3 lg:mr-7'>
      <img class='w-full md:w-64 lg:w-72 xl:w-80' src='https://dotcompatterns.files.wordpress.com/2022/04/hi-estudio-4ahg3ua_jdo-unsplash.jpg?w=1024' alt='Santorini'/>
      <p class='mt-4 text-left font-bold underline text-[#11181f] '>Learn More</p>
      <p class='text-left text-[#11181f] '>£180.00</p>
    </div>
    <div class='mb-4 md:mr-3 lg:mr-7'>
      <img class='w-full md:w-64 lg:w-72 xl:w-80' src='https://dotcompatterns.files.wordpress.com/2022/04/hi-estudio-uqwsy7xda6g-unsplash.jpg?w=1024' alt='Santorini'/>
      <p class='mt-4 text-left font-bold underline text-[#11181f] '>Learn More</p>
      <p class='text-left text-[#11181f] '>£180.00</p>
    </div>

    <div class='mb-4'>
      <img class='w-full md:w-64 lg:w-72 xl:w-80' src='https://dotcompatterns.files.wordpress.com/2022/04/hi-estudio-oc2vgwdq7su-unsplash.jpg?w=1024' alt='Santorini'/>
      <p class='mt-4 text-left font-bold underline text-[#11181f] '>Learn More</p>
      <p class='text-left text-[#11181f] '>£180.00</p>
    </div>
  </div>
  </div>





  <div className='py-20'>
  <div class='mb-10'>
  <h1 class='text-left md:text-left lg:text-left text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#11181f] '>Why choose us</h1>
</div>

  <div class='flex flex-col md:flex-row'>
    <div class='mb-4 md:mr-3 lg:mr-7'>
      <img class='w-full md:w-72 lg:w-80 xl:w-96' src='https://dotcompatterns.files.wordpress.com/2023/08/pexels-cottonbro-studio-6739695.jpg?w=640' alt='Santorini'/>
      <p class='my-4 text-left text-[#11181f]  '>Excellence</p>
      <p class='text-left text-[#11181f] '>We create unparalleled experiences that exceed your expectations with a passion for perfection and attention to detail.</p>
    </div>

    <div class='mb-4 md:mr-4 lg:mr-7'>
      <img class='w-full md:w-72 lg:w-80 xl:w-96' src='https://dotcompatterns.files.wordpress.com/2023/08/pexels-cottonbro-studio-6739693.jpg?w=640' alt='Santorini'/>
      <p class='my-4 text-left text-[#11181f] '>Professionalism</p>
      <p class='text-left text-[#11181f] '>We deliver top-notch service, and handle requests with expertise, ensuring your journey is smooth and hassle-free.</p>
    </div>

    <div class='mb-4'>
      <img class='w-full md:w-72 lg:w-80 xl:w-96' src='https://dotcompatterns.files.wordpress.com/2023/08/pexels-cottonbro-studio-6739704.jpg?w=640' alt='Santorini'/>
      <p class='my-4 text-left text-[#11181f] '>Expertise</p>
      <p class='text-left text-[#11181f] '>Our intimate knowledge of the industry allows us to craft a service uniquely tailored to your business needs.</p>
    </div>
  </div>
  </div>



  <div className='py-20'>
  <div class='mb-10'>
  <h1 class='text-left md:text-left lg:text-left text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#11181f] '>What our customers are saying</h1>
</div>

  <div class='flex flex-col md:flex-row'>
    <div class='mb-4 md:mr-3 lg:mr-7'>
      <p class='my-4 text-left text-[#11181f] font-bold '>LIZ S.</p>
      <p class='text-left text-[#11181f] text-sm '>Working with Alisa on my fitness has been great. I always feels like it’s had a thorough workout. I very much appreciate the help and advice. I can’t recommend this place enough. Thank you, Alisa!</p>
      <div className='flex text-xl gap-2 my-5'>
    <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /> <IoIosStar />
    </div>
    </div>

    <div class='mb-4 md:mr-4 lg:mr-7'>
      <p class='my-4 text-left text-[#11181f] font-bold '>MIKE A.</p>
      <p class='text-left text-[#11181f] text-sm'>I’ve been training with Alisa for about 9 month now. The best part about training with her is the nutrition info that Alisa has given me. I’ve learnt so much about what I should be eating.</p>
    
      <div className='flex text-xl gap-2 my-5'>
    <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /> <IoIosStar />
    </div></div>

    <div class='mb-4'>
      <p class='my-4 text-left text-[#11181f] font-bold '>KAREN P.</p>
      <p class='text-left text-[#11181f] text-sm '>I can’t thank her enough for working with me at my level and keeping me motivated. She has dealt with my out of shape and not so young body extremely well. I couldn’t ask for a better instructor.</p>
    <div className='flex text-xl gap-2 my-5'>
    <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /> <IoIosStar />
    </div>
    </div>
  </div>
  </div>


 



</div>

   


  

  
   </div>
  )
}


function FetureProduct() {
  return (
    <div className=" ">
      <div className='flex flex-col my-12 justify-center items-center mx-4 md:mx-32 lg:mx-34'> {/* Added responsive margin */}
        <p className="text-center text-xl font-bold pb-3 md:pb-5">Featured</p> {/* Adjusted padding for smaller screens */}
        <h1 className="text-3xl md:text-5xl text-center pb-3 md:pb-5">“Art Without Borders-Celebrating Diversity, Embracing Uniqueness”</h1> {/* Added responsive font size */}
        <p className="text-center text-base md:text-lg pb-3 md:pb-5">Where Every Piece Tells a Story</p> {/* Added responsive font size and adjusted padding */}
        <button className="text-center text-base md:text-lg mt-2 md:mt-4 bg-blue-700 text-white px-4 md:px-5 py-2 rounded">Shop Now</button> {/* Added responsive padding and font size */}
      </div>
    </div>
  );
}



