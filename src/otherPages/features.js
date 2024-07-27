import React from 'react';
import '../index.css';
import '../otherPages/features.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../images/tickets.png';
import img2 from '../images/earth.png';
import img3 from '../images/csupport.png';
import img4 from '../images/payment.png';
import img5 from '../images/badge.png';
import img6 from '../images/bill.png';
const Features = () => {
    return (
        <div className='container-fluid featuresBg mt-5 pt-5'>
            <div className='container px-5 pb-5'>
                <div className='container px-5'>

                    {/* <div className="row row-cols-2 row-cols-lg-3 g-3 g-lg-5 ms-4 me-5 mt-5"> */}
                    <div className="row row-cols-2 row-cols-lg-3 g-3 g-lg-3">
                        <div className="col-md-4">
                            <div className="card cardDiv d-flex align-items-center">
                                <img src={img1} className="card-img-top" alt="..." />
                                <div className="card-body text-center d-flex align-items-center flex-column">
                                    <h2>Easy Reservations</h2>
                                    <p className="card-text">Book flights, hotels, and complete travel packages with ease through our user-friendly platform.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card cardDiv d-flex align-items-center">
                                <img src={img2} className="card-img-top" alt="..." />
                                <div className="card-body text-center d-flex align-items-center flex-column">
                                    <h2>Verified Itineraries</h2>
                                    <p className="card-text">Get authentic and verifiable travel itineraries accepted by embassies worldwide..</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="card cardDiv d-flex align-items-center">
                                <img src={img3} className="card-img-top" alt="..." />
                                <div className="card-body text-center d-flex align-items-center flex-column">
                                    <h2>Comprehensive Support</h2>
                                    <p className="card-text">Our team provides 24/7 support to assist you with all your travel and visa needs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="card cardDiv d-flex align-items-center">
                                <img src={img4} className="card-img-top" alt="..." />
                                <div className="card-body text-center d-flex align-items-center flex-column">
                                    <h2>Secure Payments</h2>
                                    <p className="card-text">Make payments safely and securely through our encrypted payment gateway options..</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="card cardDiv d-flex align-items-center">
                                <img src={img5} className="card-img-top" alt="..." />
                                <div className="card-body text-center d-flex align-items-center flex-column">
                                    <h2>Best Price Deals</h2>
                                    <p className="card-text">Enjoy competitive pricing on all our travel services, ensuring you get the best value for your money..</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="card cardDiv d-flex align-items-center">
                                <img src={img6} className="card-img-top" alt="..." />
                                <div className="card-body text-center d-flex align-items-center flex-column">
                                    <h2>Flexible Policies</h2>
                                    <p className="card-text">Benefit from flexible booking and cancellation policies designed to accommodate your travel plans.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
