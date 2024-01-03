// Banner.js

import React from "react";

const banners = {
  "modern-and-contemporary": "Banner for Category 3",
  "abstract-paintings": "Banner for Colonial Art",
  "minimal-art": {
    text: "Banner for Category 2",
    image: "url_for_category_2_image.jpg",
  },  
  "urban-art": {
    text: "Welcome to LuxcraftDecor's Urban Art collection, where the pulsating energy of the streets meets the elegance of fine art. Urban Art, a revolutionary form of artistic expression, originates from the heart of the cityscape. It's where graffiti's rawness, street art's boldness, and modern life's vibrancy collide to create something truly extraordinary.",
    image: "url_for_category_2_image.jpg",
  }, 
  // ... (other categories)
};

const Banner = ({ selectedCategory }) => {
  const bannerInfo = banners[selectedCategory];

  if (!bannerInfo) {
    return null;
  }

  const { text, image } = bannerInfo;

  return (
    <div
      className={`banner-${selectedCategory} text-center text-2xl p-20`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {text}
    </div>
  );
};

export default Banner;
