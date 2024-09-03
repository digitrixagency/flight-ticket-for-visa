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
import { useTranslation as myTun } from "react-i18next";

const Features = () => {
  const { t } = myTun(); // Get current language from i18n

    return (
        <div className='container-fluid featuresBg mt-5 pt-5'>
            <div className='container featuresBgDiv px-5 pb-5'>
                <div className='container featuresDivInDiv px-5'>

                    {/* <div className="row row-cols-2 row-cols-lg-3 g-3 g-lg-5 ms-4 me-5 mt-5"> */}
                    <div className="row row-cols-1 row-cols-lg-3 g-3 g-lg-3">
                        <div className="col-md-4">
                            <div className="card cardDiv d-flex align-items-center">
                                <img src={img1} className="card-img-top" alt={t("features.title1")} />
                                <div className="card-body text-center d-flex align-items-center flex-column">
                                    <h2>{t("features.title1")}</h2>
                                    <p className="card-text">{t("features.content1")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card cardDiv d-flex align-items-center">
                                <img src={img2} className="card-img-top" alt={t("features.title2")} />
                                <div className="card-body text-center d-flex align-items-center flex-column">
                                    <h2>{t("features.title2")}</h2>
                                    <p className="card-text">{t("features.content2")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="card cardDiv d-flex align-items-center">
                                <img src={img3} className="card-img-top" alt={t("features.title3")} />
                                <div className="card-body text-center d-flex align-items-center flex-column">
                                    <h2>{t("features.title3")}</h2>
                                    <p className="card-text">{t("features.content3")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="card cardDiv d-flex align-items-center">
                                <img src={img4} className="card-img-top" alt={t("features.title4")} />
                                <div className="card-body text-center d-flex align-items-center flex-column">
                                    <h2>{t("features.title4")}</h2>
                                    <p className="card-text">{t("features.content4")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="card cardDiv d-flex align-items-center">
                                <img src={img5} className="card-img-top" alt={t("features.title5")} />
                                <div className="card-body text-center d-flex align-items-center flex-column">
                                    <h2>{t("features.title5")}</h2>
                                    <p className="card-text">{t("features.content5")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="card cardDiv d-flex align-items-center">
                                <img src={img6} className="card-img-top" alt={t("features.title6")} />
                                <div className="card-body text-center d-flex align-items-center flex-column">
                                    <h2>{t("features.title6")}</h2>
                                    <p className="card-text">{t("features.content6")}</p>
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
