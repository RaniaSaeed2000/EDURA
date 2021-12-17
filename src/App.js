import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { commerce } from "./Lib/Commersejs"
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Navbar from './Components/Navbar/Navbar'
import Article from './Components/Article/Article'
import Footer from './Components/Footer/Footer'
import Products from './Components/Products/Products'
import Cart from './Components/Cart/Cart'
import SignUp from './Components/Authentication/SignUp'
import Login from './Components/Authentication/Login'
import Logout from './Components/Authentication/Logout'
import ForgotPassword from './Components/Authentication/ForgotPassword'
import { AuthProvider } from './Components/Context/AuthContexts'
import PrivateRoute from './Components/Authentication/PrivateRoute'
import Thankyou from './Components/Thankyou/Thankyou'




const App = () => {


  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data)

    // {data.map((val,key)=>{
    //   return <div key={key}>{val.id}</div>
    // })}
    console.log(data)
  }




  // const fetchProducts = async () => {
  //     const {data:products} = await commerce.products.list();
  //     const { data: categoriesData } = await commerce.categories.list();
  // console.log({products});
  //     const productsPerCategory = categoriesData.reduce((acc, category) => {
  //       return [
  // acc initial value in empty array 
  //         ...acc,
  //         {
  //           ...category,
  //           productsData: products.filter((product) =>
  //             product.categories.find((cat) => cat.id === category.id)
  //             // find to find where is the product
  //             // this will return only product related to this catigory (bu id s)

  //           ),
  //         },
  //       ];
  //     }, []);



  // setProducts(productsPerCategory);

  // {data.map((val,key)=>{
  //   return <div key={key}>{val.id}</div>
  // })}

const fetchCart = async () => {
  setCart(await commerce.cart.retrieve()) //  عمل سله فارغه
}

const handleAddToCart = async (productid, quantity) => {
  const { cart } = await commerce.cart.add(productid, quantity)
  setCart(cart)

}



const handleUpdateCart = async (productid, quantity) => {
  const { cart } = await commerce.cart.update(productid, { quantity });
  setCart(cart)
}


const handleRemoveCart = async (productid) => {
  const { cart } = await commerce.cart.remove(productid);
  setCart(cart);
}

const handleEmptyCart = async () => {
  const { cart } = await commerce.cart.empty();
  setCart(cart);
}
useEffect(() => {
  fetchProducts();
  fetchCart();

}, [])
console.log(cart)
return (



  <BrowserRouter>
    <Navbar totalItems={cart.total_items} />

    {/* <Contact/> */}

    <AuthProvider>

      <Switch>
      <React.Fragment>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/article" component={Article} exact />
        <Route path="/thanks" component={Thankyou} exact />
      





        <Route exact path="/cart">
          <Cart cart={cart} handleUpdateCart={handleUpdateCart} handleRemoveCart={handleRemoveCart} handleEmptyCart={handleEmptyCart} />
        </Route>
        <Route exact path="/products">
          <Products products={products} onAddToCart={handleAddToCart} />
        </Route>
    
            {/* <PrivateRoute exact path="/update-profile" component={UpdateProfile} /> */}
            <Route path="/signup" component={SignUp} exact />
            <Route path="/login" component={Login} exact />
            <PrivateRoute path="/logout" component={Logout} exact />
            <Route path="/forgot-password" component={ForgotPassword} exact />
        
        {/* <Route component={NotFound} exact/> */}






</React.Fragment>
      </Switch>

    </AuthProvider>

    <Footer />

  </BrowserRouter>
)
}

export default App
