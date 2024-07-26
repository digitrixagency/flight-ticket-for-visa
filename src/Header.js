import React from 'react';
import './index.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <a className="navbar-brand" href="#">
                        <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" /></a>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mt-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-light" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-primary" href="#">Sign Up</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
