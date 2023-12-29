import React from 'react'

export default function GlobalaCategories() {
  return (
    <div>  <div className="container mx-auto px-6 sm:px-12 flex flex-col sm:flex-row items-center relative z-10">
    <div className="sm:w-1/2 xl:w-3/6 flex flex-col items-start py-24 sm:py-0">
        <h1 className="text-6xl xl:text-6xl font-abhaya-libre text-sky-900 font-bold leading-none">Welcome to Global Art Moments at LuxcraftDecor.</h1>
        <h2 className="text-xl xl:text-2xl font-abhaya-libre text-pink-500 uppercase font-bold leading-none tracking-widest -mt-2 mb-6">Discover the World Through Art</h2>
        <p className="xl:text-base tracking-wider text-gray-700 font-alegraya-sans">At LuxcraftDecor, our "Global Art Moments" collection is an expedition into the vast and varied realms of art from across the world. This category is a celebration of diverse cultures, histories, and artistic expressions. Here, we invite you to explore and connect with the global art community through our curated selection.</p>
        <div className=' flex gap-5'>
        <button href="#" className=" text-black sm:font-xl uppercase py-3 px- sm:py-4 sm:px-8 rounded-full border border-blue-900 shadow-lg bg-white hover:bg-white mt-8 sm:mt-16">Explore Paintings
       
        </button>

      </div>    </div>
    <div className="hidden sm:flex items-center justify-center xl:justify-end w-1/2 xl:w-3/6 py-32">
       <img src="https://www.imagella.com/cdn/shop/products/a3e86b7903db1dddc0d038243255bb22.jpg?v=1692666321" alt="" />
    </div>
</div>
</div>
  )
}
