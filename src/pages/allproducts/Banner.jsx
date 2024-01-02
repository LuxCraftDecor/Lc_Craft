// Banner.js

import React from "react";
import PropTypes from "prop-types";

const banners = {
  "modern-and-contemporary": "Banner for Category 3",
  "abstract-paintings": "Banner for Colonial Art",
  "minimal-art": {
    text: "Banner for Category 2",
    image: "url_for_category_2_image.jpg",
  },  
  "pop-art":"",
  "urban-art":"",
  "australian-art":"",
  "colonial-art":{
    text:"At LuxcraftDecor, our Global Art Moments collection is an expedition into the vast and varied realms of art from across the world. This category is a celebration of diverse cultures, histories, and artistic expressions. Here, we invite you to explore and connect with the global art community through our curated selection.",
    image: ""
  },
  "contemporary-australian-art": "",
  "indigeous-art":"",
  "landsacpe":"",
  "australian-Cities":"",
  "australian-culture-heritage":"",
  "global-art-movements-paintings": "",
  "african-art" :"",
  "asian-art":"",
  "historical-european-masters" :"",
  "latin-american":"",
  "traditional-paintings":"",
  "baroque-style":"",
  "classic-realism":"",
  "impressionism":"",
  "renaissance-Inspired":"",
  "custom-art-services":"",
  "art-consulting":"",
  "commissioned-artwork": "",















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

Banner.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
};

export default Banner;
