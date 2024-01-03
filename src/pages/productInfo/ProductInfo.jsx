import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext';
import { useParams } from 'react-router';
import { doc, getDoc,setDoc, addDoc, collection,serverTimestamp,updateDoc ,increment} from 'firebase/firestore';
import { toast } from 'react-toastify';
import { fireDB } from '../../fireabase/FirebaseConfig';
import { Link, useNavigate } from 'react-router-dom';
import { FaCheckCircle } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";


function ProductInfo() {
    const context = useContext(myContext);
    const {mode,product, loading, setLoading } = context;
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [quantity, setQuantity] = useState(1);

 const navigate = useNavigate();
    const [products, setProducts] = useState('')
    const params = useParams()
    const [cartNotification, setCartNotification] = useState(false);

    const getProductData = async () => {
        setLoading(true)
        try {
            const productTemp = await getDoc(doc(fireDB, "products", params.id))
            // console.log(productTemp)
            setProducts(productTemp.data());
            // console.log(productTemp.data())
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    const getRelatedProducts = () => {
      // Filter products based on the matching criteria
      const matchingProducts = product.filter((item) => {
          return (
              item.productType === products.productType &&
              item.category === products.category &&
              item.id !== params.id 
              // Exclude the current product
          );
      });

      // Shuffle the array to get a random order
      const shuffledProducts = matchingProducts.sort(() => Math.random() - 0.5);

      // Select the first four products
      const selectedProducts = shuffledProducts.slice(0, 4);

      setRelatedProducts(selectedProducts);
  };


    useEffect(() => {
        getProductData()

    }, [])

    useEffect(() => {
      if (products) {
          getRelatedProducts();
      }
  }, [products, product]);
  

    const [review, setReview] = useState({
        rating: 0,
        comment: '',
      });
    
      const handleRatingChange = (newRating) => {
        setReview({ ...review, rating: newRating });
      };
    
      const handleCommentChange = (event) => {
        setReview({ ...review, comment: event.target.value });
      };
    
      const handleSubmitReview = async () => {
        const userEmail = JSON.parse(localStorage.getItem('user'));
      
        try {
          if (!userEmail || !userEmail.user || !userEmail.user.email) {
            toast.error('Please log in to submit a review.');
            return;
          }
      
          const productId = params.id;
      
          if (!productId || typeof productId !== 'string' || productId.trim() === '') {
            toast.error('Invalid product ID for review.');
            return;
          }
      
        
          const reviewsCollectionRef = collection(fireDB, 'products', productId, 'reviews');
          const docRef = doc(reviewsCollectionRef, userEmail.user.email);
          
          await setDoc(docRef, {
            rating: review.rating,
            comment: review.comment,
            userEmail: userEmail,
            timestamp: serverTimestamp(),
          });
          
        
          const productRef = doc(fireDB, 'products', productId);
          const productSnapshot = await getDoc(productRef);
          const productData = productSnapshot.data();
      
          const newAverageRating =
            (productData.averageRating * productData.numReviews + review.rating) /
            (productData.numReviews + 1);
      
          await updateDoc(productRef, {
            averageRating: newAverageRating,
            numReviews: increment(1),
          });
      
          toast.success('Review submitted successfully!');
          setReview({ rating: 0, comment: '' });
        } catch (error) {
          console.error('Error submitting review:', error);
          toast.error('Failed to submit review. Please try again.');
        }
      };


      const updateLocalStorageCart = (userUid, updatedCart) => {
        localStorage.setItem('user', JSON.stringify({ user: { uid: userUid }, cart: updatedCart }));
      };
      
      const handleAddToCart = async (product) => {
        try {
          const storedUser = JSON.parse(localStorage.getItem('user'));
          const userUid = storedUser?.user?.uid;
      
          if (!userUid) {
            console.error('User not logged in. Unable to update the cart.');
            toast.error('Please log in to add the product to the cart.');
            return;
          }
      
          const cartCollectionRef = collection(fireDB, 'carts');
          const cartDocRef = doc(cartCollectionRef, userUid);
          const cartDocSnapshot = await getDoc(cartDocRef);
      
          const selectedProduct = {
            ...product,
            size: selectedSize,
            quantity: quantity,
            price: totalPrices.find((item) => item.size === selectedSize)?.price || 0,
            CartskuCode: `${product.skuCode}-${getSizeNumber(selectedSize)}`,
          };
      
          let updatedCart;
      
          if (cartDocSnapshot.exists()) {
            const existingProducts = cartDocSnapshot.data().products;
            const existingProductIndex = existingProducts.findIndex(
              (p) => p.productId === product.productId && p.size === selectedSize
            );
      
            if (existingProductIndex !== -1) {
              existingProducts[existingProductIndex].quantity += 1;
            } else {
              existingProducts.push(selectedProduct);
            }
      
            await setDoc(cartDocRef, { products: existingProducts });
            updatedCart = {
              ...storedUser.cart,
              products: existingProducts,
            };
          } else {
            await setDoc(cartDocRef, { products: [selectedProduct] });
            updatedCart = {
              ...storedUser.cart,
              products: [selectedProduct],
            };
          }

          // Save the updated cart in localStorage only if there are products in the cart
          if (updatedCart.products.length > 0) {
            updateLocalStorageCart(userUid, updatedCart);
            setCartNotification(true);
            window.scrollTo({
              top: 0,
              behavior: "smooth" // Optional: Add smooth scrolling behavior
            });
          
          }
      
          toast.success('Product added to the cart');
        } catch (error) {
          console.error('Error updating Firebase database:', error);
          toast.error('Failed to update the cart. Please try again.');
        }
      };
      
      
      
      

    const image1 = products && products.subImages[0];
    const image2 = products && products.subImages[1];
    const image3 = products && products.subImages[2];
    const image4 = products && products.subImages[3];
    const image5 = products && products.imageUrl;
    const photos = [image1, image2, image3, image4,image5].filter(url => url !== '');
    const imagesArray = [image1, image2, image3, image4, image5].filter(url => url !== '');

      
      const [preview, setPreview] = useState();
      useEffect(() => {
        setPreview(image5);
    }, [image5]);

      function HandleMouseOver(e){
          setPreview(e.target.src);
      }
   
      const handleproductClick = (productId) => {
        navigate(`/productinfo/${productId}`);
        console.log(productId);
    };

    const [showSpecification, setShowSpecification] = useState(true);
    const [showDescription, setShowDescription] = useState(false);

    const [showReviews, setShowReviews] = useState(false);
    const handleShowDescription = () => {
      setShowDescription(true);
      setShowSpecification(false)

      setShowReviews(false);
    };
    
    const handleShowReviews = () => {
      setShowDescription(false);
      setShowSpecification(false)

      setShowReviews(true);
    };
    const handleShowSpecifiction =()=>{
      setShowSpecification(true)
      setShowDescription(false);
      setShowReviews(false);
    }


    const totalPrices = products.total_price || [];
    const prices = totalPrices.map(item => parseInt(item.price));    
    const lowestPrice = Math.min(...prices);
    const highestPrice = Math.max(...prices);
    const [selectedSize, setSelectedSize] = useState('');
    const [isSizeSelected, setIsSizeSelected] = useState(false);

    const handleSizeChange = (event) => {
      const selectedSize = event.target.value;
      setSelectedSize(selectedSize);
      setIsSizeSelected(!!selectedSize); // Set isSizeSelected to true if a size is selected
    };
    const getSizeNumber = (selectedSize) => {
      const sizeNumberMapping = {
        '150X150cm': 1,
        '120X120cm': 2,
        '100X100cm': 3,
        '90X90cm': 1,
        '80X80cm': 2,
        "1500X1000cm":1,
        "1200X800cm":2,
        "900X600cm":3,
        "750X400cm":4,
      };
    
      return sizeNumberMapping[selectedSize] || 'Unknown';
    };
    




    return (
        <Layout>
 

            <section className="text-gray-600 bg-white body-font overflow-hidden">
           
           

                <div className="container px-10 py-5  w-full">
                  {cartNotification&&(
                    <div className="bg-green-300 border border-green-500 text-black py-2 px-10  mx-7 flex left-0 right-0 justify-between">
                    <p className='flex gap-5'><span className='text-xl text-green-700'><FaCheckCircle /></span> <span>"{products.title} "  has been added to cart</span></p>
                <Link to="/cart" className="underline">View Cart</Link>
                  </div>
                  )}
                
                    <div className="lg:w-full  flex flex-wrap">
                      <div className=" flex w-2/4 ">
                  <section className=" w-full flex flex-col">
                  <main className="relative flex justify-center lg:h-[500px]  items-center col-10">
                  <img
                      onContextMenu={(e) => e.preventDefault()}
                      className="preview-image h-[300px] w-[300px] lg:w-[90%] lg:h-[90%] transition-transform hover:scale-105 hover:shadow-2xl"
                      src={preview}
                  />
              </main>



                <nav className="  col-2 flex  jystify-center items-center mx-auto space-x-5">
                {imagesArray.map((photo, index) => (
        <div  key={index}>
          {photo && 
                <div className=" mb-2 p-1 border border-2 border-gray-600 w-12 lg:w-16" >

          <img src={photo} onMouseOver={HandleMouseOver} className="w-10 h-10 lg:w-14 lg:h-14" /> 
          </div>}
        </div>
      ))}
                </nav>
                 </section>
                        </div>


                        <div className='w-2/4 flex justify-start items-start left-0'>
                    {products && 
                        <div className="lg:w-full w-full  lg:py-6 mt-6 lg:mt-0">
                           
                            <h1 className="product capitalize text-black font-semibold text-2xl md:text-3xl leading-2 ">
                                {products.title}
                            </h1>
                            
                            <div className="flex flex-col ">

                            <span className="title-font text-2xl  mt-5 text-black">
                                ${lowestPrice} -${highestPrice}
                                </span>
                                <div className='mt-5 line-clamp-5	 text-base font-normal leading-normal text-[##11181f]'>
                                  {products.description}
                                  </div> 
                            </div>
                            <div className='mt-5 gap-5 flex'>
                              <div>                           
                                 <h1 className='mt-5 text-black'>Size:</h1>
                             </div>
 
                            <div className='flex mt-2 space-x-4 text-[12px]'>
                            <select
                                onChange={handleSizeChange}
                                value={selectedSize}
                                className='border border-black text-black text-lg px-5 py-3'
                              >
                                <option value="">Select Size</option>
                                {totalPrices.map((item, index) => (
                                  <option key={index} value={item.size}>
                                    {item.size}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className='text-lg mt-10'
                          >
                          {selectedSize && (
          `Price: $${totalPrices.find(item => item.size === selectedSize)?.price || ''}`
        )}                       
                             </div>
                           
                            <div className="flex pt-10">
                            <input
                              type="number"
                              className="appearance-none border w-20 mr-5 rounded border-black py-2 px-5 leading-5 text-black focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                              value={quantity}
                              onChange={(e) => setQuantity(e.target.value)}
                              name="quantity"
                            />


                            <button
                              onClick={() => handleAddToCart(products)}
                              className={`flex text-base text-white items-center justify-center text-center w-40 py-2 rounded-md ${
                                isSizeSelected ? 'bg-black' : 'bg-gray-400 cursor-not-allowed'
                              } border-0 focus:outline-none ${isSizeSelected ? 'hover:bg-blue-600' : ''}`}
                              disabled={!isSizeSelected} // Disable the button when no size is selected
                            >
                              <TiShoppingCart className='h-10' />
                              <span className='pl-2'>Add To Cart</span>
                            </button>
   
                            </div>

                            <p className='mt-5'>
                            {products.skuCode}
                            {isSizeSelected ? ` - ${getSizeNumber(selectedSize)}` : ''}
                          </p>
                        </div>
                    }
                        </div>
                    </div>

                   

                </div>
            </section>


                      <div>
                      <div  className='flex px-52  justify-center items-center mx-auto'>
                                              
                    
                        <div className="mt-8  w-full ">
                         
    
                            {/* <div className="mb-4">
                                <h3 className="text-md font-bold mb-2">Submit a Review</h3>
                                <StarRating rating={review.rating} onRatingChange={handleRatingChange} />
                               <div className='flex flex-col justify-center 	gap-10' >
                               <textarea
                                className="resize-none border rounded-md w-[20%] py-2 px-3 mt-2"
                                value={review.comment}
                                onChange={handleCommentChange}
                                placeholder="Write your review here..."
                                />
                                <button
                                className="bg-blue-500 text-white w-[10%] py-2 px-4 rounded-md mt-2"
                                onClick={handleSubmitReview}
                                >
                                Submit Review
                                </button>
                               </div>
                            </div> */}
                        </div>
    
                          
                          </div>
                    </div>


                    <div className="flex flex-col px-20  mx-auto">
                    <div className='flex border-b-2 border-gray-200 '>
                      <button className='border-l ml-4 rounded-md border-t border-gray-200 px-5 py-3' onClick={handleShowSpecifiction}>Additional information</button>
                      <button className='border-l ml-4 rounded-md border-t border-gray-200 px-5 py-3' onClick={handleShowDescription}>Description</button>
                      <button className='border-l-2 rounded-md border-r-2 border-gray-300 border-t px-5 py-3' onClick={handleShowReviews}>Reviews</button>
                    </div>


                    {showSpecification && (
                      <div className="mt-8 w-full">
                        <h1 className='text-lg font-bold mb-4'>Additional information</h1>
                        {products && <>
                        
                        </>}
                      </div>
                    )}

                    {showDescription && (
                      <div className="mt-8 w-full">
                        <h1 className='text-lg font-bold mb-4'>Description</h1>
                        {products && <>
                        {products.description}
                        </>}
                      </div>
                    )}

                    {showReviews && (
                      <div className="mt-8 w-full">
                      <h2 className="text-lg font-bold mb-4">Reviews</h2>
                        {review.reviews && Array.isArray(review.reviews) ? (
                            review.reviews.map((reviewItem, index) => (
                            <div key={index} className="mb-4">
                                {/* Render review content here */}
                            </div>
                            ))
                        ) : (
                            <p>No reviews available</p>
                        )}
                      </div>
                    )}
                  </div>




            <ul className='flex justify-center items-center px-20 py-5 flex-wrap'>
                {relatedProducts.map((relatedProduct) => (
                    <div key={relatedProduct.id} className="p-1 md:w-1/5">
                  <div  className="h-full bg-white hover:border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out rounded-xl   hover:border-gray-900 hover:border-opacity-60  overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >


                      <div onClick={() => handleproductClick(relatedProduct.id)} className="flex justify-center cursor-pointer">
                      <img className="rounded-2xl w-full h-60 p-2 hover:scale-105 transition-scale-110 duration-500 ease-in-out" src={relatedProduct.imageUrl} alt="blog" />
                    </div>
                    <div className="p-5 border-t-2">
                    <h2 className="tracking-widest text-xs title-font font-medium text-pink-600 mb-1" style={{ color: mode === 'dark' ? 'white' : '', }}>LuxCraft Decor</h2>
                    <h1 className=" line-clamp-1 title-font text-sm font-medium text-gray-900 " style={{ color: mode === 'dark' ? 'white' : '', }}>{relatedProduct.title}</h1>
                    <p className=" line-clamp-1 title-font text-sm font-medium text-gray-900 " style={{ color: mode === 'dark' ? 'white' : '', }}>{relatedProduct.description}</p>
                    <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>${relatedProduct.price}</p>

                    </div>
                    </div>
                      
                    </div>
                    
                ))}
            </ul>
            
        

        </Layout>
    )
}


export default ProductInfo


const StarRating = ({ rating, onRatingChange }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        onClick={() => onRatingChange(index + 1)}
        style={{ cursor: 'pointer', color: index < rating ? 'gold' : 'gray' }}
      >
        ★
      </span>
    ));
  
    return <div>{stars}</div>;
  };