import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import './App.css'
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/data/myState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/page/AddProduct';
import UpdateProduct from './pages/admin/page/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './pages/allproducts/Allproducts';
import MyComingSoonPage from './ComingSoon';
import Luxcraftlogin from './Luxcraftlogin';
import { AuthProvider, useAuth } from './AuthContext';
import ImageUpload from './components/Addimg';
import Myprofile from './pages/Profile/Myprofile';

function App() {
  return (
    <AuthProvider>
    <MyState>
      <Router>
        <Routes>
          {/* <Route path="/" element={< MyComingSoonPage/>}></Route>


          <Route path="/Luxcraftadmin" element={<Luxcraftlogin />}></Route> */}

          <Route path="/"  element={<Home />} />
        
          <Route path="/allproducts"  element={<Allproducts />} />


          <Route path="/order" 
          element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          }
         />


          <Route path="/cart"  element={<Cart />}/>


          <Route path="/dashboard"  element={
            <ProtectedRouteForAdmin>
              <Dashboard />
            </ProtectedRouteForAdmin>
          }  />


          <Route path='/login'  element={<Login/>}  />
          <Route path='/signup'  element={<Signup/>}  />
          <Route path='/myProfile/:activepage'  element={<Myprofile/>} />

          <Route path='/productinfo/:id'  element={<ProductInfo/>} />
          <Route path='/addimg'  element={<ImageUpload/>}/>

          <Route path='/addproduct'  element={
            <ProtectedRouteForAdmin>
              <AddProduct/>
            </ProtectedRouteForAdmin>
          }  />
          <Route path='/updateproduct'  element={
            <ProtectedRouteForAdmin>
              <UpdateProduct/>
            </ProtectedRouteForAdmin>
          } />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <ToastContainer/>
      </Router>
    </MyState>
    </AuthProvider>
  )
}

export default App 

// user 

export const ProtectedRoute = ({children}) => {
  const user = localStorage.getItem('user')
  if(user){
    return children
  }else{
    return <Navigate to={'/login'}/>
  }
}

// admin 

const ProtectedRouteForAdmin = ({children})=> {
  const admin = JSON.parse(localStorage.getItem('user'))
  
  if(admin.user.email === 'admin@gmail.com'){
    return children
  }
  else{
    return <Navigate to={'/login'}/>
  }

}



// const ProtectedLuxcraft = ({ element }) => {
//   const { isLoggedIn } = useAuth();

//   return isLoggedIn ? element :element ;
  
// };
// {/* <Navigate to={'/*'}/> */}