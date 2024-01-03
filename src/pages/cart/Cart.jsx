import React, { useContext, useEffect, useState } from 'react'
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import { useNavigate } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import { useSelector } from 'react-redux';

function Cart() {
const context = useContext(myContext)
const { mode, cartProductsFromFirestore,deleteCartItemFromFirestore, handleCounterChange } = context;
const navigate = useNavigate()
const [couponCode, setCouponCode] = useState('');
const [showCouponInput, setShowCouponInput] = useState(false);
const [showAddressInputs, setShowAddressInputs] = useState(false);
const [addressFields, setAddressFields] = useState({
  Country: '',
  Suburb: '',
  state: '',
  postalCode: ''
});

  const [totalAmout, setTotalAmount] = useState(0);
  useEffect(() => {
    let temp = 0;
    cartProductsFromFirestore.forEach((cartItem) => {
      temp = temp + parseInt(cartItem.price) * cartItem.quantity;
    })
    setTotalAmount(temp);
  }, [cartProductsFromFirestore])


var shipping;
  var shipping;
if(totalAmout>0){
  shipping = parseInt(50);
}
else{
  shipping = parseInt(0);
}

 
  const grandTotal = shipping + totalAmout;
  const buyNow =  () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const userUid = storedUser?.user?.uid;
  if(userUid){
    navigate('/payment')
  }else{
    navigate('/login')
  }
  }

 


  const makePayment = async () => {
    const stripe = await loadStripe("pk_live_51OODqzHkxAlkXE3gOt575gtaeUnVvt11YokOJe8TNpohtVDAd1MPtjqa2qJ0rA0BJkm8ZB4JZ5vADY83lsocwGsk0065hMlGil");

    const body = {
        products: cartProductsFromFirestore.map(product => ({
            title: product.title,
            price: product.price,
            quantity: product.quantity
        }))
    };

    const headers = {
        "Content-Type": "application/json"
    };

    try {
        const response = await fetch("https://stripe.luxcraftdecor.com.au/create-checkout-session", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const session = await response.json();

        console.log("Session ID:", session.id);
        const result = stripe.redirectToCheckout({
            sessionId: session.id
        });

        if (result.error) {
            console.log(result.error);
        }
    } catch (error) {
        console.error('Error making payment:', error);
    }
};
const handleCouponApply = () => {
};
const handleAddressUpdate = () => {
  // Implement your logic to handle address update here
  // You can use the 'address' state to get the entered address details
  // Update the logic based on your specific requirements
};

  return (
    <Layout >

      <div className=" px-32 py-20 " style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
        <h1 className="mb-10 text-left text-3xl font-bold">Cart</h1>
        <div className=" max-w-5xl  px-6 md:flex  gap-20 ">
          <div className=" w-2/3 ">
            <div className=' flex justify-between px-5 mt-1  bg-white '>
                <p className='font-bold text-sm uppercase'>Product</p>
                <p className='font-bold text-sm uppercase'>Total</p>
              </div>

            {cartProductsFromFirestore.map((item, index) => {
              const { title, price,size, description, imageUrl, quantity } = item;
              const totalProductPrice = parseInt(price) * quantity;

              return (<>
                <div className="justify-between   border-t bg-white px-3 py-10 sm:flex sm:justify-start" style={{ backgroundColor: mode === 'dark' ? 'rgb(32 33 34)' : '', color: mode === 'dark' ? 'white' : '' }}>
                <img src={imageUrl} alt="product-image" className="w-full rounded-lg sm:w-40" />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="line-clamp-1 text-base underline text-[#11181f]" style={{ color: mode === 'dark' ? 'white' : '' }}>{title}</h2>
                    <p className="mt-1 text-base  text-[#11181f]" style={{ color: mode === 'dark' ? 'white' : '' }}>${price}</p>
                   <h2 className="mt-2 text-xs text-[#11181f]" style={{ color: mode === 'dark' ? 'white' : '' }}><span className='font-bold'>Size:</span>{size}</h2>
                   <div className=" mt-3 h-10 w-32 py-2 lg:px-2 border border-gray-700 rounded">
                    <button className="px-4 text-sm text-black" onClick={() => handleCounterChange(item.id, 'decrease')}>
                      -
                    </button>
                    <span className="mx-2 text-sm text-black">{item.quantity}</span>
                    <button className="text-sm text-black px-4" onClick={() => handleCounterChange(item.id, 'increase')}>
                      +
                    </button>
                    </div>
                    <p className='text-xs underline mt-3' onClick={() => deleteCartItemFromFirestore(item.id)} >Remove Item</p>

                  </div>
                 
                   
                 
                  <div className=" ">
                    <p> ${totalProductPrice}</p>
                  </div>
                </div>
              </div>
              </>   )
            })}

          </div>

          <div className='w-1/3'>
         
          {cartProductsFromFirestore.length > 0 && (
          <div className='flex flex-col '>
               <p className='text-right font-bold text-sm uppercase'>Totalcarts</p>
               <div className="mt-1 border-t px-5 py-5">
                    {!showCouponInput ? (
                      <p className="cursor- pointer underline text-base text-[#11181f]" onClick={() => setShowCouponInput(true)}>
                        Add a coupon
                      </p>
                    ) : (
                      <div className="flex ">
                        <input
                          type="text"
                          placeholder="Enter coupon code"
                          className="border px-2 w-40 py-4 mr-2"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                        />
                        <button className="bg-black text-white px-4 py-1 rounded" onClick={handleCouponApply}>
                          Apply
                        </button>
                      </div>
                    )}
                  </div>
        
        

          <div className="mt-6 h-full  border-t bg-white   md:mt-0 md:w-full" style={{ backgroundColor: mode === 'dark' ? 'rgb(32 33 34)' : '', color: mode === 'dark' ? 'white' : '', }}>
            <div className="py-5 flex justify-between border-b">
              <p className="text-gray-700 px-5" style={{ color: mode === 'dark' ? 'white' : '' }}>Subtotal</p>
              <p className="text-gray-700 px-5 " style={{ color: mode === 'dark' ? 'white' : '' }}>${totalAmout}</p>
            </div>
            <div className="flex py-5 justify-between">
              <p className="text-gray-700 px-5" style={{ color: mode === 'dark' ? 'white' : '' }}>Shipping</p>
              <p className="text-gray-700 px-5" style={{ color: mode === 'dark' ? 'white' : '' }}>${shipping}</p>
            </div> 

            <div className="py-5">
                    <p className="px-5 underline cursor-pointer" onClick={() => setShowAddressInputs(!showAddressInputs)}>
                      Change Address
                    </p>
                    {showAddressInputs && (
                      <div className="mt-3 px-5 flex flex-col">
                        <input
                          type="text"
                          placeholder="Country"
                          className="border px-3 rounded py-4 mb-2 border-black"
                          value={addressFields.Country}
                          onChange={(e) => setAddressFields({ ...addressFields, Country: e.target.value })}
                        />
                        <input
                          type="text"
                          placeholder="Suburb"
                          className="border px-3 rounded py-4 mb-2 border-black"
                          value={addressFields.Suburb}
                          onChange={(e) => setAddressFields({ ...addressFields, Suburb: e.target.value })}
                        />
                        <input
                          type="text"
                          placeholder="State"
                          className="border px-3 rounded py-4 mb-2 border-black"
                          value={addressFields.state}
                          onChange={(e) => setAddressFields({ ...addressFields, state: e.target.value })}
                        />
                        <input
                          type="text"
                          placeholder="Postal Code"
                          className="border px-3 rounded py-4 mb-2 border-black"
                          value={addressFields.postalCode}
                          onChange={(e) => setAddressFields({ ...addressFields, postalCode: e.target.value })}
                        />
                        <button className="hover:bg-blue-500 bg-black text-white px-4 py-4 rounded" onClick={handleAddressUpdate}>
                          Update
                        </button>
                      </div>
                    )}
                  </div>



            <div className="flex justify-between mb-3">
              <p className="text-base font-bold px-5" style={{ color: mode === 'dark' ? 'white' : '' }}>Total</p>
              <div className>
                <p className="mb-1 px-5 text-base font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>${grandTotal}</p>
              </div>
            </div>
          <button className="items-center text-white h-10 w-full rounded bg-black hover-bg-blue-500" onClick={makePayment}>
           Proceed to Checkout
          </button>
            
          </div>

          
          </div>
             )}
          </div>
        

        
        </div>
      </div>
    </Layout>
  )
}

export default Cart