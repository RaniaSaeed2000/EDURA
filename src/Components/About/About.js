import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const About = () => {
    return (

        <div className=" con-about">

            {/*  ======= Breadcrumbs =======  */}
            <section id="breadcrumbs" className="breadcrumbs">
                <div className="container">

                    <ol>
                        <li><Link to="/" style={{color:"#e96b56"}}>Home</Link></li>
                        <li>About Us</li>
                    </ol>
                    <h2>About Us</h2>

                </div>
            </section>
            {/* <!-- End Breadcrumbs --> */}

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



            {/* <!-- ======= Testimonials Section ======= --> */}
            <section id="testimonials" className="testimonials">
                <div className="container">

                    <div className="section-title">
                        <h2>Testimonials</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row">

                        <div className="col-lg-6">
                            <div className="testimonial-item">
                                <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt=""/>
                                <h3>Saul Goodman</h3>
                                <h4>Ceo &amp; Founder</h4>
                                <p>
                                <i className ="bx bxs-quote-alt-left quote-icon-left"></i>
                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.Accusantium quam, ultricies eget id, aliquam eget nibh et.Maecen aliquam, risus at semper.
                                <i className ="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="testimonial-item mt-4 mt-lg-0">
                                <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt=""/>
                                <h3>Sara Wilsson</h3>
                                <h4>Designer</h4>
                                <p>
                                <i className ="bx bxs-quote-alt-left quote-icon-left"></i>
                                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                <i className ="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="testimonial-item mt-4">
                                <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt=""/>
                                <h3>Jena Karlis</h3>
                                <h4>Store Owner</h4>
                                <p>
                                <i className ="bx bxs-quote-alt-left quote-icon-left"></i>
                                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                <i className ="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="testimonial-item mt-4">
                                <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt=""/>
                                <h3>Matt Brandon</h3>
                                <h4>Freelancer</h4>
                                <p>
                                <i className ="bx bxs-quote-alt-left quote-icon-left"></i>
                                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                <i className ="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="testimonial-item mt-4">
                                <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt=""/>
                                <h3>John Larson</h3>
                                <h4>Entrepreneur</h4>
                                <p>
                                <i className ="bx bxs-quote-alt-left quote-icon-left"></i>
                                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                <i className ="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="testimonial-item mt-4">
                                <img src="assets/img/testimonials/testimonials-6.jpg" className="testimonial-img" alt=""/>
                                <h3>Emily Harison</h3>
                                <h4>Store Owner</h4>
                                <p>
                                <i className ="bx bxs-quote-alt-left quote-icon-left"></i>
                                Eius ipsam praesentium dolor quaerat inventore rerum odio.Quos laudantium adipisci eius.Accusamus qui iste cupiditate sed temporibus est aspernatur.Sequi officiis ea et quia quidem.
                                <i className ="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            {/* <!-- End Testimonials Section --> */}



        </div>

    )
}

export default About
