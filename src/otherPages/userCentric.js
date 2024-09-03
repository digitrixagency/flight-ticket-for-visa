import React from 'react';
import '../index.css';
import '../otherPages/userCentric.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import headSet from '../images/headSet.png';
import graph from '../images/graph.png';
import tabs from '../images/tabs.png';
import folder from '../images/folder.png';
import docu from '../images/docu.png';
import pie from '../images/pie.png';
const userCentric = () => {
    return (
        <div className='container-fluid userCentricBg mt-5 pt-5'>
            <div className='container pb-5'>
                <div className='container w-75'>
                    <div className='text-center mb-5'>
                        <h1>Why Choose Us</h1>
                        <h6 className='fw-normal'>Experience the best with our verifiable itineraries, competitive pricing, and 24/7 support. Enjoy secure, quick service that makes your visa application process smooth and stress-free.</h6>
                    </div>
                    <div className="row row-cols-1 row-cols-lg-3 g-0 g-lg-0">

                        <div className="col-md-4">
                            <div className="card cardBG card11">
                                <div className="card-body text-center">
                                    <img src={headSet} className="cardImage2" alt="..." />
                                    <h2>Verified Itineraries</h2>
                                    <p className="text-center px-3">We provide authentic flight and hotel bookings directly verifiable with airlines and hotels for visa success.</p>
                                </div>
                            </div>
                        </div>
            
                        <div className="col-md-4">
                            <div className="card cardBG card12">
                                <div className="card-body text-center">
                                    <img src={graph} className="cardImage2" alt="..." />
                                    <h2>Competitive Prices</h2>
                                    <p className="text-center px-3">Enjoy high-quality services at affordable rates, ensuring the best value for your money without compromising quality.</p>
                                </div>
                            </div>
                        </div>
            
                        <div className="col-md-4">
                            <div className="card cardBG card13">
                                <div className="card-body text-center">
                                    <img src={tabs} className="cardImage2" alt="..." />
                                    <h2>24/7 Support</h2>
                                    <p className="text-center px-3">Our dedicated support team is available around the clock to assist with any inquiries or issues you may have.</p>
                                </div>
                            </div>
                        </div>
            
                        <div className="col-md-4">
                            <div className="card cardBG card21">
                                <div className="card-body text-center">
                                    <img src={docu} className="cardImage2" alt="..." />
                                    <h2>Secure Service</h2>
                                    <p className="text-center px-3">We prioritize your security with encrypted transactions and secure payment methods to protect your personal information.</p>
                                </div>
                            </div>
                        </div>
            
                        <div className="col-md-4">
                            <div className="card cardBG card22">
                                <div className="card-body text-center">
                                    <img src={folder} className="cardImage2" alt="..." />
                                    <h2>Quick and Easy</h2>
                                    <p className="text-center px-3">Experience a streamlined process with fast delivery of documents, making your visa application hassle-free and efficient.</p>
                                </div>
                            </div>
                        </div>
            
                        <div className="col-md-4">
                            <div className="card cardBG card23">
                                <div className="card-body text-center">
                                    <img src={pie} className="cardImage2" alt="..." />
                                    <h2>Easy Process</h2>
                                    <p className="text-center px-3">Enjoy a straightforward ordering experience with clear instructions and a fast turnaround. Our streamlined process ensures you receive your documents promptly and hassle-free.</p>
                                </div>
                            </div>
                        </div>
            
                    </div>
                </div>
            </div>
        </div>
    );
};

export default userCentric;
