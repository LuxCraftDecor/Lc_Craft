import React from "react";
import Accordion from "./Accodian";

export const ArtConsultingfqa = () => {
  return (
    <div className="py-5">
     <hr className="border-black my-2" />
      <Accordion
        title="Enhance Your Space with Expert Art Consulting"
        answer="Welcome to LuxcraftDecor’s Art Consulting Services, where we bridge the gap between your vision and the perfect piece of art to complement it. In the bustling city of Melbourne and beyond, we understand the transformative power of art in both personal and professional spaces. Our bespoke art consulting service is dedicated to helping you find that unique piece that speaks to your style, space, and budget."
      />
      <hr className="border-black my-2" />
      <Accordion
        title="Why Choose LuxCraftDecor for Art Consulting?"
        answer={<>
        <ul>
          <li><span className="font-bold">Personalised Approach: </span>Every client has a unique story and space. We pride ourselves on our personalised service, ensuring your needs are met with the utmost attention.</li>
          <li><span className="font-bold">Diverse Portfolio: </span>From contemporary to traditional, local to global – our extensive collection caters to various tastes and preferences.</li>
          <li><span className="font-bold">Expert Guidance: </span>Our team of experienced art consultants is well-versed in aesthetics, design trends, and art history, ensuring that you receive knowledgeable and professional advice.</li>
          <li><span className="font-bold">Seamless Integration:</span>We don't just find your art; we ensure it integrates seamlessly with your existing décor and environment.</li>
        </ul>
        
        </>}
      />
      <hr className="border-black my-2" />
      <Accordion title="Transform Your Space Today" 
      answer="At LuxCraftDecor, we believe that the right piece of art can redefine a space. Our art consulting service is not just about finding art; it's about discovering the soul of your space and enhancing it with the perfect visual story. Contact us today to start your artistic journey-where art meets passion and professionalism" />
    </div>
  );
};

 

export const CommissionedArtworkFqa = () => {
  return (
    <div className="py-5">
     <hr className="border-black my-2" />
      <Accordion
        title="Unleash Creativity, Tailor Art to Your Vision
        Discover the Uniqueness of Personalized Art
        "
        answer="At LuxCraftDecor, we believe that art is not just an expression but a conversation. That's why we offer bespoke commissioned artwork services, connecting you with skilled artists who bring your visions to life. Whether it's a piece for your home, a unique gift, or a centrepiece for your corporate space, our commissioned art is about making your dreams tangible."
      />
      <hr className="border-black my-2" />
      <Accordion
        title="Begin Your Artistic Journey Today"
        answer="Ready to create something extraordinary? Connect with LuxcraftDecor and start crafting an artwork that speaks your language. Whether it’s capturing a cherished memory, embodying a corporate ethos, or simply bringing an imaginative concept to life, your perfect piece of art awaits."
      />
      <hr className="border-black my-2" />
      <Accordion
        title="Why Choose LuxCraftDecor for Commissioned Artwork?"
        answer={<>
        <ul>
          <li><span className="font-bold">Diverse Artist Network: </span>: Access to various artists with various styles and specialties.</li>
          <li><span className="font-bold">Collaborative Process: </span>We value your input at every step, ensuring the art reflects your personal touch.</li>
          <li><span className="font-bold">Satisfaction Guaranteed: </span>We work diligently until you completely love your commissioned piece.</li>
        </ul>
        
        </>}
      />    </div>
  );
};






