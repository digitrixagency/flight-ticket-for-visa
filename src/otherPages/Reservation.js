import React from 'react';
import '../index.css';
import '../otherPages/Reservation.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import { useTranslation } from "react-i18next";


const Reservation = () => {
    const { t } = useTranslation(); // Get current language from i18n

    return (
        <div className='container-fluid reservationBg mt-5 pt-5'>
            <div className='container pb-5'>
                <div className='container w-75'>
                    <div className='text-center mb-5 mx-5'>
                        <h1>{t("Reservation.head")}</h1>
                        <h6 className='fw-normal'>{t("Reservation.subHead")}</h6>
                    </div>
                    <div className="row row-cols-1 row-cols-lg-3 g-3 g-lg-3">

                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p className="cardTextWidth text-start px-3">{t("Reservation.title1")}</p>
                                    <img src={img1} className="cardImage" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p className="cardTextWidth text-start px-3">{t("Reservation.title2")}</p>
                                    <img src={img2} className="cardImage" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p className="cardTextWidth text-start px-3">{t("Reservation.title3")}</p>
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
