import React from 'react'
import Product from '../Product/Product'
// import { Grid, CartMedia, CardContent, Typography, IconButton } from '@mui/material'
import './Products.css'




const Products = ({ products, onAddToCart, totalItems }) => {




    return (



        // <div style={{ marginTop: "200px", height: "200px", width: "100px" }}>
        <div className="container products-con" >
            <div className="row head-con" ><h1 className="courses-head" style={{ fontFamily: 'cursive' }}>All Courses</h1></div>

            <div className="row">

                {products.map((product) => (
                    <div className="col-lg-4 col-md-5 col-sm-12  " key={product.id}>
                        <Product product={product} onAddToCart={onAddToCart} totalItems={totalItems} />
                    </div>
                ))}
            </div>
        </div>
        // </div>


        /* <main style={{marginTop:"200px", height:"200px", width:"100px"}}>
           <Grid container justify="center" spacing={4} style={{height:"200px", width:"100px"}}>
            {products.map((product)=>(
                <Grid item xs={12}sm={6} md={4} lg={3} key={product.id}>
                    <Product  product={product} onAddToCart={onAddToCart} totalItems={totalItems}/>
                </Grid>
        ))}
            </Grid>
        </main> */

    )
}

export default Products
