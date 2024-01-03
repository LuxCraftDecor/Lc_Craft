import React, { useContext, useState, useEffect } from 'react'
import myContext from '../../../context/data/myContext'
import Layout from '../../../components/layout/Layout';
import Navbar from '../../../components/navbar/Navbar';
import logo from '../../../assets/center design 1.png';
import { categories, orientation } from './categories';
function AddProduct() {
    const context = useContext(myContext);
    const { products, setProducts, addProduct } = context;
    const [subImages, setSubImages] = useState([]);
    const [skuCode, setSkuCode] = useState('');

    useEffect(() => {
      if (products && products.title) {
        setSkuCode(generateSKU(products.title));
      }
    }, [products]);

    const addSubImage = () => {
      if (subImages.length < 4) {
        setSubImages([...subImages, '']);
      }
    };
  
    const removeSubImage = () => {
      if (subImages.length > 0) {
        const updatedSubImages = [...subImages];
        updatedSubImages.pop();
        setSubImages(updatedSubImages);
      }
    };



const generateSKU = (title, index) => {
  const titleWithNumbers = title
    .split(/\s+/) 
    .map((word) => {
      if (word.length > 0) {
        return word[0].toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0) + 1;
      } else {
        return ''; 
      }
    })
    .join('');

  return `SKU${titleWithNumbers}`;
};

const handleTitleChange = (e) => {
  const newTitle = e.target.value;
  const newSkuCode = generateSKU(newTitle);
  
  setProducts({ ...products, title: newTitle, skuCode: newSkuCode });
};


    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        setProducts({
          ...products,
          category: selectedCategory,
          subcategory: '', // Reset subcategory when category changes
        });
      };
    
      const handleSubcategoryChange = (e) => {
        const selectedSubcategory = e.target.value;
        setProducts({
          ...products,
          subcategory: selectedSubcategory,
        });
      };

    const  handleOrientationchange = (e) =>{
      const selectedOrientation = e.target.value;
      setProducts({
        ...products,
        orientation:selectedOrientation,
        

      });
    }






    const handleSizeChange = (event, index) => {
      const updatedTotalPrice = [...products.total_price];
      updatedTotalPrice[index] = {
        size: event.target.value,
        price: updatedTotalPrice[index].price,
      };
      setProducts({
        ...products,
        total_price: updatedTotalPrice,
      });
    };
  
    const handlePriceChange = (event, index) => {
      const updatedTotalPrice = [...products.total_price];
      updatedTotalPrice[index] = {
        size: updatedTotalPrice[index].size,
        price: event.target.value,
      };
      setProducts({
        ...products,
        total_price: updatedTotalPrice,
      });
    };
  
    const handleAddSizeWithPrice = () => {
      setProducts({
        ...products,
        total_price: [
          ...products.total_price,
          {
            size: '',
            price: '',
          },
        ],
      });
    };
  
    const handleRemoveSizeWithPrice = (index) => {
      const updatedTotalPrice = [...products.total_price];
      updatedTotalPrice.splice(index, 1);
      setProducts({
        ...products,
        total_price: updatedTotalPrice,
      });
    };








    
    return (
        <div>  
    <div className='flex  justify-center'>
    <div className="bg-decor-400 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">

     <div className="">
        <h1 className='text-center text-black text-xl mb-4 font-bold'>Add Product</h1>
     </div>

  <div className=" md:flex mb-6">
    <div className="md:w-1/2 px-3 ">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
       Title
      </label>
      <input type="text"
            value={products.title}
            onChange={handleTitleChange}
            name='title'
            id="title"
            placeholder='Product title'
            required
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-4 mb-3"  
            />
    </div>
    <div className="md:w-1/2 px-3">
        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="skuCode">
          SKU Code
        </label>
        <input
          type="text"
          value={skuCode}
          readOnly
          id="skuCode"
          name="skuCode"
          placeholder="Generated SKU code"
          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-4 mb-3"
        />
      </div>
    <div className="md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
       Quantity
      </label>
      <input type="number"
            value={products.stock}
            onChange={(e) => setProducts({ ...products, stock: e.target.value })}
            name='stock'
            required
            placeholder='Product stock'
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-4 mb-3"  
            />    
    </div>
  </div>


  <div className=" md:flex mb-6">
    <div className="md:w-1/2 px-3 ">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
       Category
      </label>
      <select
        value={products.category}
        onChange={handleCategoryChange}
        name="category"
        required
        id="grid-category"
        className="block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-4 mb-3"
      >
        <option value="" disabled selected>
          Select Product Category
        </option>
        {categories.map((category) => (
          <option key={category.categoryId} value={category.categoryId}>
            {category.categoryName}
          </option>
        ))}
      </select>   
    </div>
    <div className="md:w-1/2 px-3 ">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
       Sub Category
      </label>
     
      <select
            value={products.subcategory}
            onChange={handleSubcategoryChange}
            name="subcategory"
            id="grid-subcategory"
            className="block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-4 mb-3"
          >
            <option value="" disabled>
              Select Product Subcategory
            </option>
            {products.category && 
            categories.find((category) => category.categoryId === products.category)
              .subcategories.map((subcategory) => (
                <option key={subcategory.subcategoryId} value={subcategory.subcategoryId}>
                  {subcategory.subcategoryName}
                </option>
              ))  }
          </select> 
    
    </div>
    <div className="md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
        Type
      </label>
      <select
            value={products.productType}
            onChange={(e) => setProducts({ ...products, productType: e.target.value })}
            name="productType"
            className=" block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-4 mb-3"  
            >
            <option value="" disabled selected>
                 Select Product productType
            </option>
            
            <option value="Handmade Painting">Handmade Painting</option>
            <option value="Printed Painting">Printed Painting</option>
        </select>    
    </div>
  
  </div>


  <div className=" md:flex mb-6">
  <div className="md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
       Orientation
      </label>
      <select
            value={products.orientation}
            onChange={handleOrientationchange}
            name="orientation"
            className=" block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-4 mb-3"  
            >
            <option value="" disabled selected>
            Select Product orientation
            </option>
            {orientation.map((orientations)=>(
              <option key={orientations} value={orientations.orientation}>
               {orientations.orientation}
              </option>

            ))}

        </select>   
    </div>
    <div className="md:w-1/2 px-3 ">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
       Material
      </label>
      <select
            value={products.material}
            onChange={(e) => setProducts({ ...products, material: e.target.value })}
            name="material"
            className=" block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-4 mb-3"  
            >
            <option value="" disabled selected>
                Select Product material
            </option>
            <option value="Canvas">Canvas</option>
            <option value="Paper">Paper</option>
        </select>
    </div>
    <div className="md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
        Color
      </label>
      <select
            value={products.color}
            onChange={(e) => setProducts({ ...products, color: e.target.value })}
            name="color"
            className=" block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-4 mb-3"  
            >
            <option value="" disabled selected>
                Select Product color
            </option>
            <option value="Acrylic">Acrylic</option>
            <option value="Ink">Ink</option>
            <option value="Water Color">Water Color</option>
            <option value="Oil">Oil</option>
            <option value="Mixed Media">Mixed Media</option>
            <option value="Pencil">Pencil</option>
            <option value="Pastel ">Pastel </option>
            <option value="Charcoal">Charcoal</option>
            <option value="Sketch pen">Sketch pen</option>
        </select> 
    </div>
   
  </div>


  <div className="md:flex mb-6">
      <div className="md:w-full px-3">
        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-password">
          Image
        </label>
        <input
          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-1 px-4 mb-3"
          value={products.imageUrl}
          onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })}
          name='imageurl'
          type="text"
          placeholder=""
        />
        {subImages.map((subImage, index) => (
    <div key={index} className="mb-3">
        <input
            onChange={(e) => {
                const updatedSubImages = [...subImages];
                updatedSubImages[index] = e.target.value;
                setSubImages(updatedSubImages);
                setProducts({ ...products, subImages: updatedSubImages });
            }}
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-1 px-4"
            type="text"
            placeholder={`Subimage ${index + 1}`}
            name='subImages'
        />
    </div>
))}

        <div className="flex">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={addSubImage}
          >
            +
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={removeSubImage}
          >
            -
          </button>
        </div>
      </div>

      <div className="md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
       Artist Name
      </label>
      <input type="text"
            value={products.artistname}
            onChange={(e) => setProducts({ ...products, artistname: e.target.value })}
            name='artistname'
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-4 mb-3"  
            placeholder=' Artist Name'
        />
    </div>
