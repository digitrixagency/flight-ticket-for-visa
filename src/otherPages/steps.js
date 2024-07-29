import React from 'react';
import '../index.css';
import '../otherPages/steps.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import step1 from '../images/step1.png';
import step2 from '../images/step2.png';
import step3 from '../images/step3.png';
import nextStep from '../images/nextStep.png';

const steps = () => {
    return (
        <div className='container-fluid userCentricBg mt-5 pt-5'>
            <div className='container pb-5'>
                <div className='container w-75'>
                    <div className='text-center mb-5'>
                        <h1>Three Easy Steps</h1>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <div className='text-center'>
                            <img src={step1}  className='stepImg'/>
                            <h1 className='stepHeader'>Select Plan</h1>
                            <p>Select from wide array of plans that best suits your needs.</p>
                        </div>
                        <div><img src={nextStep} className='nextStepImg' /></div>
                        <div className='text-center'>
                            <img src={step2}  className='stepImg'/>
                            <h1 className='stepHeader'>Submit Travel Details & Pay</h1>
                            <p>Provide all mandatory details and make the payment (s).</p></div>
                        <div><img src={nextStep} className='nextStepImg' /></div>
                        <div className='text-center'>
                            <img src={step3}  className='stepImg'/>
                            <h1 className='stepHeader'>Document at Your Email</h1>
                            <p>Select from wide array of plans that best suits your needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default steps;
