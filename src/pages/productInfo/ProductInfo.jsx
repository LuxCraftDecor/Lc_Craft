import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { doc, getDoc,setDoc, addDoc, collection,serverTimestamp,updateDoc ,increment} from 'firebase/firestore';
import { toast } from 'react-toastify';
import { fireDB } from '../../fireabase/FirebaseConfig';
import { FaFacebookF,FaPinterest,FaShare   } from "react-icons/fa";
import { FaInstagram,  } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { BsTwitterX } from "react-icons/bs";
import { TiShoppingCart } from "react-icons/ti";




function ProductInfo() {
    const context = useContext(myContext);
    const {product, loading, setLoading } = context;
    const [relatedProducts, setRelatedProducts] = useState([]);

    const [products, setProducts] = useState('')
    const params = useParams()
    // console.log(products.title)

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
              item.id !== params.id // Exclude the current product
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


    const [count, setCount] = useState(0);

    const handleCounterChange = (operation) => {
      if (operation === 'decrease' && count > 0) {
        setCount(count - 1);
      } else if (operation === 'increase') {
        setCount(count + 1);
      }
    }

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




    const image1 = products && products.subImageUrl1;
    const image2 = products && products.subImageUrl2;
    const image3 = products && products.subImageUrl3;
    const image4 = products && products.subImageUrl4;
    const image5 = products && products.imageUrl;
    const photos = [image1, image2, image3, image4,image5].filter(url => url !== '');

         
      
      const [preview, setPreview] = useState();
      useEffect(() => {
        setPreview(image5);
    }, [image5]);

      function HandleMouseOver(e){
          setPreview(e.target.src);
      }
      
      



      
  



    return (
        <Layout>
            <section className="text-gray-600 bg-white body-font overflow-hidden">
                <div className="container px-5 py-10 mx-auto">
                   
                    <div className="lg:w-full  flex flex-wrap">
                      <div className=" flex ">
                  <section className="flex space-x-20">
                <nav className="col-2">
                    {
                        photos.map(photo=>
                            <div className="mb-2 p-1 border border-2 border-primary w-12 lg:w-16 "  key={photo}>
                                <img src={photo}  onMouseOver={HandleMouseOver} className='w-10 h-10 lg:w-14 lg:h-14' />
                            </div>
                            )
                    }
                </nav>
                <main className="col-10">
                    <img  className="preview-image h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] transition-transform hover:scale-110 hover:shadow-2xl"  src={preview} />
                </main>
            </section>
                        </div>


                        <div>
                    {products && 
                        <div className="lg:w-full w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="company uppercase text-orange-400 font-bold text-sm sm:text-md tracking-wider pb-3 sm:pb-5">
                                LuxCraft Decor
                            </h2>
                            <h1 className="product capitalize text-blue-900 font-bold text-3xl sm:text-2xl sm:leading-none pb-3">
                                {products.title}
                            </h1>


                            <div className="flex mb-4">
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2">
                                  <Link to='https://www.facebook.com/profile.php?id=61554174676013' ><FaFacebookF/></Link>
                                  <Link to='https://www.instagram.com/luxcraft.decor/'><FaInstagram/></Link>
                                  <Link><BsTwitterX/> </Link>
                                  <Link><FaPinterest/></Link>
                                  <Link><FaShare /></Link>

                                  
                                </span>
                            </div>
                            <div className='flex flex-col mb-4 text-sm'>
                              <p>Artist: {products.artistname}</p>
                              <p>Type: {products.productType}</p>
                              <p>Orientation: {products.orientation}</p>
                              <p>Color: {products.color}</p>
                              <p>Material: {products.material}</p>
                              <p className='text-sky-950 text-lg pb-2 lg:py-7 lg:leading-6 w-96'>Description: <br/><span className='text-sky-950 text-base pb-2 lg:py-7 lg:leading-6 w-96'>
                                {products.description}</span></p>
                            </div>
                            <div className="flex justify-between items-center">

                            <span className="title-font font-medium text-2xl text-blue-950">
                                ${products.price}
                                </span>     
                            </div>

                            <div className="flex pt-10">
                            <div className="bg-gray-200 lg:px-6 lg:py-3 rounded-lg">
                              <button className=" px-4 py-1 text-2xl text-black" onClick={() => handleCounterChange('decrease')}>
                                    -
                                </button>
                                <span className="mx-2 text-2xl text-black">{count}</span>
                                <button className="text-2xl text-black px-4 py-1" onClick={() => handleCounterChange('increase')}>
                                    +
                                </button>
                              </div>
                            <button className="rounded-full  ml-auto w-16 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <svg
                                        fill="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-8 h-8"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                                    </svg>
                                </button>

                           
                                <button  onClick={()=>addCart(products)} className="flex ml-2 text-base text-white items-center justify-center text-center w-52  bg-orange-500 border-0  focus:outline-none hover:bg-orange-600 rounded-xl">
                                  <TiShoppingCart className='w-8 h-6'/>  <span className='pl-2'>Add To Cart</span>
                                </button>
                               
                            </div>
                        </div>
                    }
                        </div>
                    </div>

                    <div  className='flex px-52  justify-center items-center mx-auto'>
                        
                    
                    <div className="mt-8  w-full ">
                     

                        <div className="mb-4">
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
                        </div>
                    </div>

                      <div>
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
                      </div>

                </div>
            </section>
            <h3>Related Products</h3>
            <ul>
                {relatedProducts.map((relatedProduct) => (
                    <div key={relatedProduct.id}>
                      <h1>{relatedProduct.title}</h1>
                      <img src={relatedProduct.imageUrl}/>
                    </div>
                    
                    // Display other related product details as needed
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