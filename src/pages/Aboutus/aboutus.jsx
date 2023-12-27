import React from 'react'
import Layout from '../../components/layout/Layout'

export default function Aboutus() {

  const stats = [
    { name: 'Offices worldwide', value: '2' },
    { name: 'Total Collection', value: '1000+' },
    { name: 'offices', value: '2' },
    { name: 'Total Collection', value: '1000+' },
  
  ]
  return (
    <Layout>
          <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      {/* <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      /> */}
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#aa0694] to-[#770aaa] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>


     <div className='flex flex-col space-y-40'>


     <div className="mx-auto lg:flex lg:space-x-20 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 px-6">
          <h2 className="text-4xl font-bold tracking-wide lg:mb-10 text-white sm:text-6xl">About us</h2>
          <p className="mt-6 text-xl leading-8  text-justify indent-10 text-gray-300">
          Step into the world of Luxcraftdecor, where artistic brilliance meets the epitome of elegance. From the breathtaking landscapes of Australia and New Zealand, we curate an exclusive range of paintings that perfectly capture the essence of the region's beauty. Our mission is to offer you a unique collection of paintings that enhance your space's aesthetics and reflect your identity. 
          </p>
        </div>

        <div className="flex flex-wrap justify-center">
        <div className="w-6/12 sm:w-10/12 px-4">
          <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
        </div>
      </div>
     
      </div>



      <div className="mx-auto lg:flex lg:space-x-20 max-w-7xl px-6 lg:px-8">

        <div className="">
          <div className="w-6/12 sm:w-10/12 ">
            <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-3-800x800.jpg" alt="..." className="shadow-lg rounded max-w-full h-auto align-middle border-none" />
          </div>
        </div>
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="mt-6 text-xl leading-8 text-justify indent-20 text-gray-300">
            Our collection is a testament to the rich cultural heritage and contemporary creativity found in Australia and New Zealand. Each painting in our collection is handpicked for its quality, uniqueness, and ability to bring a touch of Australasian charm into your living or working space. Our collaboration with some of the region's most talented and visionary artists ensures the creation of timeless and modern artworks that resonate with your taste and preferences.             </p>
          </div>

  

     </div>





     <div className="mx-auto  lg:flex lg:space-x-20 max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0 px-6">
      <div >
          <p className="mt-6 text-lg leading-8   text-justify indent-20  text-gray-300">
          At Luxcraftdecor, we promise you the highest quality and customer satisfaction standards. Our team of experts is dedicated to delivering an exceptional service experience that makes every interaction with us as delightful and satisfying as the art we offer. By choosing Luxcraftdecor, you are not just buying a painting but supporting the local art community and contributing to the flourishing of regional art. Join us in this artistic journey and let Luxcraftdecor bring a piece of Australia and New Zealand into your life. Explore our collection today and find the perfect piece that tells your story. Luxcraftdecor - Where every painting tells a story.          </p>
        </div>
       
      </div>
        
      <div className="flex flex-wrap justify-center">
        <div className="w-6/12 sm:w-10/12 px-4">
          <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
        </div>
      </div>
      </div>


      
     </div>



     <div className="mt-20 lg:flex  lg:justify-center ">
        
        <dl className="mt-16 grid grid-cols-1 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4 ">
          {stats.map((stat) => (
            <div key={stat.name} className="flex flex-col-reverse border rounded-md border-gray-700	 p-10">
              <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>





    </Layout>
  )
}
