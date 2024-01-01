import React from "react";
import Accordion from "./Accodian";

export const AbstractFqa = () => {
  return (
    <div className="py-5">
     <hr className="border-black my-2" />
      <Accordion
        title="Explore the Boundless Imagination of Abstract Art"
        answer="At LuxcraftDecor, we invite you to dive into Abstract Art's enigmatic and vibrant world. A genre that breaks free from the traditional representation of physical objects, abstract art explores colours, shapes, and textures that speak directly to emotions and imagination."
      />
      <hr className="border-black my-2" />
      <Accordion
        title="What is Abstract Art?"
        answer="Abstract art is more than just a visual experience; it's a journey into the artist's mind. It shuns the boundaries of realistic portrayal and delves into the realms of pure form, colour, and line to create compositions that may exist independently from visual references in the world. This art form is open to interpretation, allowing viewers to engage with it on a deeply personal level."
      />
      <hr className="border-black my-2" />
      <Accordion title="Why Choose Abstract Art for Your Space?" 
      answer="Abstract art is versatile and thought-provoking, making it a perfect choice for any space. Whether you're decorating a modern home, an office, or a commercial space, abstract art adds a touch of sophistication and creativity. It's an excellent conversation starter and works well in minimalist or eclectic decor themes." />
    <hr className="border-black my-2" />

    <Accordion
        title="Our Abstract Art Collection"
        answer={
          <>
          <p>We proudly feature a range of abstract artworks from talented artists, both local and international. Our collection includes:</p>
          <ul>
            <li><span className="font-bold">Vibrant Color Explosions:</span> Perfect for adding color to any room.</li>
            <li><span className="font-bold">Monochromatic Mysteries: </span> Ideal for creating a sophisticated, calming atmosphere.</li>
            <li><span className="font-bold">Textural Intricacies: </span> Offering a tactile experience that invites close inspection. </li>
            <li><span className="font-bold">Geometric Wonders: </span> Where lines and shapes converge to form captivating patterns.</li>
          </ul>
        </>
        }
      />
    </div>
  );
};



export const MinimalFqa = () => {
  return (
    <div className="py-5">
     <hr className="border-black my-2" />
      <Accordion
        title="Unveiling the Soul of Simplicity"
        answer="In the world of Minimalist Art, LuxcraftDecor celebrates the beauty of understatement. Our Minimalist Art collection is an homage to the art of reduction, where every line, shape, and color is intentional, and every empty space is meaningful."
      />
      <hr className="border-black my-2" />
      <Accordion
        title="The Aesthetic of Clarity"
        answer="In our busy, cluttered lives, Minimalist Art offers a visual haven of clarity and serenity. Its uncluttered composition and soothing simplicity make it an ideal choice for modern living spaces and work environments. It's art that complements rather than competes with its surroundings."
      />
      <hr className="border-black my-2" />
      <Accordion title="The Impact of Minimalism" 
      answer="Minimalist Art leaves a lasting impact not through complexity, but through its profound simplicity. It's a gentle yet powerful reminder of the beauty in the basics, the elegance in the elementary, and the profound in the plain." />
    </div>
  );
};




export const PopArtFqA = () => {
  return (
    <div className="py-5">
     <hr className="border-black my-2" />
      <Accordion
        title="The Birth of Pop"
        answer="Emerging in the mid-20th century, Pop Art was a rebellious response to the traditional views of art. Artists of this movement sought to blur the boundaries between high art and low culture, drawing inspiration from sources like advertising, comic books, and mundane cultural objects. Pop Art is as much about the art as it is about the societal context it reflects."
      />
      <hr className="border-black my-2" />
      <Accordion
        title="Iconography and Irony"
        answer="Our collection features works that are instantly recognizable for their use of mass culture and iconic imagery. Pop Art is known for its use of irony and parody, often presenting everyday objects and famous faces in unusual or exaggerated ways. It's a visual journey through the familiar, reimagined and repurposed."
      />
      <hr className="border-black my-2" />
      <Accordion title="Discover Pop Art with LuxcraftDecor" 
      answer="Explore our curated collection of Pop Art and find the piece that speaks to you. Whether it's a classic Warhol-inspired print or a contemporary piece infused with pop culture references, our collection is sure to captivate and inspire." />
      <hr className="border-black my-2" />
      <Accordion title="Pop Art in the Modern Day" 
      answer="While deeply rooted in the ethos of the 1950s and 1960s, Pop Art remains highly relevant today. It continues to influence modern culture and art, echoing the constant dialogue between the commercial world and artistic expression. Our collection reflects this ongoing relevance, featuring works that resonate with contemporary themes and ideas." />
    </div>
  );
};


export const UrbanArtfqa = () => {
  return (
    <div className="py-5">
     <hr className="border-black my-2" />
      <Accordion
        title="Explore the Vibrant World of Urban Art at LuxcraftDecor"
        answer="Explore the Vibrant World of Urban Art at LuxcraftDecor"
      />
      <hr className="border-black my-2" />
      <Accordion
        title="What is Urban Art?"
        answer={<>
        <h1 className="font-bold"> Urban Art: Redefining Artistic Boundaries</h1>
        <p>Urban Art is an eclectic blend of styles and mediums, often reflecting contemporary culture and societal themes. It transcends traditional art forms, embodying elements of graffiti, street art, pop culture, and political commentary. At LuxcraftDecor, we celebrate this art form that has evolved from city walls to esteemed galleries, bringing you an array of pieces that range from edgy and provocative to whimsically vibrant.</p>
        </>}
      />
      <hr className="border-black my-2" />
      <Accordion title="Our Collection" 
        answer={<>
          <h1 className="font-bold">A Curated Collection of Urban Masterpieces </h1>
          <p>Our Urban Art collection showcases a diverse range of artists who bring their unique perspectives to this dynamic art form. Each piece in our collection tells a story, whether it's through abstract patterns, striking portraits, or thought-provoking scenes. From the splash of graffiti-inspired artwork to the detailed precision of stencil art, our collection is a homage to the streets that inspire it.</p>
          </>}/>
        <hr className="border-black my-2" />
      <Accordion title="Why Choose Urban Art?" 
      answer="Urban Art is more than just a visual pleasure; it's a statement. It speaks to those who appreciate boldness, color, and a touch of rebellion. Integrating Urban Art into your space is not just about decorating; it's about making a statement, embracing modernity, and celebrating a culture that thrives on creativity and freedom of expression." />
    </div>
  );
};


