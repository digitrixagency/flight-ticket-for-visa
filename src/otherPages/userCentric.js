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
                        <h1>Make every step user-centric</h1>
                        <h6 className='fw-normal'>Lorem ipsum dolor sit amet, consectetur adipis elit.</h6>
                    </div>
                    <div className="row row-cols-1 row-cols-lg-3 g-0 g-lg-0">

                        <div className="col-md-4">
                            <div className="card cardBG card11">
                                <div className="card-body text-center">
                                    <img src={headSet} className="cardImage2" alt="..." />
                                    <h2>Support</h2>
                                    <p className="text-center px-3">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
                                </div>
                            </div>
                        </div>
            
                        <div className="col-md-4">
                            <div className="card cardBG card12">
                                <div className="card-body text-center">
                                    <img src={graph} className="cardImage2" alt="..." />
                                    <h2>Sales</h2>
                                    <p className="text-center px-3">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
                                </div>
                            </div>
                        </div>
            
                        <div className="col-md-4">
                            <div className="card cardBG card13">
                                <div className="card-body text-center">
                                    <img src={tabs} className="cardImage2" alt="..." />
                                    <h2>Onboarding</h2>
                                    <p className="text-center px-3">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
                                </div>
                            </div>
                        </div>
            
                        <div className="col-md-4">
                            <div className="card cardBG card21">
                                <div className="card-body text-center">
                                    <img src={docu} className="cardImage2" alt="..." />
                                    <h2>Product</h2>
                                    <p className="text-center px-3">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
                                </div>
                            </div>
                        </div>
            
                        <div className="col-md-4">
                            <div className="card cardBG card22">
                                <div className="card-body text-center">
                                    <img src={folder} className="cardImage2" alt="..." />
                                    <h2>Quality</h2>
                                    <p className="text-center px-3">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
                                </div>
                            </div>
                        </div>
            
                        <div className="col-md-4">
                            <div className="card cardBG card23">
                                <div className="card-body text-center">
                                    <img src={pie} className="cardImage2" alt="..." />
                                    <h2>Result</h2>
                                    <p className="text-center px-3">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
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
