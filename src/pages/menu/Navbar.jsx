import React, { useContext } from 'react'
import NavLinks from './Navbar/NavLinks'
import myContext from '../../context/data/myContext';

const Menubar = () => {
    const context = useContext(myContext);
    const {mode, searchkey, setSearchkey, toggleMode, cartProductsFromFirestore} = context;
  
    return (
        <>
            <nav className="navbar flex justify-between bg-white">
                <div className="btn-group" >
                    

                <ul className="md:flex hidden uppercase justify-center bg-white h-10 items-center ml-96 ">
          
          <NavLinks />
        </ul>
                </div>
                <div className="relative hidden lg:flex items-center ml-20 mr-20 w-[150px] " >
                       
                       <input
                           type="text"
                           name="searchkey"
                           value={searchkey}
                           onChange={(e) => setSearchkey(e.target.value)}
                           id="searchkey"
                           placeholder="Search "
                           className="px-10 py-2 w-full  border border-gray-300 rounded  focus:w-[700px] focus:border-2 focus:border-blue-400 bg-gray-100  text-base"
                           style={{
                             backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '',
                             color: mode === 'dark' ? 'white' : '',

                           }}/>
                                    
                    <div className=" flex items-center m-[-42px] w-[40px] py-[11px] ">
                           <svg className="w-10 h-5 flex items-center fill-current text-black font-bold" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z" />
                           </svg>
                       </div>
             </div> 
            </nav>
        </>
    )
}

export default Menubar
