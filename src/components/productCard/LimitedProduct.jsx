import React from 'react'
export default function LimitedProduct() {

    const images = [
        "https://writingsonthewall.in/cdn/shop/files/Woman-in-Black-Oil-Painting-Writings-On-The-Wall-Oil-Painting_40433134076183.jpg?v=1699477119&width=1445",
        "https://writingsonthewall.in/cdn/shop/files/Woman-in-Black-Oil-Painting-Writings-On-The-Wall-Oil-Painting_40433134076183.jpg?v=1699477119&width=1445",
        "https://writingsonthewall.in/cdn/shop/files/Woman-in-Black-Oil-Painting-Writings-On-The-Wall-Oil-Painting_40433134076183.jpg?v=1699477119&width=1445",
        "https://writingsonthewall.in/cdn/shop/files/Woman-in-Black-Oil-Painting-Writings-On-The-Wall-Oil-Painting_40433134076183.jpg?v=1699477119&width=1445",
        "https://writingsonthewall.in/cdn/shop/files/Woman-in-Black-Oil-Painting-Writings-On-The-Wall-Oil-Painting_40433134076183.jpg?v=1699477119&width=1445",
        "https://writingsonthewall.in/cdn/shop/files/Woman-in-Black-Oil-Painting-Writings-On-The-Wall-Oil-Painting_40433134076183.jpg?v=1699477119&width=1445",
        "https://writingsonthewall.in/cdn/shop/files/Woman-in-Black-Oil-Painting-Writings-On-The-Wall-Oil-Painting_40433134076183.jpg?v=1699477119&width=1445",
        "https://writingsonthewall.in/cdn/shop/files/Woman-in-Black-Oil-Painting-Writings-On-The-Wall-Oil-Painting_40433134076183.jpg?v=1699477119&width=1445",
        "https://writingsonthewall.in/cdn/shop/files/Woman-in-Black-Oil-Painting-Writings-On-The-Wall-Oil-Painting_40433134076183.jpg?v=1699477119&width=1445",
        "https://writingsonthewall.in/cdn/shop/files/Woman-in-Black-Oil-Painting-Writings-On-The-Wall-Oil-Painting_40433134076183.jpg?v=1699477119&width=1445",
    ];
  return (
<div className='bg-rose-800'>
  <div className="w-full pl-4 md:pl-16 pt-5">
    <h1 className="sm:text-3xl text-2xl capitalize font-medium title-font mb-2 text-sky-300">Limited Edition</h1>
    <div className="h-1 w-20 bg-pink-600 rounded"></div>
  </div>

  <div className='flex justify-center items-center py-5 px-5 md:px-10 lg:px-20'>
    <div className='flex flex-wrap justify-center'>
      {images.map((imageUrl, index) => (
        <div key={index} className="relative group">
          <img
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className='w-32  h-32 md:w-48 md:h-48 lg:w-62 lg:h-62 rounded-full mx-1 md:mx-3 lg:mx-4 my-2 transition-transform transform scale-100 group-hover:scale-105'
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">

            <p></p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>



  

  )
}
