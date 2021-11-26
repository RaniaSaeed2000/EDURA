import React from 'react'
// import useStyles from './navstyle'
// import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { IconButton , Badge } from '@material-ui/core';

import { Link, useLocation } from 'react-router-dom'
import { ShoppingCart } from '@mui/icons-material';
// import Box from '@material-ui/core/Box';
import './navbar.css'

const Navbar = ({totalItems}) => {
  // const classes = useStyles();
  const location = useLocation();



  return (
    <div>






      <>







        {/* <AppBar position="" className={classes.appBar} color="default" >
          <Toolbar>
            <Typography to="/" variant="h6" className={classes.title} color="inherit" >
              {/* Put logo and website name here */}
        {/* <Link className="logo-link" to="/"> <img src={"/Imges/navlogo.png"} alt="Edura" height="60px" className={classes.image} />
                EDURA
              </Link>
            </Typography>

            <div className={classes.grow}></div>
            <Box m={2} ><Link to="/contact" className="nav_links">Contact</Link></Box>

            <Box m={2}><Link to="/products" className="nav_links">All Courses</Link></Box>


            <div className={classes.button}>


              <Link to="/cart">go to cart</Link>

              {location.pathname === '/' && (
                // the previous line mean : only if we in the home toute show button if not do not show button
                <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                  {/* <Badge  color="secondary" badgeContent={totalItems}>
                  <ShoppingCart/>
                  </Badge> */}
        {/* <Badge color="secondary" >
                    <ShoppingCart />
                  </Badge>
                </IconButton>)}

            </div>

          </Toolbar>

        </AppBar> */}
      </>






      <nav className="navbar navbar-expand-lg navbar-light bg-light navb">
        <Link className="logo-link" to="/"> <img src={"/Imges/EDURA_logo.png"} alt="Edura" height="60px" className="image" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className=" logo-link" to="/">Edura</Link>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav_links" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav_links " to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav_links " to="/products">All Courses</Link>
            </li>
            <li className="nav-item">
              <Link className=" nav_links" to="/contact">Contact</Link>
            </li>
           
          </ul>

          {location.pathname === '/'   && (
            
            // the previous line mean : only if we in the home toute show button if not do not show button
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              {/* <Badge  color="secondary" badgeContent={totalItems}>
                  <ShoppingCart/>
                  </Badge> */}
              <Badge color="secondary" badgeContent={totalItems} >
                <ShoppingCart  color="action" />
              </Badge>
            </IconButton>)}

          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn search-btn my-2 my-sm-0 ml-2" style={{fontFamily:"cursive" , color:'#e96b56'}} type="submit">Search</button>
            <Link to="/signup"><button className="btn search-btn my-2 my-sm-0 ml-2" type="submit" style={{fontFamily:"cursive" , color:'#e96b56'}}>Sign Up</button>  </Link>

          </form>
        </div>
      </nav>

    



    </div >


  )
}

export default Navbar
