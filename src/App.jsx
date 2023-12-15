import { useState, useEffect } from "react";

 function App()
{
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    function GetCartCount(){
        setCartCount(cartItems.length);
    }

    function LoadCategories(){
        fetch("http://fakestoreapi.com/products/categories")
        .then((response)=> response.json())
        .then((data)=> {
            data.unshift("all");
            setCategories(data);
        })
    }

    function LoadProducts(url){
        fetch(url)
        .then((response)=> response.json())
        .then((data)=>{
             setProducts(data);
        });
    }

    useEffect(()=>{
        LoadCategories();
        LoadProducts("http://fakestoreapi.com/products")
        GetCartCount();
    },[]);

    function handleCategoryChange(event){
         if(event.target.value=="all"){
             LoadProducts("http://fakestoreapi.com/products")
         } else {
            LoadProducts(`http://fakestoreapi.com/products/category/${event.target.value}`);
         }
    }

    function handleAddToCartClick(e){
        fetch(`http://fakestoreapi.com/products/${e.target.id}`)
        .then(response=> response.json())
        .then(data=>{
            cartItems.push(data);
            GetCartCount();
            alert(`${data.title}\nAdded to Cart`);
        })
    }

    function handleHomeClick(){
        LoadProducts("http://fakestoreapi.com/products");
    }

    return(
        <div className="container-fluid">
            <header className="d-flex justify-content-between p-2 bg-dark text-white mt-2">
                <div><h2>Fakestore</h2></div>
                <div>
                    <span className="me-4"><button onClick={handleHomeClick} className="btn text-white">Home</button></span>
                    <span className="me-4">Electronics</span>
                    <span className="me-4">Jewelery</span>
                    <span className="me-4">Men's Fashion</span>
                    <span className="me-4">Women's Fashion</span>
                </div>
                <div>
                    <span className="bi bi-search me-3"></span>
                    <span className="bi bi-heart me-3"></span>
                    <span className="bi bi-person me-3"></span>
                    <button data-bs-target="#cart" data-bs-toggle="modal" className="btn btn-light position-relative">
                        <span className="bi bi-cart me-3"></span>
                        <span className="badge rounded-circle bg-danger position-absolute"> {cartCount}</span>
                    </button>
                    <div className="modal fade" id="cart">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h2 className="text-primary">Your Cart Items</h2>
                                    <button data-bs-dismiss="modal" className="btn-close"></button>
                                </div>
                                <div className="modal-body">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>Preview</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cartItems.map(item=>
                                                    <tr>
                                                        <td>{item.title}</td>
                                                        <td><img src={item.image} width="50" height="50"/></td>
                                                        <td>{item.price}</td>
                                                        <td>
                                                            <button className="btn btn-danger">
                                                                <span className="bi bi-trash-fill"></span>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="mt-4 row">
                <nav className="col-2">
                   <div>
                      <label className="form-label">Select Category</label>
                      <div>
                        <select onChange={handleCategoryChange} className="form-select">
                            {
                                categories.map(category=>
                                     <option key={category} value={category}> {category.toUpperCase()} </option>
                                    )
                            }
                        </select>
                      </div>
                   </div>
                </nav>
                <main className="col-10 d-flex flex-wrap">
                   {
                      products.map(product=>
                         <div key={product.id} className="card m-2 p-2">
                            <img src={product.image} height="150" className="card-img-top" />
                            <div className="card-header">
                                <p className="card-title">{product.title}</p>
                            </div>
                            <div className="card-body">
                                <dl>
                                    <dt>Price</dt>
                                    <dd>{product.price}</dd>
                                    <dt>Rating</dt>
                                    <dd> <span className="bi bi-star-fill text-success"></span> {product.rating.rate} [{product.rating.count}]</dd>
                                </dl>
                            </div>
                            <div className="card-footer">
                                <button id={product.id} onClick={handleAddToCartClick} className="btn btn-danger w-100"> <span className="bi bi-cart4"></span> Add to Cart</button>
                            </div>
                         </div>
                        )
                   }
                </main>
            </section>
        </div>
    )
}
export default App;