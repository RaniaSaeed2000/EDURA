import React from 'react'
import CartItem from '../CartItems/CartItems'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Cart({ cart, handleUpdateCart, handleRemoveCart, handleEmptyCart }) {

    const Emptycart = () => (
        <div className="container ">
            <div className="row justify-content-center mb-5">
                <h1 style={{ marginTop: "150px", marginBottom: "50px", color: '#e96b56', textAlign: 'center' }}>No items in shopping cart</h1>
                <img src="/Imges/EmptyCart.png" alt="empty basket" style={{ height: '300px', width: '350px' }} />
                <div>
                    <Link to="/"> <button className="btn-back"
                        style={{
                            backgroundColor: '#e96b56',
                            color: 'white',
                            letterSpacing: '2px'

                        }}>back to shop</button></Link>
                </div>

            </div>

        </div>

    )


    const FilledCard = () => (
        <div >


            {/* <div className=" " style={{ maxWidth: "400px" }}> */}

            <div className=" container " style={{ minHeight: "100vh", marginTop: "50px" }}>
              

                <div className="row">
         

                    {cart.line_items.map((item) => (


                        <div key={item.id} className="col-lg-3 col-md-5 col-sm-10  ml-5">
                            <CartItem item={item} onUpdateCart={handleUpdateCart} onRemoveCart={handleRemoveCart} />
                        </div>

                    ))
                    }
                </div>

                <div className="row justify-content-start mt-5 mb-5">
                <div className="col-lg-5 col-md-3 col-sm-12 ">
                    <button type="button " className="btn "
                        style={{
                            backgroundColor: '#e96b56',
                            color: 'white',
                            letterSpacing: '2px'

                        }}
                        onClick={handleEmptyCart}>Emptycart</button>
                        </div>
                </div>
              


             




                <div className="row d-flex justify-content-around justify-content-sm-between justify-content-md-between mb-5"  >

                {/* <div className="row "> */}
                {/* <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography> */}
                <div className="col-lg-5 col-md-3 col-sm-12 "><h4>Total Amount : {cart.subtotal.formatted_with_symbol}</h4></div>
                <div className="col-lg-5 col-md-3 col-sm-12">
                    <Link to="/thanks"><button type="button " className="btn "
                        style={{
                            backgroundColor: '#e96b56',
                            color: 'white',
                            letterSpacing: '2px'

                        }}
                    >CheckOut</button></Link>
                </div>


            
            </div>



                {/* </div> */}
            </div >
          
        </div >


    )
    return (
        <div>
            {/* {console.log(cart.line_items[0].id)} */}


            <h1 style={{ marginTop: "10px", marginBottom: "20px", textAlign: 'center', color: '#e96b56', fontFamily: "cursive" }}>Your shopping cart</h1>


            {!cart.total_items ? <Emptycart /> : <FilledCard />}

        </div>
    )
}