import React from 'react';
import './index.css';
import './otherPages/steps.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FAQ from './images/FAQ.png';
import { FaCheckCircle } from "react-icons/fa";

const footer = () => {
    const handleClick = (itemId) => {
        // var mainDiv = document.getElementById('mainDiv'+itemId);
        console.log('Item clicked:', itemId);
    };

    return (
        <>
            <div className='container-fluid footerBg1 pt-5'>
                <div className='container pb-5'>
                    <div className='container footerFoot'>
                        <div className='text-center mb-5'>
                            <h1 className='plansHeader'>Pricing & Plans</h1>
                            <p className='plansSubHeader'>Amet minim mollit non deserunt ullamco.</p>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <div className='col-4 plansBG p-0 mx-3' id='mainDiv1'>
                                <div className='text-start px-4 py-3 plansBG2' id='subDiv1'>
                                    <p className='planTitle'>Flight Reservation</p>
                                    <p className='planPrice'><span className='planAmount'>$15</span>/ Per Person</p>
                                    <p className='planText'>Verifiable on Airlines Website.</p>
                                    <hr className='oneLine' />
                                    <ul className='PlanList ps-0'>
                                        <li><FaCheckCircle size={15} color="rgba(113, 113, 122, 1)" />&nbsp;Unlimited Flights</li>
                                        <li><FaCheckCircle size={15} color="rgba(113, 113, 122, 1)" />&nbsp;Airlines Confirmation</li>
                                        <li><FaCheckCircle size={15} color="rgba(113, 113, 122, 1)" />&nbsp;Upto 4 Corrections</li>
                                        <li><FaCheckCircle size={15} color="rgba(113, 113, 122, 1)" />&nbsp;Confirmed PNR</li>
                                        <li><FaCheckCircle size={15} color="rgba(113, 113, 122, 1)" />&nbsp;Multi Traveler Discount</li>
                                        <li><FaCheckCircle size={15} color="rgba(113, 113, 122, 1)" />&nbsp;Free Cancellations</li>
                                        <li><FaCheckCircle size={15} color="rgba(113, 113, 122, 1)" />&nbsp;No Obligations</li>
                                        <li><FaCheckCircle size={15} color="rgba(113, 113, 122, 1)" />&nbsp;Verifiable Flight Itinerary</li>
                                        <li><FaCheckCircle size={15} color="rgba(113, 113, 122, 1)" />&nbsp;Free Cover & NOC Letter</li>
                                        <li><FaCheckCircle size={15} color="rgba(113, 113, 122, 1)" />&nbsp;Free Urgent Delivery</li>
                                        <li><FaCheckCircle size={15} color="rgba(113, 113, 122, 1)" />&nbsp;Upto 2 Weeks Validity</li>
                                        <li><FaCheckCircle size={15} color="rgba(113, 113, 122, 1)" />&nbsp;Worldwide Confirmation</li>
                                    </ul>

                                    <div className='orderDiv' id='orderDiv1'>
                                        <button className='orderBtn py-3' id='orderBtn1' onClick={() => handleClick(1)}>Order Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 plansBG p-0 mx-3 plansBgImp' id='mainDiv2'>
                                <div className='text-start px-4 py-3 plansBG2 plansBorderImp' id='subDiv2'>
                                    <p className='planTitle'>Flight + &nbsp; Hotel</p>
                                    <p className='planPrice'><span className='planAmount'>$24</span>/ Per Person</p>
                                    <p className='planText'>(Combo Package)</p>
                                    <hr className='oneLine' />
                                    <ul className='PlanList ps-0'>
                                        <li><FaCheckCircle size={15} color="rgba(113, 113, 122, 1)" />&nbsp;Unlimited Flights & Hotels</li>
                                        <li><FaCheckCircle size={15} color="rgba(113, 113, 122, 1)" />&nbsp;Upto 4 Corrections</li>
                                        <li><FaCheckCircle size={15} color="rgba(113, 113, 122, 1)" />&nbsp;100% Confirm bookings</li>
                                        <li><FaCheckCircle size={15} color="rgba(113, 113, 122, 1)" />&nbsp;Free Cancellations</li>
                                        <li><FaCheckCircle size={15} color="rgba(113, 113, 122, 1)" />&nbsp;No Obligations</li>
                                        <li><FaCheckCircle size={15} color="rgba(113, 113, 122, 1)" />&nbsp;Verifiable Bookings</li>
                                        <li><FaCheckCircle size={15} color="rgba(113, 113, 122, 1)" />&nbsp;Upto 2 Weeks Validity</li>
                                        <li><FaCheckCircle size={15} color="rgba(113, 113, 122, 1)" />&nbsp;Free Cover & NOC Letter</li>
                                        <li><FaCheckCircle size={15} color="rgba(113, 113, 122, 1)" />&nbsp;Free Urgent Delivery</li>
                                        <li><FaCheckCircle size={15} color="rgba(113, 113, 122, 1)" />&nbsp;Worldwide Confirmation</li>
                                    </ul>

                                    <div className='orderDiv orderDivImp' id='orderDiv2'>
                                        <button className='orderBtn py-3 orderBtnImp' id='orderBtn2' onClick={() => handleClick(2)}>Order Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 plansBG p-0 mx-3' id='mainDiv3'>
                                <div className='text-start px-4 py-3 plansBG2' id='subDiv3'>
                                    <p className='planTitle'>Hotel Booking</p>
                                    <p className='planPrice'><span className='planAmount'>$15</span>/ Per Person</p>
                                    <p className='planText'>Proof of Accommodation</p>
                                    <hr className='oneLine' />
                                    <ul className='PlanList ps-0'>
                                        <li><FaCheckCircle size={15} color="rgba(113, 113, 122, 1)" />&nbsp;Unlimited Hotels</li>
                                        <li><FaCheckCircle size={15} color="rgba(113, 113, 122, 1)" />&nbsp;Verify by Email & Phone</li>
                                        <li><FaCheckCircle size={15} color="rgba(113, 113, 122, 1)" />&nbsp;Upto 4 Corrections</li>
                                        <li><FaCheckCircle size={15} color="rgba(113, 113, 122, 1)" />&nbsp;Upto 2 Weeks Validity</li>
                                        <li><FaCheckCircle size={15} color="rgba(113, 113, 122, 1)" />&nbsp;Multi Traveler Discount</li>
                                        <li><FaCheckCircle size={15} color="rgba(113, 113, 122, 1)" />&nbsp;Free Cancellations</li>
                                        <li><FaCheckCircle size={15} color="rgba(113, 113, 122, 1)" />&nbsp;100% Valid Booking</li>
                                        <li><FaCheckCircle size={15} color="rgba(113, 113, 122, 1)" />&nbsp;No Obligations</li>
                                        <li><FaCheckCircle size={15} color="rgba(113, 113, 122, 1)" />&nbsp;Free Cover & NOC Letter</li>
                                        <li><FaCheckCircle size={15} color="rgba(113, 113, 122, 1)" />&nbsp;Free Urgent Delivery</li>
                                        <li><FaCheckCircle size={15} color="rgba(113, 113, 122, 1)" />&nbsp;Worldwide Confirmation</li>
                                    </ul>

                                    <div className='orderDiv' id='orderDiv3'>
                                        <button className='orderBtn py-3' id='orderBtn3' onClick={() => handleClick(3)}>Order Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='hrStyle' />
            <div className='container-fluid footerBg2 pt-5'>
                <div className='container pb-5'>
                    <div className='container footerFoot'>
                        <div className='row'>
                            <div className='col-5'>
                                <div className='text-center'>
                                    <p className='logoImg text-center'>Frequently Asked Questions?</p>
                                    <img src={FAQ} className='FAQImg mt-5 pt-4' />
                                </div>
                            </div>
                            <div className='col-7'>

                                <div className='detailDiv mb-3'>
                                    <details className='detailTab  py-2 px-3' open='true'>
                                        <summary className='summaryInDetail'><p className='m-0'>What app can download videos from Pinterest?</p></summary>
                                        <div className='parDiv mt-3'>
                                            <p className='py-2 px-3 m-0'>There are several third-party apps available for downloading videos from Pinterest. However, using an online Pinterest video downloader tool like ours eliminates the need for any additional apps.</p>
                                        </div>
                                    </details>
                                </div>
                                <div className='detailDiv mb-3'>
                                    <details className='detailTab  py-2 px-3'>
                                        <summary className='summaryInDetail'><p className='m-0'>How to download video from link?</p></summary>
                                        <div className='parDiv mt-3'>
                                            <p className='py-2 px-3 m-0'>There are several third-party apps available for downloading videos from Pinterest. However, using an online Pinterest video downloader tool like ours eliminates the need for any additional apps.</p>
                                        </div>
                                    </details>
                                </div>
                                <div className='detailDiv mb-3'>
                                    <details className='detailTab  py-2 px-3'>
                                        <summary className='summaryInDetail'><p className='m-0'>How can I download a video?</p></summary>
                                        <div className='parDiv mt-3'>
                                            <p className='py-2 px-3 m-0'>There are several third-party apps available for downloading videos from Pinterest. However, using an online Pinterest video downloader tool like ours eliminates the need for any additional apps.</p>
                                        </div>
                                    </details>
                                </div>
                                <div className='detailDiv mb-3'>
                                    <details className='detailTab  py-2 px-3'>
                                        <summary className='summaryInDetail'><p className='m-0'>How to download Pinterest videos in gallery without any app?</p></summary>
                                        <div className='parDiv mt-3'>
                                            <p className='py-2 px-3 m-0'>There are several third-party apps available for downloading videos from Pinterest. However, using an online Pinterest video downloader tool like ours eliminates the need for any additional apps.</p>
                                        </div>
                                    </details>
                                </div>
                                <div className='detailDiv mb-3'>
                                    <details className='detailTab  py-2 px-3'>
                                        <summary className='summaryInDetail'><p className='m-0'>Is it legal to download images from Pinterest?</p></summary>
                                        <div className='parDiv mt-3'>
                                            <p className='py-2 px-3 m-0'>There are several third-party apps available for downloading videos from Pinterest. However, using an online Pinterest video downloader tool like ours eliminates the need for any additional apps.</p>
                                        </div>
                                    </details>
                                </div>
                                <div className='detailDiv mb-3'>
                                    <details className='detailTab  py-2 px-3'>
                                        <summary className='summaryInDetail'><p className='m-0'>Where can I download the Pinterest app?</p></summary>
                                        <div className='parDiv mt-3'>
                                            <p className='py-2 px-3 m-0'>There are several third-party apps available for downloading videos from Pinterest. However, using an online Pinterest video downloader tool like ours eliminates the need for any additional apps.</p>
                                        </div>
                                    </details>
                                </div>
                                <div className='detailDiv mb-3'>
                                    <details className='detailTab  py-2 px-3'>
                                        <summary className='summaryInDetail'><p className='m-0'>How to download reels from Pinterest?</p></summary>
                                        <div className='parDiv mt-3'>
                                            <p className='py-2 px-3 m-0'>There are several third-party apps available for downloading videos from Pinterest. However, using an online Pinterest video downloader tool like ours eliminates the need for any additional apps.</p>
                                        </div>
                                    </details>
                                </div>
                                <div className='detailDiv mb-3'>
                                    <details className='detailTab  py-2 px-3'>
                                        <summary className='summaryInDetail'><p className='m-0'>How to download video in gallery?</p></summary>
                                        <div className='parDiv mt-3'>
                                            <p className='py-2 px-3 m-0'>There are several third-party apps available for downloading videos from Pinterest. However, using an online Pinterest video downloader tool like ours eliminates the need for any additional apps.</p>
                                        </div>
                                    </details>
                                </div>
                                <div className='detailDiv mb-3'>
                                    <details className='detailTab  py-2 px-3'>
                                        <summary className='summaryInDetail'><p className='m-0'>How do I download a video from a reel?</p></summary>
                                        <div className='parDiv mt-3'>
                                            <p className='py-2 px-3 m-0'>There are several third-party apps available for downloading videos from Pinterest. However, using an online Pinterest video downloader tool like ours eliminates the need for any additional apps.</p>
                                        </div>
                                    </details>
                                </div>
                                <div className='detailDiv mb-3'>
                                    <details className='detailTab  py-2 px-3'>
                                        <summary className='summaryInDetail'><p className='m-0'>How do I download videos from YouTube?</p></summary>
                                        <div className='parDiv mt-3'>
                                            <p className='py-2 px-3 m-0'>There are several third-party apps available for downloading videos from Pinterest. However, using an online Pinterest video downloader tool like ours eliminates the need for any additional apps.</p>
                                        </div>
                                    </details>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='hrStyle' />
            <div className='container-fluid footerBg2 pt-5'>
                <div className='container pb-5'>
                    <div className='container footerFoot'>
                        <div className='row'>
                            <div className='col-5'>
                                <div>
                                    {/* <img src={logo} className='logoImg'/> */}
                                    <p className='logoImg'>LOGO</p>
                                    <p className='textUL'>
                                        Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
                                    </p>
                                </div>
                            </div>
                            <div className='col-7'>
                                <div className='row text-center g-1'>
                                    <div className='col-4 text-start d-flex flex-column ps-5'>
                                        <a href='#' className='linkIfoot'>Contact Us</a>
                                        <a href='#' className='linkIfoot'>Work With us</a>
                                        <a href='#' className='linkIfoot'>Terms of Services</a>
                                        <a href='#' className='linkIfoot'>Advertise</a>
                                        <a href='#' className='linkIfoot'>Site Map</a>
                                        <a href='#' className='linkIfoot'>Trust</a>
                                    </div>
                                    <div className='col-4 text-start d-flex flex-column ps-5'>
                                        <a href='#' className='linkIfoot'>About Us</a>
                                        <a href='#' className='linkIfoot'>Privacy Policy</a>
                                        <a href='#' className='linkIfoot'>Accessibility</a>
                                        <a href='#' className='linkIfoot'>Terms of Sale</a>
                                        <a href='#' className='linkIfoot'>Subscription</a>
                                        <a href='#' className='linkIfoot'>Legal</a>
                                    </div>
                                    <div className='col-4 text-start d-flex flex-column ps-5'>
                                        <a href='#' className='linkIfoot'>DMCA Policy</a>
                                        <a href='#' className='linkIfoot'>Guest Posting</a>
                                        <a href='#' className='linkIfoot'>Blog/Articles</a>
                                        <a href='#' className='linkIfoot'>Terms of Service</a>
                                        <a href='#' className='linkIfoot'>FAQ</a>
                                        <a href='#' className='linkIfoot'>Help</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default footer;
