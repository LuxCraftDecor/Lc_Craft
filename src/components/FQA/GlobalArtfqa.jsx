import React from "react";
import Accordion from "./Accodian";

export const AficanArtFqa = () => {
  return (
    <div className="py-5">
     <hr className="border-black my-2" />
      <Accordion
        title="What is African Art? "
        answer="African Art is not just a style; it's a diverse fusion of traditions, beliefs, and histories. It encompasses a range of mediums, including sculpture, painting, textiles, and more. Traditionally, African art is deeply intertwined with social and cultural practices, often serving as an expression of community values and histories. "
      />
      <hr className="border-black my-2" />
      <Accordion
        title="Connect with African Heritage"
        answer="Whether you're an avid art collector or new to the world of African art, our collection offers a window into the soul of Africa. Enhance your space with pieces that are more than just visually stunning; they're carriers of history and emotion."
      />
      <hr className="border-black my-2" />
      <Accordion title="Our Collection" 
       answer={ <>
        <ul>
          <li><span className="font-bold">Sculptures:</span>Discover the intricate beauty of African sculptures, ranging from traditional wooden figures to contemporary abstract works.</li>
          <li><span className="font-bold">Textiles: </span>Explore a world of color with our collection of African textiles, each piece a testament to the continent's rich tradition of fabric art. </li>
          <li><span className="font-bold">Paintings: </span>: From bold, expressive canvases to subtle, narrative-driven works, our paintings bring the spirit of Africa into your home. </li>
          <li><span className="font-bold">Mixed Media: </span>Experience the innovative spirit of African artists through mixed media art that combines traditional techniques with modern perspectives.</li>
        </ul>
      </>}
/>
</div>
  );
};



export const AsianArtFqa = () => {
  return (
    <div className="py-5">
     <hr className="border-black my-2" />
      <Accordion
        title="A Journey Through Centuries"
        answer="Asian art is not just a category; it's a narrative spanning thousands of years, encompassing a variety of cultures, religions, and philosophies. From the delicate brush strokes of Chinese calligraphy to the vibrant patterns of Indian textiles, every piece tells a story."
      />
      <hr className="border-black my-2" />
      <Accordion
        title="Cultural Significance"
        answer="In Asian art, every color, shape, and motif has a meaning. Dragons symbolize power in Chinese culture, while the lotus flower represents purity in Buddhist art. Our collection offers a window into these cultural symbols, inviting you to explore their meanings."
      />
      <hr className="border-black my-2" />
      <Accordion title="A Commitment to Authenticity" 
      answer="At LuxcraftDecor, authenticity is paramount. We source our Asian art directly from skilled artisans and renowned workshops, ensuring each piece is genuine and of the highest quality." />
    </div>
  );
};




export const EuopeanMasterFqA = () => {
  return (
    <div className="py-5">
      <hr className="border-black my-2" />
      <Accordion title="Renaissance to Modernism" 
      answer="A Timeline of Brilliance Explore art that spans centuries of European history. We present works that trace the evolution from the meticulous realism of the Renaissance to the revolutionary strokes of Modernism. This journey through time offers not just art, but a window into the changing contours of European society and thought." />
      <hr className="border-black my-2" />
      <Accordion title="Iconic Artists & Their Legacies Discover the luminaries of European art" 
      answer="Our gallery includes works inspired by the likes of Leonardo da Vinci, Rembrandt, Monet, and Picasso. These artists' innovative techniques and unique perspectives have left an indelible mark on art history, and now, they grace your space with their legacy." />

     <hr className="border-black my-2" />
      <Accordion title="The Essence of European Artistry Delve into the heart of European creativity" 
      answer="Our collection features masterpieces from renowned European artists, each piece a testament to the skill and vision that has propelled European art to global acclaim. From the romantic landscapes of the Italian Renaissance to the bold expressions of the French Impressionists, our selection embodies the diverse cultural heritage of Europe." />

    </div>
  );
};


export const LatinAmericanfqa = () => {
  return (
    <div className="py-5">
     <hr className="border-black my-2" />
      <Accordion
        title="Explore the Diversity of Styles and Themes"
        answer="Bold, Innovative, and Diverse - These are the hallmarks of contemporary Australian art. In this collection, you'll find a wide array of styles, ranging from abstract and expressionist to more conceptual and multimedia works. Our artists draw inspiration from Australia's varied landscapes, urban environments, cultural stories, and societal themes, reflecting a country that is constantly evolving."
      />
      <hr className="border-black my-2" />
      <Accordion
        title="Art that Connects and Inspires"
        answer="Our Contemporary Australian Artists collection is more than just a display of artistic talent; it's a platform for connection and inspiration. Whether you're an art enthusiast, collector, or someone seeking a meaningful addition to your space, our collection provides an opportunity to connect with the essence of modern Australia."
      />
      <hr className="border-black my-2" />
      <Accordion title="Sustainability in Art" 
      answer="We recognize the importance of sustainable practices in art. Many of our artists use environmentally friendly materials and techniques, contributing to a greener future while creating art that resonates with contemporary audiences." />
      <hr className="border-black my-2" />
      <Accordion title="Experience the Art" 
      answer="Experience the dynamism of contemporary Australian art through our online gallery. Browse, discover, and purchase pieces that resonate with your aesthetic and values. We offer secure shipping across Australia and internationally, ensuring that your chosen piece arrives safely at your doorstep." />
    </div>
  );
};


