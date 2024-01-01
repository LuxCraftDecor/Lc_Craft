
import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs"; // Import the icons from react-icons

const Accordion = ({ title, answer }) => {
    const [accordionOpen, setAccordionOpen] = useState(false);
  
    return (
      <div className="py-2">
        <button
          onClick={() => setAccordionOpen(!accordionOpen)}
          className="flex justify-between w-full"
        >
          <span>{title}</span>
          {accordionOpen ? <BsDash /> : <BsPlus />} {/* Use the icon components */}
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
            accordionOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">{answer}</div>
        </div>
      </div>
    );
  };
  export default Accordion;