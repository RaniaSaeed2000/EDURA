import React from 'react'
// import { Card, CardMedia, Typography, CardContent, IconButton } from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'
import './Product.css'
import {Link} from 'react-router-dom'


const Product = ({ product, onAddToCart }) => {


    return (
        <div className=""  >


           
                <div className="card mt-5 course-card " >
                    <img
                        src={product.image.url}
                        className="card-img-top img-fluid"
                        alt="..."
                        style={{width:"300px" ,height:"250px"}}
                    />
                    <div className="card-body">
                        {/* <h5 className="card-">{product.title}</h5> */}
                        <h6 className="card-title">{product.name}</h6>
                        {/* {product.description} */}

                      
                        
                        <p> ${product.price.formatted}</p>
                        <AddShoppingCart onClick={() => onAddToCart(product.id, 1)}style={{ cursor: "pointer"}}/>
                        <div className="mt-5">
                        <Link to="/thanks"><button type="button " className="btn "
                        style={{
                            backgroundColor: '#e96b56',
                            color: 'white',
                            letterSpacing: '2px'

                        }}
                    >More details </button></Link>
                    </div>
                        {/* <i className="fas fa-shopping-cart" ></i> */}
                        {/* <a href="#!" className="btn btn-primary">Button</a> */}
                    </div>
                </div>
       


            {/* <Card style={{ width: "300px", height: "200px" }}>
                <CardMedia image={product.image.url} title={product.name}>
                    {product.image.source}
                </CardMedia>
                <CardContent>
                    <Typography>
                        {product.name}
                    </Typography>
                    <Typography>
                        ${product.price.formatted}
                    </Typography>
                </CardContent>


                <IconButton aria-label="Add to Cart " onClick={() => onAddToCart(product.id, 1)}>Add
                    <AddShoppingCart />
                </IconButton>




            </Card> */}
        </div>
    )
}

export default Product
