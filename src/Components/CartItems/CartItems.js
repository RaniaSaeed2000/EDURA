import React from 'react'
import './Cartitem.css'
export default function CartItems({ item, onUpdateCart, onRemoveCart }) {
    return (
        <div>
            
            {/* <div className="row"> */}
            {/* <img src={item.image.url} width="200px" /> */}

            <div className="card mt-5 course-card  " >
                <img
                    src={item.image.url}
                    className="card-img-top img-fluid"
                    alt="..."
                    style={{ width: "300px", height: "300px" }}
                />
                <div className="card-body p-2">
                    <h6 className="card-title" style={{fontFamily:"cursive" }}>{item.name}</h6>
                    <p className="card-text">
                        {item.discription}
                    </p>
                    <p> ${item.price.formatted}</p>
             
                    <button className="btn cart-btn" type="button" onClick={() => onUpdateCart(item.id, item.quantity + 1)}>+</button>
                    <button className="btn cart-btn"type="button" >{item.quantity}</button>
                    <button className="btn cart-btn"type="button" onClick={() => onUpdateCart(item.id, item.quantity - 1)}>-</button>



                    <button className="btn cart-btn" type="button" onClick={() => onRemoveCart(item.id)}>Remove item</button>
               
                </div>
            </div>
            {/* </div>  */}
         
        </div>
    )
}