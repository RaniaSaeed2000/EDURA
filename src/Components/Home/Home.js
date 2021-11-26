import React from 'react'
import './Home.css'
// import { useState } from "react"
// import { useAuth } from '../Context/AuthContexts'
// import { Grid } from "@material-ui/core"
import { Link } from 'react-router-dom'
// useAuth عشان اوصل للكرنت يوزرر:

import Article from '../Article/Article';
import Carsoul from '../Carsoul/Carsoul';


const Home = () => {
    // const [error, setError] = useState("")
    // const { currentUser, logout } = useAuth()
    // const history = useHistory()

    // async function handleLogout() {
    //     setError('')

    //     try {
    //         await logout()
    //         history.push('./login')
    //     }
    //     catch {
    //         setError('Faild to log out')
    //     }
    // }
    // const products = [
    //     { id: 1, name: 'shoes', description: "Running shoes", price: '50%', image: '' },
    //     { id: 2, name: 'MacBook', description: "Apple ", price: '50%' },

    // ];
    return (


        <div className="mr-0 ml-0 ">
            {/* <Link to="/logout">Logout</Link> */}


            <Carsoul />






            <main id="main">

                {/* <!-- ======= Featured Section ======= --> */}
                <section id="featured" className="featured">
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-4">
                                <div className="icon-box">
                                    <i className="fas fa-tasks mb-4"></i>

                                    <h3><Link to="">Lorem Ipsum</Link></h3>
                                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-4 mt-lg-0">
                                <div className="icon-box">
                                    <i className="fas fa-chart-bar mb-4"></i>
                                    <h3><Link to="">Dolor Sitema</Link></h3>
                                    <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eLink commodo consequat tarad limino ata</p>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-4 mt-lg-0">
                                <div className="icon-box">
                                    <i className="fas fa-binoculars mb-4"></i>
                                    <h3><Link to="">Sed ut perspiciatis</Link></h3>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nullLink pariatur</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>

                {/* <!--End Featured Section--> */}
            </main>



            {/*  Start About Area */}
            {/* <!-- ======= About Section ======= --> */}
            <section id="about" className="about">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-6">
                            <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 content">
                            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magnLink aliqua.
                            </p>
                            <ul>



                                <li><i className="far fa-check-circle"></i> Ullamco laboris nisi ut aliquip ex eLink commodo consequat.</li>
                                <li><i className="far fa-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                <li><i className="far fa-check-circle"></i> Ullamco laboris nisi ut aliquip ex eLink commodo consequat. Duis aute irure dolor in reprehenderit in voluptate tridetLink storacalaperdLink mastiro dolore eu fugiat nullLink pariatur.</li>
                            </ul>
                            <p>
                                Ullamco laboris nisi ut aliquip ex eLink commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nullLink pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpLink qui officiLink deserunt mollit anim id est laborum
                            </p>
                        </div>
                    </div>

                </div>
            </section>
            {/* <!-- End About Section --> */}

            {/*  End About Area */}



            {/*  Start Article Area */}

            <Article />
            {/*  End Article Area */}

            {/* ======= Services Section =======  */}

            <section id="services" className="services">
                <div className="container">
                    <div className="row article-header" >
                        <div className="col-lg-12 col-sm-12 col-md-12  ">
                            <hr style={{ "width": "25px", "margin": "auto" }} />
                            {/* <h4 >Hi</h4> */}
                            <h4 >Services </h4>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="icon-box">
                                <div className="icon"><i className="fab fa-dribbble"></i></div>
                                <h4><Link to="">Lorem Ipsum</Link></h4>
                                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                            <div className="icon-box">
                                <div className="icon"><i className="far fa-file-alt"></i></div>
                                <h4><Link to="">Sed ut perspiciatis</Link></h4>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                            <div className="icon-box">
                                <div className="icon"><i className="fas fa-tachometer-alt"></i></div>
                                <h4><Link to="">Magni Dolores</Link></h4>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                            <div className="icon-box">
                                <div className="icon"><i className="fas fa-globe-americas"></i></div>
                                <h4><Link to="">Nemo Enim</Link></h4>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                            <div className="icon-box">
                                <div className="icon"><i className="fab fa-slideshare"></i></div>
                                <h4><Link to="">Dele cardo</Link></h4>
                                <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                            <div className="icon-box">
                                <div className="icon"><i className="fas fa-archway"></i></div>
                                <h4><Link to="">Divera don</Link></h4>
                                <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            {/* End Services Section  */}







        </div>




    )
}

export default Home
