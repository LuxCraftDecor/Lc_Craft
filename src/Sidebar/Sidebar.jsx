import Category, { Orientation } from "./Category/Category";
import Price from "./Price/Price";

import Colors from "./Colors/Colors";
import './sidebar.css'
import { useState } from "react";
const Sidebar = ({ handleChange }) => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <>
      <section className="w-full flex  flex-col ">
        <button onClick={toggleFilters} className=" text-black border mb-5 p-2 ">
          Filter 
        </button>

        {showFilters && (
          <section  className=" h-screen  border-r-2 border-gray-300 flex flex-col items-center overflow-y-auto" id="style-4">
            <Category handleChange={handleChange} />
            <Price handleChange={handleChange} />
            <Orientation handleChange={handleChange} />
            <Colors handleChange={handleChange} />
          </section>
        )}
      </section>
    </>
  );
};
export default Sidebar;
