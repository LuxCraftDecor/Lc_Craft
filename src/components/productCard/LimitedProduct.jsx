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
    <div>
        <div className=" w-full pl-16 pt-5">
            <h1 className="sm:text-3xl text-2xl capitalize font-medium title-font mb-2 text-blue-700">Limited Edition</h1>
            <div className="h-1 w-20 bg-pink-600 rounded"></div>
       </div>


        <div  className=' flex justify-center  items-center py-10 px-20'>
        <div className='flex flex-wrap '>
         
            {images.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt={`Image ${index + 1}`} className='h-52 w-52 rounded-full mx-3 my-2' />
      ))}

     
    </div>
        </div>



    </div>
  )
}
