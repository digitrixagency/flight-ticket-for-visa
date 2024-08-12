import React from 'react';
import './index.css';
import './responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import mobileImage from './images/mobile.png'
import ot from './images/ot.png'
const Home = () => {
    return (
        <div className='container homeContainerDiv px-5 pb-5'>
            <div className='container px-5 homeDivInDiv'>

                <div className="row align-items-center ms-4 me-5 mt-5 backGroundImage">
                    <div className="col-md-6 ps-0 pt-5 zIndex1">
                        <h2 className="display-5 mb-4" >Get Verifiable Flight and Hotel Reservations</h2>
                        <h2 className="display-6 fw-normal text-secondary mb-3">ONE-STOP SHOP</h2>
                        <p className="lead textUnderTitlesHome">xyzwebsite.com offers fast, reliable flight and hotel reservations tailored for visa applications. Receive your verifiable itinerary within 4 to 8 hours, accepted worldwide.</p>
                        <p className='textUnderTitlesHome'>Trusted by thousands, we simplify visa processing with documents that meet embassy standards, ensuring a smooth travel planning experience.</p>
                        <div className="d-flex justify-content-between px-2 threeBtnInHome">
                            <button type="button" className="btn btn-primary homePageBtn px-3">Flight Reservation</button>
                            <button type="button" className="btn btn-primary homePageBtn px-4">Hotel Booking</button>
                            <button type="button" className="btn btn-primary homePageBtn px-4">Flight + Hotel</button>
                        </div>
                    </div>
                        <img src={ot} className='otImg'/>
                    <div className="col-md-6 d-flex justify-content-center align-items-end">
                        <div className='positionDiv'>
                            <img src={mobileImage} alt="Flight and hotel reservations" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Home;
