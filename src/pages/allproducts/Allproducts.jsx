import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams, useLocation, Link } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";
import "../../index.css";
import myContext from '../../context/data/myContext';
import Layout from "../../components/layout/Layout";
import Banner from "./Banner";

function Allproducts() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { slink } = useParams();

  const context = useContext(myContext);

  const { product } = context;

  useEffect(() => {
    if (slink) {
      // If slink is present, prioritize it for filtering
      setSelectedCategory(slink);
    }
  }, [slink]);

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected) {
    if (!selected) {
      return products; // Return all products if no category is selected
    }

    return products.filter(({ category, productType, subcategory, orientation, color, price, title, description }) => {
      return (
        (category && category.toLowerCase().includes(selected.toLowerCase())) ||
        (color && color.toLowerCase().includes(selected.toLowerCase())) ||
        (price && price.toLowerCase().includes(selected.toLowerCase())) ||
        (title && title.toLowerCase().includes(selected.toLowerCase())) ||
        (orientation && orientation.toLowerCase().includes(selected.toLowerCase())) ||
        (productType && productType.toLowerCase().includes(selected.toLowerCase())) ||
        (subcategory && subcategory.toLowerCase().includes(selected.toLowerCase())) ||
        (description && description.toLowerCase().includes(selected.toLowerCase()))
      );
    });
  }

  const filteredProducts = filteredData(product, selectedCategory);


  
 

  return (
    <>
<Layout>
  <Banner selectedCategory={selectedCategory} />
  <div className="px-4 lg:px-16 flex ">
    <div className="w-full flex flex-wrap">
      {filteredProducts.map((item, index) => {
        const { title, total_price, imageUrl, id } = item;
        const totalPrices = total_price || [];
        const prices = totalPrices.map((item) => parseInt(item.price));
        const lowestPrice = Math.min(...prices);
        const highestPrice = Math.max(...prices);

        return (
          <Link
            key={item.id}
            to={`/productinfo/${id}`}
            className="card m-2 w-full sm:w-[385px] md:w-[385px] lg:w-[385px] sm:h-[385px] md:h-[450px] lg:h-[450px] xl:h-[450px] xl:w-[385px] border border-gray-100 p-4 cursor-pointer"
          >
            <img
              className="w-full h-[300px] hover:scale-100 transition-scale-100 duration-300 ease-in-out"
              src={imageUrl}
              alt="product"
            />
            <div className="card-details">
              <h3 className="my-4 text-lg line-clamp-1">{title}</h3>
              <section className="flex justify-between items-center">
                <div className="price">${lowestPrice}-${highestPrice}</div>
              </section>
            </div>
          </Link>
        );
      })}
    </div>
  </div>
</Layout>




    </>
  );
  
}

export default Allproducts;
