import React from 'react'
// import { Link } from 'react-router-dom'
import './Carsoul.css'

const Carsoul = () => {
    return (
        <div id="hero">
            <div className="hero-container">



                <div id="heroCarousel" className="carousel slide " data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#heroCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#heroCarousel" data-slide-to="1"></li>
                        <li data-target="#heroCarousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner" style={{ background: 'url(assets/img/slide/slide-1.jpg)' }}>
                        <div className="carousel-item active">
                            {/* <img src=".." className="d-block w-100" alt="..." /> */}
                            <div className="carousel-container">
                                <div className="carousel-content">
                                    <h2 className="text-h mt-5">
                                        Take the first step to learn with <span className="sitename">EDURA</span>
                                    </h2>
                                    <p className="mx-auto text_p  mt-20 mb-40">
                                        In the history of modern astronomy, there is probably no one
                                        greater leap forward than the building and launch of the space
                                        telescope known as the Hubble.
                                    </p>
                                    {/* <a href="" className="btn-get-started animate__animated animate__fadeInUp">Read More</a> */}
                                    <div className="div-btn1"> <button className="btn1 btn-get-started animate__animated animate__fadeInUp" >Start Now</button></div>

                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" style={{ background: 'url(assets/img/slide/slide-2.jpg)' }}>
                            {/* <img src="..." className="d-block w-100" alt="..." /> */}


                            <div className="carousel-container">
                                <div className="carousel-content">
                                    <h2 className="text-h mt-5">
                                        Lorem <span className="sitename">Ipsum Dolor</span>
                                    </h2>
                                    <p className="mx-auto text_p  mt-20 mb-40">
                                        Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.
                                    </p>
                                    {/* <a href="" className="btn-get-started animate__animated animate__fadeInUp">Read More</a> */}
                                    <div className="div-btn1"> <button className="btn1 btn-get-started animate__animated animate__fadeInUp" >Start Now</button></div>

                                </div>
                            </div>

                        </div>
                        <div className="carousel-item" style={{ background: 'url(assets/img/slide/slide-3.jpg)' }}>
                            {/* <img src="..." className="d-block w-100" alt="..." /> */}



                            <div className="carousel-container">
                                <div className="carousel-content">
                                    <h2 className="text-h mt-5">
                                        Sequi ea <span className="sitename">Dime Lara</span>
                                    </h2>
                                    <p className="mx-auto text_p  mt-20 mb-40">
                                        Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.
                                    </p>
                                    {/* <a href="" className="btn-get-started animate__animated animate__fadeInUp">Read More</a> */}
                                    <div className="div-btn1"> <button className="btn1 btn-get-started animate__animated animate__fadeInUp" >Start Now</button></div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-target="#heroCarousel" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-target="#heroCarousel" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </button>
                </div>
            </div>




            {/* ======= Hero Section =======  */}
            {/* <section id="hero">
                <div classNameName="hero-container">
                    <div id="heroCarousel" data-bs-interval="5000" classNameName="carousel slide carousel-fade" data-bs-ride="carousel">

                        <ol classNameName="carousel-indicators" id="hero-carousel-indicators"></ol>

                        <div classNameName="carousel-inner" role="listbox">

                            
                            <div classNameName="carousel-item active" style={{ background: 'url(assets/img/slide/slide-1.jpg)' }}>
                                <div classNameName="carousel-container">
                                    <div classNameName="carousel-content">
                                        <h2 classNameName="animate__animated animate__fadeInDown">Welcome to <span>Eterna</span></h2>
                                        <p classNameName="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                                        <Link to="" classNameName="btn-get-started animate__animated animate__fadeInUp">Read More</Link>
                                    </div>
                                </div>
                            </div>

                          
                            <div classNameName="carousel-item" style={{ background: 'url(assets/img/slide/slide-2.jpg)' }}>
                                <div classNameName="carousel-container">
                                    <div classNameName="carousel-content">
                                        <h2 classNameName="animate__animated fanimate__adeInDown">Lorem <span>Ipsum Dolor</span></h2>
                                        <p classNameName="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                                        <Link to="" classNameName="btn-get-started animate__animated animate__fadeInUp">Read More</Link>
                                    </div>
                                </div>
                            </div>

                        
                            <div classNameName="carousel-item" style={{ background: 'url(assets/img/slide/slide-3.jpg)' }}>
                                <div classNameName="carousel-container">
                                    <div classNameName="carousel-content">
                                        <h2 classNameName="animate__animated animate__fadeInDown">Sequi ea <span>Dime Lara</span></h2>
                                        <p classNameName="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                                        <Link to="" classNameName="btn-get-started animate__animated animate__fadeInUp">Read More</Link>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <a classNameName="carousel-control-prev" href="heroCarousel" role="button" data-bs-slide="prev">
                            <span classNameName="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                        </a>

                        <a classNameName="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                            <span classNameName="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                        </a>

                    </div>
                </div>
            </section> */}
            {/* End Hero  */}







        </div>
    )
}

export default Carsoul
