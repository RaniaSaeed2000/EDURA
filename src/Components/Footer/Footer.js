import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        // <f>



        <footer id="footer" className="container-fluid">


            <div className="footer-newsletter">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h4>Our Newsletter</h4>
                            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                        </div>
                        <div className="col-lg-6">
                            <form action="" method="post">
                                <input type="email" name="email" /><input type="submit" value="Subscribe" />
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <div className="footer-top">
                <div className="container " >
                    <div className="row">
                        {/* <div className="fot col-lg-3 col-md-6 col-sm-10">
                    <h5>About</h5>
                    <p><Link to="/about" className="f-links">About us</Link></p>
                    <p><Link to="/" className="f-links">Instrucrors</Link></p> */}
                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="fas fa-chevron-right"></i> <Link to="/">Home</Link></li>
                                <li><i className="fas fa-chevron-right"></i> <Link to="/about">About us</Link></li>
                                <li><i className="fas fa-chevron-right"></i> <Link to="/">Services</Link></li>
                                <li><i className="fas fa-chevron-right"></i> <Link to="/">Terms of service</Link></li>
                                <li><i className="fas fa-chevron-right"></i> <Link to="/">Privacy policy</Link></li>
                            </ul>
                        </div>



                        {/* </div> */}

                        {/* 
                <div className="fot col-lg-3 col-md-6 col-sm-10">
                    <h5>Get Help</h5>
                    <p><Link to="/" className="f-links">Help Center</Link></p>
                    <p><Link to="/contact" className="f-links">Contact us</Link></p>



                </div> */}

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><i className="fas fa-chevron-right"></i> <Link to="/">Web Design</Link></li>
                                <li><i className="fas fa-chevron-right"></i> <Link to="/">Web Development</Link></li>
                                <li><i className="fas fa-chevron-right"></i> <Link to="/">Product Management</Link></li>
                                <li><i className="fas fa-chevron-right"></i> <Link to="/">Marketing</Link></li>
                                <li><i className="fas fa-chevron-right"></i> <Link to="/">Graphic Design</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                        <ul>
                            <h5>Get Help</h5>
                            <li><i className="fas fa-chevron-right"></i><Link to="/" className="f-links">Help Center</Link></li>
                            <li><i className="fas fa-chevron-right"></i><Link to="/contact" className="f-links">Contact us</Link></li>
                            <li><i className="fas fa-chevron-right"></i> <Link to="/contact">Contact</Link></li>
                            </ul>



                        </div>

                        <div className="col-lg-3 col-md-6 footer-info site_n ">
                            <h3>About EDURA</h3>
                            <img src="/Imges/EDURA_logo.png"  alt="lo_img"/>

                            <div className="social-links mt-3">
                                <Link to="/" className="twitter"><i className="fab fa-twitter"></i></Link>
                                <Link to="/" className="facebook"><i className="fab fa-facebook-f"></i></Link>
                                <Link to="/" className="instagram"><i className="fab fa-instagram"></i></Link>
                                <Link to="/" className="google-plus"><i className="fab fa-skype"></i></Link>
                                <Link to="/" className="linkedin"><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>



                        {/* <div className="fot col-lg-3 col-md-6 col-sm-10">
                    <h5>Social</h5>
                    <p><Link to="/" className="f-links">FaceBook</Link></p>
                    <p><Link to="/" className="f-links">Github</Link></p>
                    <p><Link to="/" className="f-links">Gmail</Link></p>
                    <p><Link to="/" className="f-links">Youtube</Link></p>




                </div>
                <div className="fot  col-lg-3 col-md-6 col-sm-10 site_n">
                    <img src={"/Imges/EDURA_logo.png"} style={{ width: "100px" }} alt="lo_img" />

                    <p className="Copyright">Copyright © 2018 – 2021 Upmostly</p>
                </div> */}


                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    &copy; Copyright <strong><span style={{color:'#e96b56'}}>  EDURA</span></strong>. All Rights Reserved
                </div>
            </div>
        </footer>


    )
}

export default Footer
