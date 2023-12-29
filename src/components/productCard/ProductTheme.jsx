import React from 'react'
export default function ProductTheme() {

    const images = [
        "https://writingsonthewall.in/cdn/shop/files/Woman-in-Black-Oil-Painting-Writings-On-The-Wall-Oil-Painting_40433134076183.jpg?v=1699477119&width=1445",
        "https://storage.googleapis.com/pai-images/1a475690fdad48a891d9ece14ad8162a.jpeg",

        "https://writingsonthewall.in/cdn/shop/files/Woman-in-Black-Oil-Painting-Writings-On-The-Wall-Oil-Painting_40433134076183.jpg?v=1699477119&width=1445",
        "https://img.freepik.com/premium-vector/abstract-geometric-minimalist-wall-art-composition-golden-geometric-shapes-circles-jugs-palm-leaves-wall-art-collage-composition_574175-778.jpg",

        
        "https://writingsonthewall.in/cdn/shop/files/Woman-in-Black-Oil-Painting-Writings-On-The-Wall-Oil-Painting_40433134076183.jpg?v=1699477119&width=1445",
        "https://indianartzone.com/pub/media/catalog/product/g/e/geometric6.jpg",

        "https://writingsonthewall.in/cdn/shop/files/Woman-in-Black-Oil-Painting-Writings-On-The-Wall-Oil-Painting_40433134076183.jpg?v=1699477119&width=1445",
        "https://i.pinimg.com/originals/28/2a/66/282a6663c1b94211bf5560b79a95522a.jpg",
    ];
    const imageTexts = [
      "Paintings under $100",
      "Decorative ",
      "Text for Image 1",
      "Text for Image 2",
      "Text for Image 1",
      "Text for Image 2",
      "Text for Image 1",
      "Text for Image 2",
    ];
  return (
<div className='bg-white'>
  <div className="w-full flex justify-center items-center mb-6 lg:mb-10">
  <div className="h-1 w-20 bg-black mr-5 rounded"></div>
    <h1 className="sm:text-3xl text-2xl  font-medium title-font mb-2 uppercase text-black">Popular Categories</h1>
    <div className="h-1 w-20 bg-black ml-5 rounded"></div>
  </div>

  <div className='flex justify-center items-center py-5 px-5 md:px-10 lg:px-10'>
    <div className='flex flex-wrap justify-center'>
      {images.map((imageUrl, index) => (
        <div key={index} className="relative group">
          <img
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className='w-32  h-32 md:w-40 md:h-40 lg:w-32 lg:h-32 rounded-full mx-1 md:mx-2 lg:mx-2 my-2 transition-transform transform scale-100 group-hover:scale-105'
          />
           <p className="text-center text-base tracking-wide">{imageTexts[index]}</p>

        
        </div>
      ))}
    </div>
  </div>
</div>



  

  )
}
