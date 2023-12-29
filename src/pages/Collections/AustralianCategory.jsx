import React from 'react'

export default function AustralianCategory() {
  return (
  <div className="container mx-auto px-6 sm:px-12 flex flex-col sm:flex-row items-center relative z-10">
    <div className="sm:w-1/2 xl:w-3/6 flex flex-col items-start py-16 sm:py-0">
        <h1 className="text-6xl xl:text-10xl font-abhaya-libre text-blue-900 font-bold leading-none">Welcome to the Heart of Australian Art.</h1>
      
        <p className="xl:text-base tracking-wider text-gray-700 font-alegraya-sans">At LuxCraftDecor, we delve into the rich and vibrant world of Australian Art, a category that encompasses the diverse tapestry of Australia's cultural and artistic history. From the ancient narratives of Indigenous Art to the contemporary expressions of modern artists, this section is an ode to the land down under and its artistic evolution.</p>
        <a href="#" className="font-montserrat text-white sm:font-xl uppercase py-3 px-6 sm:py-4 sm:px-8 rounded-full shadow-lg bg-green-900 hover:bg-green-800 mt-8 sm:mt-16">Read more</a>
    </div>
    <div className="hidden sm:flex items-center justify-center xl:justify-end w-1/2 xl:w-3/6 py-32">
       <img src="https://img.freepik.com/premium-photo/beautiful-christmas-watercolor-decoration-set-white-background-svg-illustration-collection-art_655090-746995.jpg" alt="" />
    </div>
</div>
  )
}