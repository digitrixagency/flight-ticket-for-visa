import React from 'react';
import '../index.css';
import '../otherPages/Reservation.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
const Reservation = () => {
    return (
        <div className='container-fluid reservationBg mt-5 pt-5'>
            <div className='container pb-5'>
                <div className='container w-75'>
                    <div className='text-center mb-5 mx-5'>
                        <h1>How To Get Flight Reservation for Visa</h1>
                        <h6 className='fw-normal'>Make birthday wishes extra special. With just a few clicks, you can easily add text with your own heartfelt messages and personal notes, making the birthday greeting truly unique and personalized. Spread joy and make someone's day truly special by customizing your birthday wishes with personalized text.</h6>
                    </div>
                    <div className="row row-cols-1 row-cols-lg-3 g-3 g-lg-3">

                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p className="cardTextWidth text-start px-3">Take authentic feedbacks from customers of your app. Build a quick list.</p>
                                    <img src={img1} className="cardImage" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p className="cardTextWidth text-start px-3">Make quick fixes based on the feedbacks you’ve recived. With a happy smile.</p>
                                    <img src={img2} className="cardImage" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p className="cardTextWidth text-start px-3">Enjoy more than 10x revenue with real-time conversions. Grow your business.</p>
                                    <img src={img3} className="cardImage" alt="..." />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reservation;
