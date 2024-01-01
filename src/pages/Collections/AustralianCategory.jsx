import React from 'react'
import IndigenousFqa, { ColonialFqa, Contemporaryfqa, LandscapeFqA } from '../../components/FQA/Australianfqa'

export default function AustralianCategory() {
  return (
    <>
   <div className="relative ">
   <div
        className="absolute top-0 left-0 w-full h-full bg- bg-center bg-cover"
      />
      <div className="container mx-auto px-6 sm:px-20 py-10 md:py-20 flex flex-col sm:flex-row items-center relative z-10">
        <div className="sm:w-full xl:w-full flex flex-col items-center justify-center py-16 sm:py-0">
          <h1 className="text-3xl xl:text-7xl text-blue-900  text-center">
            Welcome to the Heart of Australian Art.
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
    <p class="text-5xl mb-4 text-[#454545] ">Indigenous Art:</p>
    <p class="text-lg text-[#676767] ">The Soul of the Continent Dive into the profound and spiritual realm of Indigenous Art, where every brushstroke tells a story steeped in ancient traditions and lore. This art form, originating tens of thousands of years ago, is a window into the world's oldest continuous culture. Through dot paintings, bark art, and ceremonial sculptures, Indigenous artists narrate the Dreamtime stories and connect the past with the present.</p>
 <IndigenousFqa/>
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
    <p class="text-5xl mb-4 text-[#454545] ">Colonial Art:</p>
    <p class="text-lg text-[#676767] ">A Glimpse into Australia’s Past Explore Colonial Art, where the early European settlers' perspectives meet the raw, uncharted landscapes of Australia. This era reflects a time of exploration and discovery, captured in the lush depictions of the Australian bush, rugged coastlines, and burgeoning townships. Colonial Art is not just a visual record but a narrative of adaptation and encounter between cultures.</p>
 <ColonialFqa/>
  </div>
 
</div>


<div class="flex flex-col px-6 py-5 sm:px-20 lg:flex-row">
  <div class="w-full lg:w-1/2 p-4">
    <p class="text-5xl mb-4 text-[#454545] ">Landscape Art: </p>
    <p class="text-lg text-[#676767] ">The Beauty of Australian Scenery Immerse yourself in the beauty of Australian landscapes through our collection of Landscape Art. From the red deserts of the Outback to the turquoise waters of the Great Barrier Reef, these works capture the essence of Australia's natural splendor. This sub-category celebrates the variety and majesty of Australia's geography, as seen through the eyes of its most talented landscape artists.</p>
 <LandscapeFqA/>
  </div>
  <div class="w-full lg:w-1/2 p-4">
    <img src="https://artstreet.in/cdn/shop/products/819S6GP6yqL._SL1500_883x700.jpg?v=1587653317" alt="Image Description" class="w-full h-auto object-cover" />
  </div>
</div>

<div class="flex flex-col px-6 py-5 sm:px-20 lg:flex-row">
<div class="w-full lg:w-1/2 p-4">
    <img src="https://i.pinimg.com/736x/e8/69/93/e869935e0d239272cafdd47b37149b18.jpg" alt="Image Description" class="w-full h-auto object-cover" />
  </div>
  <div class="w-full lg:w-1/2 p-4">
    <p class="text-5xl mb-4 text-[#454545] ">Contemporary Australian Artists:</p>
    <p class="text-lg text-[#676767] ">A Modern Vision Step into the world of Contemporary Australian Artists, where modern techniques merge with unique Australian themes. This sub-category showcases artists who push boundaries, challenge norms, and create art that resonates with today's diverse, multicultural Australia. From abstract interpretations to avant-garde sculptures, contemporary art in Australia is a dynamic and evolving canvas.</p>
 <Contemporaryfqa/>
  </div>
 
</div>






</>
  )
}
