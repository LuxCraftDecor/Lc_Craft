import React, { useContext } from 'react';
import IndigenousFqa, { ColonialFqa, Contemporaryfqa, LandscapeFqA } from '../../components/FQA/Australianfqa'
import { AbstractFqa, MinimalFqa, PopArtFqA, UrbanArtfqa } from '../../components/FQA/Modern&contemporaryfqa';
import { Link, useNavigate, useParams } from 'react-router-dom';
import myContext from '../../context/data/myContext';


export default function ModernCategory() {
  const context = useContext(myContext);
  const {product} =context
  const { slink } = useParams();
  const navigate = useNavigate();
  
  const filteredUrbanProducts = product.filter(product => product.subcategory === 'urban-art');
  const UrbanProduct = filteredUrbanProducts.length > 2 ? filteredUrbanProducts[2] : null;
 return (
   
    <>
    <div className="relative ">
    <div
         className="absolute top-0 left-0 w-full h-full bg- bg-center bg-cover"
       />
       <div className="container mx-auto px-6 sm:px-20 py-10 md:py-20 flex flex-col sm:flex-row items-center relative z-10">
         <div className="sm:w-full xl:w-full flex flex-col items-center justify-center py-16 sm:py-0">
           <h1 className="text-3xl xl:text-5xl pb-5 text-blue-900  text-center">
           Modern & Contemporary Art 
           </h1>
 
           <p className="xl:text-lg  tracking-wider text-gray-900 text-center">
           In the dynamic realm of Modern & Contemporary Art, LuxcraftDecor invites you to explore an ever-evolving tapestry of artistic expression. This genre, a melting pot of ideas, techniques, and emotions, captures the essence of the 20th and 21st centuries. Here, art is not just seen; it's experienced.           </p>
           <div className="flex gap-5">
           
             <button  className="text-black sm:font-xl uppercase py-3 px- sm:py-4 sm:px-8 rounded-full border border-blue-900 shadow-lg bg-white hover:bg-white mt-8 sm:mt-16">
               <Link to={`/allproducts/${slink}`}>
               Explore Art
               
               </Link>
             </button>
           </div>
         </div>
         </div>
     </div>
 
 
 
   <div class="flex flex-col px-6 py-5 sm:px-20 lg:flex-row">
   <div class="w-full lg:w-1/2 p-4">
     <p class="text-5xl mb-4 text-[#454545] ">Abstract Art: A Symphony of Forms and Colors</p>
     <p class="text-lg text-[#676767] ">Abstract Art is the heartbeat of modern artistic expression. Liberated from the constraints of traditional representation, it speaks in a language of shapes, colors, forms, and gestural marks. In our collection, each abstract piece is a journey into the artist's mind, offering a unique perspective that transcends literal interpretation.</p>
  <AbstractFqa/>
   </div>
   <div class="w-full lg:w-1/2 p-4">
     <img src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYTGbczm3dJB9NTWiKNppoX3-dbs-Tih7NyfjYL6w7X5pBm-EEYPtyaUznovRrPIXlf5UYv2dV07ZTJvB1KFR3L7-1vVYg=s1600" alt="Image Description" class="w-full h-auto object-cover" />
   </div>
 </div>
 
 
 <div class="flex flex-col px-6 py-5 sm:px-20 lg:flex-row">
 <div class="w-full lg:w-1/2 p-4">
     <img src="https://images.saatchiart.com/saatchi/999525/art/5837329/4907129-HSC00002-7.jpg" alt="Image Description" class="w-full h-auto object-cover" />
   </div>
   <div class="w-full lg:w-1/2 p-4">
     <p class="text-5xl mb-4 text-[#454545] ">Minimalist Art: The Elegance of Simplicity</p>
     <p class="text-lg text-[#676767] ">Minimalist Art strips everything down to its fundamental quality. It's where less is more. Our curated Minimalist Art embodies purity and clarity, emphasizing form, color, and space. Each piece challenges you to find meaning and beauty in simplicity, creating a serene and contemplative environment.</p>
  <MinimalFqa/>
   </div>
  
 </div>
 
 
 <div class="flex flex-col px-6 py-5 sm:px-20 lg:flex-row">
   <div class="w-full lg:w-1/2 p-4">
     <p class="text-5xl mb-4 text-[#454545] ">Pop Art: A Splash of Cultural Vibrancy </p>
     <p class="text-lg text-[#676767] ">Pop Art is a playful and bold reflection of popular culture. From vibrant colors to iconic imagery, it's a style that speaks the language of mass media and consumerism. Our Pop Art collection is a dialogue between art and everyday life, bringing a spirited and approachable element to contemporary art.</p>
  <PopArtFqA/>
   </div>
   <div class="w-full lg:w-1/2 p-4">
     <img src="https://artstreet.in/cdn/shop/products/819S6GP6yqL._SL1500_883x700.jpg?v=1587653317" alt="Image Description" class="w-full h-auto object-cover" />
   </div>
 </div>
 
 <div class="flex flex-col px-6 py-5 sm:px-20 lg:flex-row">
 <div class="w-full lg:w-1/2 p-4">
     <img src={UrbanProduct.imageUrl} alt="Image Description" class="w-full h-auto object-cover" />
   </div>
   <div class="w-full lg:w-1/2 p-4">
     <p class="text-5xl mb-4 text-[#454545] ">Urban Art: The Voice of the Streets</p>
     <p class="text-lg text-[#676767] ">Urban Art, born from street art and graffiti, is the pulse of city life. It's a raw, edgy, and unapologetically modern expression. Our Urban Art selection captures the spirit of urban landscapes, societal trends, and the voice of the youth. It's where art and the contemporary urban experience collide.</p>
     <Link to={`/allproducts/${UrbanProduct.subcategory}`} className='underline text-blue-500'><span>Explore Art</span></Link>
  <UrbanArtfqa/>
   </div>
  
 </div>
 
 
 
 
 
 
 </>
  )
}
