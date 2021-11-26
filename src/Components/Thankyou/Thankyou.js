import React from 'react'
import './Thankyou.css'
import { Link } from 'react-router-dom'
const Thankyou = () => {
    return (
        <section className="container middle ">
            <div className="row dive">
                {/* <div className=" "> */}
                <i className="fas fa-check-circle"></i>
                <img src="Images/green-check-mark-icon-png-13.jpg" width="200px" alt="" />
                <h1>Thank you</h1>
                <p className="your-order">Your order was successfuly completed</p>
                <Link to="/"> <button className="btn-back"
                    style={{
                        backgroundColor: '#e96b56',
                        color: 'white',
                        letterSpacing: '2px'

                    }}>back to shop</button></Link>
                {/* </div> */}
            </div>
        </section>
    )
}

export default Thankyou
