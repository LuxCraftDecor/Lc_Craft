import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
const people = [
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // More people...
  ]
function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
      <div>

<div class="flex flex-wrap mb-5">
  <div class="w-full  px-3 mb-6  mx-auto">
    <div class="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] border border-dashed border-blue-600 bg-white m-5">
    
      <div class="flex-auto block py-8 px-9 justify-center ">
        <div>
          <div class=" flex flex-col mb-9 justify-center items-center">
            <h1 class="mb-2 text-[1.75rem] font-semibold text-dark">Our Executive Team</h1>
            <span class="text-[1.15rem] font-medium text-muted"> Meet our talented team, a dynamic group of experts driven by passion and innovation. </span>
          </div>
          <div class="flex flex-wrap lg:space-x-16 w-full justify-center">
            <div class="flex flex-col mr-5 text-center mb-11 ">
            {people.map((person) => (
              <div class="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                <img class="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]" src={person.imageUrl} alt="avarat image"/>
              </div>))}
              <div class="text-center">
                <a href="" class="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Samantha Reynolds</a>
                <span class="block font-medium text-muted">Marketing Manager</span>
              </div>
            </div>
            <div class="flex flex-col mr-5 text-center mb-11 ">
            {people.map((person) => (
              <div class="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                <img class="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]" src={person.imageUrl} alt="avarat image"/>
              </div>))}
              <div class="text-center">
                <a href="javascript:void(0)" class="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Benjamin Martinez</a>
                <span class="block font-medium text-muted">Sales Executive</span>
              </div>
            </div>
            <div class="flex flex-col mr-5 text-center mb-11 ">
            {people.map((person) => (
              <div class="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                <img class="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]" src={person.imageUrl} alt="avarat image"/>
              </div>))}
              <div class="text-center">
                <a href="javascript:void(0)" class="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Emily Turner</a>
                <span class="block font-medium text-muted">Customer Support</span>
              </div>
            </div>
            <div class="flex flex-col mr-5 text-center mb-11 ">
            {people.map((person) => (
              <div class="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                <img class="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]" src={person.imageUrl} alt="avarat image"/>
              </div>))}
              <div class="text-center">
                <a href="javascript:void(0)" class="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Jason Anderson</a>
                <span class="block font-medium text-muted">Development Engineer</span>
              </div>
            </div>
            <div class="flex flex-col mr-5 text-center mb-11 ">
            {people.map((person) => (
              <div class="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                <img class="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]" src={person.imageUrl} alt="avarat image"/>
              </div>))}
              <div class="text-center">
                <a href="javascript:void(0)" class="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Olivia Carter</a>
                <span class="block font-medium text-muted">Creative Director</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>



//         <div className="bg-grey-600 py-24 sm:py-32" >
//         <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
//           <div className="max-w-2xl">
//             <h2 className="text-2xl font-bold tracking-tight text-gray-900  style={{ color: mode === 'dark' ? 'white' : '', }}sm:text-3xl" style={{ color: mode === 'dark' ? 'white' : '', }}>Meet our leadership</h2>
//             <p className="mt-6 text-sm leading-8 text-gray-600" style={{ color: mode === 'dark' ? 'white' : '', }}>
//             Luxcraft owes its success to the passion and expertise of its committed leadership team. Each member of the team brings a unique set of skills and experiences, driven by a shared devotion to art, creativity, and providing an exceptional platform for art enthusiasts. Take a moment to learn more about the individuals who are leading the way.
//             </p>
//           </div>
//           <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
//             {people.map((person) => (
//               <li key={person.name}>
//                 <div className="flex items-center gap-x-6">
//                   <img className="h-16 w-16 rounded-full" src={person.imageU/rl} alt="" />
//                   <div>
//                     <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>{person.name}</h3>
//                     <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
//                   </div>
//                 </div>
//               </li>
              
//             ))}
//             {people.map((person) => (
//               <li key={person.name}>
//                 <div className="flex items-center gap-x-6">
//                   <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
//                   <div>
//                     <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>{person.name}</h3>
//                     <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
//                   </div>
//                 </div>
//               </li>
              
//             ))}


//               {people.map((person) => (
//               <li key={person.name}>
//                 <div className="flex items-center gap-x-6">
//                   <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
//                   <div>
//                     <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>{person.name}</h3>
//                     <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
//                   </div>
//                 </div>
//               </li>
              
//             ))}
//             {people.map((person) => (
//               <li key={person.name}>
//                 <div className="flex items-center gap-x-6">
//                   <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
//                   <div>
//                     <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>{person.name}</h3>
//                     <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
//                   </div>
//                 </div>
//               </li>
              
//             ))}

            
// {people.map((person) => (
//               <li key={person.name}>
//                 <div className="flex items-center gap-x-6">
//                   <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
//                   <div>
//                     <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>{person.name}</h3>
//                     <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
//                   </div>
//                 </div>
//               </li>
              
//             ))}
//             {people.map((person) => (
//               <li key={person.name}>
//                 <div className="flex items-center gap-x-6">
//                   <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
//                   <div>
//                     <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>{person.name}</h3>
//                     <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
//                   </div>
//                 </div>
//               </li>
              
//             ))}
//           </ul>
//         </div>
//       </div>



    )
}

export default Testimonial