</div>


<div className=" md:flex md:flex-col mb-6">
<button
        type="button"
        onClick={handleAddSizeWithPrice}
        className="ml-2  w-20 bg-blue-500 text-white px-2 py-1 rounded"
      >
        +
      </button>

    <div className='flex'>
    {products.total_price.map((item, index) => (
        <div key={index} className="flex flex-col">
          <div  className="md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor={`grid-size-${index}`}
          >
            Size
          </label>
          <select
            name={`size-${index}`}
            id={`grid-size-${index}`}
            className="block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-4 mb-3"
            onChange={(e) => handleSizeChange(e, index)}
            value={item.size}
          >
            <option value="" disabled>
              Select Size
            </option>
            {products.orientation &&
              orientation
                .find(
                  (orientation) =>
                    orientation.orientation === products.orientation
                )
                .size.map((sizes) => (
                  <option key={sizes.size1} value={sizes.size1}>
                    {sizes.size1}
                  </option>
                ))}
          </select>
          </div>
          <div className=" md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor={`grid-price-${index}`}
          >
            Price
          </label>
        
            <input
              type="text"
              name={`price-${index}`}
              required
              placeholder="Product price"
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-4 mb-3"
              onChange={(e) => handlePriceChange(e, index)}
              value={item.price}
            />
            <button
              type="button"
              className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => handleRemoveSizeWithPrice(index)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="md:w-1/2 px-3">
        <label
          className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          htmlFor="grid-last-name"
        >
          Sizes with Price
        </label>
        <ul>
          {products.total_price.map((item, index) => (
            <li key={index}>
              Size: {item.size}, Price: {item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>

      
    </div>
 

  <div className=" md:flex mb-6">
    <div className="md:w-full px-3">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
        Description
      </label>
      <textarea  name='description'
        value={products.description}
        onChange={(e) => setProducts({ ...products, description: e.target.value })}

      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-1 px-4 mb-3" id="grid-password" type="password" placeholder="Description"/>
    </div>
    
  </div>

  <div className='flex justify-center '>
    <button onClick={addProduct} className='bg-blue-800 py-2 px-5 rounded-md text-white'>Add Product</button>

  </div>

</div>
</div>






        </div>
    )
}

export default AddProduct