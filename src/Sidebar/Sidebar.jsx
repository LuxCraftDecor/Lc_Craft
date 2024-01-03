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
    <div>
    <section className="flex items-center  flex-col">
      <button
        onClick={toggleFilters}
        className="w-full md:w-40 text-black border mb-5 p-2"
      >
        Filter
      </button>

      {showFilters && (
        <section className=" border-r-2 border-gray-300 flex flex-col items-center overflow-y-auto" id="style-4">
          <Category handleChange={handleChange} />
          <Price handleChange={handleChange} />
          <Orientation handleChange={handleChange} />
          <Colors handleChange={handleChange} />
        </section>
      )}
    </section>
  </div>
  );
};
export default Sidebar;
