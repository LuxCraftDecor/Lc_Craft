import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs"; // Import the icons from react-icons

const IndigenousFqa = () => {
  return (
    <div className="py-5">
     <hr className="border-black my-2" />
      <Accordion
        title="Understanding Indigenous Art"
        answer="Indigenous Art is not just a visual experience; it's a voyage into a world rich with history and spirituality. Originating from the diverse Aboriginal and Torres Strait Islander peoples, this art form encompasses a wide range of mediums, including painting, sculpture, wood carving, and weaving. Each artwork is a reflection of the artist's connection to Country, community, and heritage, portraying stories, beliefs, and traditions that have been passed down through generations."
      />
      <hr className="border-black my-2" />
      <Accordion
        title="Cultural Significance and Ethical Sourcing"
        answer="We are committed to ethical sourcing and supporting Indigenous communities. Our Indigenous Art collection not only celebrates the artistic excellence of Indigenous artists but also contributes to the sustainability of their communities. We ensure that the artists and their communities are rightfully acknowledged and compensated for their work."
      />
      <hr className="border-black my-2" />
      <Accordion title="An Invitation to Connect" 
      answer="We invite you to explore this magnificent collection at LuxcraftDecor. Whether you are an art aficionado, a collector, or someone seeking a meaningful connection with Australia's rich cultural heritage, our Indigenous Art collection offers something truly special." />
    </div>
  );
};

export default IndigenousFqa;

export const ColonialFqa = () => {
  return (
    <div className="py-5">
     <hr className="border-black my-2" />
      <Accordion
        title="Understanding Indigenous Art"
        answer="Indigenous Art is not just a visual experience; it's a voyage into a world rich with history and spirituality. Originating from the diverse Aboriginal and Torres Strait Islander peoples, this art form encompasses a wide range of mediums, including painting, sculpture, wood carving, and weaving. Each artwork is a reflection of the artist's connection to Country, community, and heritage, portraying stories, beliefs, and traditions that have been passed down through generations."
      />
      <hr className="border-black my-2" />
      <Accordion
        title="Cultural Significance and Ethical Sourcing"
        answer="We are committed to ethical sourcing and supporting Indigenous communities. Our Indigenous Art collection not only celebrates the artistic excellence of Indigenous artists but also contributes to the sustainability of their communities. We ensure that the artists and their communities are rightfully acknowledged and compensated for their work."
      />
      <hr className="border-black my-2" />
      <Accordion title="An Invitation to Connect" 
      answer="We invite you to explore this magnificent collection at LuxcraftDecor. Whether you are an art aficionado, a collector, or someone seeking a meaningful connection with Australia's rich cultural heritage, our Indigenous Art collection offers something truly special." />
    </div>
  );
};




export const LandscapeFqA = () => {
  return (
    <div className="py-5">
     <hr className="border-black my-2" />
      <Accordion
        title="Understanding Indigenous Art"
        answer="Indigenous Art is not just a visual experience; it's a voyage into a world rich with history and spirituality. Originating from the diverse Aboriginal and Torres Strait Islander peoples, this art form encompasses a wide range of mediums, including painting, sculpture, wood carving, and weaving. Each artwork is a reflection of the artist's connection to Country, community, and heritage, portraying stories, beliefs, and traditions that have been passed down through generations."
      />
      <hr className="border-black my-2" />
      <Accordion
        title="Cultural Significance and Ethical Sourcing"
        answer="We are committed to ethical sourcing and supporting Indigenous communities. Our Indigenous Art collection not only celebrates the artistic excellence of Indigenous artists but also contributes to the sustainability of their communities. We ensure that the artists and their communities are rightfully acknowledged and compensated for their work."
      />
      <hr className="border-black my-2" />
      <Accordion title="An Invitation to Connect" 
      answer="We invite you to explore this magnificent collection at LuxcraftDecor. Whether you are an art aficionado, a collector, or someone seeking a meaningful connection with Australia's rich cultural heritage, our Indigenous Art collection offers something truly special." />
    </div>
  );
};


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
