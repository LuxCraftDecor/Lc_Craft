import React, { useEffect, useState } from 'react'
import MyContext from './myContext';
import { useDispatch, useSelector } from 'react-redux';
import { Timestamp, addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, setDoc,getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { fireDB } from '../../fireabase/FirebaseConfig';
import { useNavigate } from 'react-router-dom';

function myState(props) {
    const [mode, setMode] = useState('light');
    const navigate = useNavigate();
    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = "rgb(17, 24, 39)"
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = "white"
        }
    }

    const [loading, setLoading] = useState(false);

    const [products, setProducts] = useState({
        title: null,
        artistname: null,
        total_price: [
          {
            size: '',
            price:'',
          }
        ],
        imageUrl: null,
        category: null,
        subcategory: null,        
        customizable: null,
        productType: null,
        color: null,
        material: null,
        orientation: null,
        stock: null,
        description: null,
        subImages: [''],
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )
    });

    const addProduct = async () => {

        if (products.title == null || 
            products.imageUrl == null || 
            products.category == null ||
            products.subcategory == null ||
            products.artistname == null || 
            products.description == null ||
            products.productType == null ||
            products.color == null ||
            products.material == null ||
            products.orientation == null ||
            products.stock ==null             
            
            ) {
               
            return toast.error("all fields are required")
        }

        setLoading(true)

        try {
            const productRef = collection(fireDB, 'products');
            await addDoc(productRef, products);


            toast.success("Add product successfully");
            setTimeout(() => {
                navigate('/dashboard')
            }, 800);
            getProductData();
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
        // setProducts("")


    }

    const [product, setProduct] = useState([]);

    const getProductData = async () => {

        setLoading(true)

        try {
            const q = query(
                collection(fireDB, 'products'),
                orderBy('time')
            );

            const data = onSnapshot(q, (QuerySnapshot) => {
                let productArray = [];
                QuerySnapshot.forEach((doc) => {
                    productArray.push({ ...doc.data(), id: doc.id });
                });
                setProduct(productArray);
                setLoading(false)
            });

            return () => data;

        } catch (error) {
            console.log(error)
            setLoading(false)
        }

    }

    useEffect(() => {
        getProductData();
    }, []);

    // update product function

    const edithandle = (item) => {
        setProducts(item)
    }

    const updateProduct = async () => {
        setLoading(true)
        try {

            await setDoc(doc(fireDB, 'products', products.id), products)
            toast.success("Product Updated successfully")
            setTimeout(() => {
                navigate('/dashboard')
            }, 800);
            getProductData();
            setLoading(false)

        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    // delete product

    const deleteProduct = async (item) => {
        setLoading(true)
        try {
            await deleteDoc(doc(fireDB, 'products', item.id))
            toast.success('Product Deleted successfully')
            getProductData();
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }


    const [order, setOrder] = useState([]);

    const getOrderData = async () => {
        setLoading(true)
        try {
            const result = await getDocs(collection(fireDB, "order"))
            const ordersArray = [];
            result.forEach((doc) => {
                ordersArray.push(doc.data());
                setLoading(false)
            });
            setOrder(ordersArray);
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const [user, setUser] = useState([]);

    const getUserData = async () => {
        setLoading(true)
        try {
            const result = await getDocs(collection(fireDB, "users"))
            const usersArray = [];
            result.forEach((doc) => {
                usersArray.push(doc.data());
                setLoading(false)
            });
            setUser(usersArray);
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getOrderData();
        getUserData();
    }, []);

    const [searchkey, setSearchkey] = useState('')
    const [filterType, setFilterType] = useState('')
    const [filterPrice, setFilterPrice] = useState('')

    const [cartProductsFromFirestore, setCartProductsFromFirestore] = useState([]);


    const cartItems = useSelector((state) => state.cart);


    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        const userUid = storedUser?.user?.uid;
      
        // Check if userUid is truthy before proceeding
        if (userUid) {
          const userCartRef = doc(fireDB, 'carts', userUid);
      
          const fetchCartProducts = async () => {
            try {
              const userCartDoc = await getDoc(userCartRef);
              if (userCartDoc.exists()) {
                const cartItemsFromFirestore = userCartDoc.data().products; // Adjust this line
                setCartProductsFromFirestore(cartItemsFromFirestore || []);
              } else {
                setCartProductsFromFirestore([]);
              }
            } catch (error) {
              console.error('Error retrieving user cart from Firestore:', error);
            }
          };
      
          fetchCartProducts();
        }else{
            const localCart = JSON.parse(localStorage.getItem('localCart')) || [];
            setCartProductsFromFirestore(localCart);
        }
      }, [cartItems]);
      


  const deleteCartItemFromFirestore = async (itemId) => {
    setLoading(true);
    try {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      const userUid = storedUser?.user?.uid;

      const userCartRef = doc(fireDB, 'carts', userUid);

      const userCartDoc = await getDoc(userCartRef);

      if (userCartDoc.exists()) {
        const updatedCartItems = userCartDoc.data().cartItems.filter(item => item.id !== itemId);
        await setDoc(userCartRef, { cartItems: updatedCartItems });
        toast.success('Cart item deleted successfully from Firestore');
        setCartProductsFromFirestore(updatedCartItems);
      } else {
      }

      setLoading(false);
    } catch (error) {
      console.error('Error deleting cart item from Firestore:', error);
      setLoading(false);
    }
  };


  const handleCounterChange = async (itemId, action) => {
    setLoading(true);
  
    try {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      const userUid = storedUser?.user?.uid;
  
      const userCartRef = doc(fireDB, 'carts', userUid);
  
      const userCartDoc = await getDoc(userCartRef);
  
      if (userCartDoc.exists()) {
        const cartData = userCartDoc.data();
        if (cartData && Array.isArray(cartData.products)) {
          const updatedCartItems = cartData.products.map(item => {
            if (item.id === itemId) {
              // Update the quantity based on the action (increase/decrease)
              item.quantity = action === 'increase' ? item.quantity + 1 : Math.max(item.quantity - 1, 1);
            }
            return item;
          });
  
          await setDoc(userCartRef, { products: updatedCartItems }); // Update the property name here
          toast.success(`Quantity updated successfully for item: ${itemId}`);
          setCartProductsFromFirestore(updatedCartItems);
        } else {
          console.error('Invalid cart data structure:', cartData);
        }
      }
  
      setLoading(false);
    } catch (error) {
      console.error('Error updating cart item quantity in Firestore:', error);
      setLoading(false);
    }
  };
  
  
  




  const [AddAddress, setAddAddress] = useState({
    pincode: null,
    state: null,
    country: null,
    addressline1: null,
    addressline2: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });
  



    return (
        <MyContext.Provider value={{
            mode, toggleMode, loading, setLoading,
            products, setProducts, addProduct, product,
            edithandle, updateProduct, deleteProduct, order,
            user, searchkey, setSearchkey,filterType,setFilterType,
            filterPrice,setFilterPrice, cartProductsFromFirestore ,deleteCartItemFromFirestore, AddAddress, handleCounterChange
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default myState