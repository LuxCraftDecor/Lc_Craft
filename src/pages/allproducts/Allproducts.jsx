import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
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

  const handleproductClick = (productId) => {
    navigate(`/productinfo/${productId}`);
  };

  return (
    <>
      <Layout>
        <Banner selectedCategory={selectedCategory} />
        <div className="px-4 lg:px-24 flex lg:flex-row md:flex-row flex-col">
          <div className="w-full md:w-1/4 lg:w-1/5">
            <Sidebar handleChange={handleChange} />
          </div>
          <div className="w-full md:w-3/4 lg:w-4/5 flex flex-wrap px-10 z-[-2]">
            {filteredProducts.map((item, index) => {
              const { title, price, artistname, imageUrl, id } = item;
              return (
                <section key={item.id} onClick={() => handleproductClick(id)} className=" m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border-2 border-gray-300 p-5 cursor-pointer">
                  <img className="rounded-2xl w-full h-40 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out" src={imageUrl} alt="product" />
                  <div className="card-details">
                    <h3 className="mb-4 line-clamp-1">{title}</h3>
                    <section className="mb-4 flex">{artistname}</section>
                    <section className="flex justify-between items-center ">
                      <div className="price">$ {price}</div>
                    </section>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Allproducts;
