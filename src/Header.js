import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faHouse,
  faFileAlt,
  faPhone,
  faInfoCircle,
  faSignInAlt,
  faTicket
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  useEffect(() => {
    // Attach event handler for menuButton
    $("#menuButton").on("click", function () {
      $("#menuButton").hide();
      $("#closeButton").show();
      $(".hideElementCls").show();
      $(".menuDiv").css("display", "flex");
    });

    // Attach event handler for closeButton
    $("#closeButton").on("click", function () {
      $("#menuButton").show();
      $("#closeButton").hide();
      $(".hideElementCls").hide();
      $(".menuDiv").css("display", "none");
    });

    // Cleanup both event handlers when the component is unmounted or when the effect is re-run
    return () => {
      $("#menuButton").off("click");
      $("#closeButton").off("click");
    };
  }, []); // Empty dependency array means this effect runs only once

  return (
    <div className="container-fluid navbarDiv">
      <div className="container px-5">
        <nav className="d-flex justify-content-evenly">
          <div className="logo my-3">
            <svg
              width="125"
              height="40"
              viewBox="0 0 125 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_5_50)">
                <path
                  d="M88.861 37.225C89.62 37.225 90.069 36.65 90.069 35.751C90.069 34.819 89.587 34.277 88.877 34.277C88.471 34.277 88.189 34.457 87.978 34.743H87.968V33.27H87.528V37.143H87.968V36.775H87.978C88.206 37.089 88.482 37.225 88.861 37.225ZM88.829 36.856C88.233 36.856 87.94 36.385 87.94 35.756C87.94 35.15 88.222 34.651 88.834 34.651C89.365 34.651 89.62 35.128 89.62 35.756C89.62 36.39 89.365 36.856 88.829 36.856ZM90.812 38.07C91.153 38.07 91.37 37.95 91.597 37.37L92.795 34.342H92.329L91.689 36.087C91.603 36.32 91.505 36.634 91.505 36.634H91.495C91.495 36.634 91.391 36.32 91.305 36.087L90.644 34.342H90.167L91.261 37.062L91.153 37.338C91.045 37.609 90.92 37.68 90.736 37.68C90.6332 37.6852 90.5308 37.6646 90.438 37.62H90.416V38.01C90.536 38.059 90.644 38.07 90.812 38.07ZM93.918 37.143H94.655V33.27H93.918V37.143ZM96.457 37.225C97.318 37.225 97.909 36.585 97.909 35.756C97.909 34.927 97.319 34.288 96.457 34.288C95.596 34.288 95.005 34.928 95.005 35.756C95.005 36.586 95.595 37.225 96.457 37.225ZM96.457 36.661C96.002 36.661 95.753 36.298 95.753 35.756C95.753 35.215 96.002 34.846 96.457 34.846C96.907 34.846 97.161 35.215 97.161 35.756C97.161 36.298 96.907 36.661 96.457 36.661ZM99.476 38.091C99.888 38.091 100.245 37.994 100.478 37.777C100.684 37.587 100.809 37.322 100.809 36.932V34.364H100.099V34.657H100.088C99.92 34.424 99.666 34.288 99.318 34.288C98.615 34.288 98.116 34.819 98.116 35.648C98.116 36.488 98.723 36.975 99.341 36.975C99.693 36.975 99.904 36.835 100.066 36.65H100.083V36.954C100.083 37.333 99.883 37.534 99.465 37.534C99.124 37.534 98.967 37.398 98.907 37.224H98.176C98.251 37.766 98.717 38.091 99.476 38.091ZM99.466 36.385C99.086 36.385 98.836 36.109 98.836 35.637C98.836 35.171 99.086 34.879 99.46 34.879C99.904 34.879 100.121 35.225 100.121 35.632C100.121 36.044 99.931 36.385 99.465 36.385H99.466ZM102.6 37.225C103.461 37.225 104.052 36.585 104.052 35.756C104.052 34.927 103.461 34.288 102.6 34.288C101.738 34.288 101.148 34.928 101.148 35.756C101.148 36.586 101.738 37.225 102.6 37.225ZM102.6 36.661C102.145 36.661 101.895 36.298 101.895 35.756C101.895 35.215 102.145 34.846 102.6 34.846C103.049 34.846 103.304 35.215 103.304 35.756C103.304 36.298 103.049 36.661 102.6 36.661ZM104.394 37.143H105.131V34.364H104.394V37.143ZM104.394 33.931H105.131V33.27H104.394V33.931ZM105.606 38.053H106.343V36.83H106.353C106.511 37.069 106.765 37.226 107.155 37.226C107.87 37.226 108.358 36.656 108.358 35.757C108.358 34.89 107.887 34.289 107.15 34.289C106.989 34.2864 106.83 34.3236 106.688 34.3975C106.545 34.4713 106.423 34.5794 106.332 34.712H106.316V34.365H105.606V38.055V38.053ZM106.998 36.613C106.559 36.613 106.326 36.282 106.326 35.778C106.326 35.28 106.511 34.884 106.971 34.884C107.426 34.884 107.61 35.252 107.61 35.778C107.61 36.304 107.372 36.613 106.998 36.613ZM109.828 37.225C110.521 37.225 110.998 36.889 110.998 36.331C110.998 35.681 110.483 35.551 110.017 35.453C109.622 35.372 109.254 35.35 109.254 35.112C109.254 34.912 109.443 34.802 109.73 34.802C110.045 34.802 110.234 34.912 110.267 35.209H110.933C110.879 34.651 110.473 34.289 109.741 34.289C109.107 34.289 108.609 34.575 108.609 35.177C108.609 35.783 109.096 35.919 109.595 36.017C109.974 36.092 110.326 36.119 110.326 36.385C110.326 36.58 110.142 36.705 109.817 36.705C109.487 36.705 109.259 36.564 109.21 36.244H108.528C108.571 36.834 109.021 37.225 109.828 37.225ZM113.796 37.143V34.364H113.059V35.968C113.059 36.336 112.847 36.596 112.501 36.596C112.187 36.596 112.04 36.417 112.04 36.092V34.364H111.309V36.217C111.309 36.824 111.656 37.219 112.273 37.219C112.663 37.219 112.88 37.073 113.07 36.819H113.086V37.143H113.796ZM114.272 37.143H115.009V35.53C115.009 35.161 115.209 34.923 115.507 34.923C115.778 34.923 115.935 35.086 115.935 35.4V37.144H116.672V35.53C116.672 35.161 116.862 34.923 117.171 34.923C117.442 34.923 117.599 35.086 117.599 35.4V37.144H118.336V35.275C118.336 34.668 118.005 34.289 117.42 34.289C117.068 34.289 116.775 34.473 116.586 34.777H116.575C116.508 34.6294 116.4 34.5045 116.263 34.4178C116.126 34.3311 115.967 34.2863 115.805 34.289C115.643 34.2849 115.482 34.3245 115.34 34.4037C115.198 34.4828 115.08 34.5986 114.998 34.739H114.982V34.365H114.272V37.145V37.143Z"
                  fill="#E5708C"
                />
                <path
                  d="M118.481 2.149C118.481 0.965999 119.44 0.00599952 120.623 0.00599952H122.052C122.62 0.00599952 123.165 0.231779 123.567 0.63367C123.969 1.03556 124.195 1.58064 124.195 2.149C124.195 2.71736 123.969 3.26244 123.567 3.66433C123.165 4.06622 122.62 4.292 122.052 4.292H120.623C120.342 4.292 120.063 4.23656 119.803 4.12885C119.543 4.02115 119.307 3.86328 119.108 3.66427C118.909 3.46526 118.751 3.22901 118.644 2.96901C118.536 2.70902 118.481 2.43038 118.481 2.149ZM58.49 14.29C58.49 22.178 52.096 28.573 44.207 28.573C36.319 28.573 29.924 22.178 29.924 14.29C29.924 6.4 36.319 0.00699952 44.207 0.00699952C52.096 0.00699952 58.49 6.4 58.49 14.29ZM27.138 14.219C27.928 14.219 28.574 14.859 28.495 15.645C28.225 18.3348 27.1972 20.8928 25.5311 23.0216C23.8649 25.1505 21.6288 26.7628 19.0827 27.6711C16.5365 28.5795 13.7849 28.7466 11.1475 28.1531C8.51012 27.5596 6.09534 26.2297 4.18379 24.3182C2.27225 22.4067 0.942432 19.9919 0.348902 17.3545C-0.244629 14.7171 -0.0775021 11.9655 0.830858 9.4193C1.73922 6.87315 3.35151 4.63706 5.48035 2.97091C7.6092 1.30476 10.1672 0.276974 12.857 0.00699952C13.642 -0.0730005 14.283 0.575 14.283 1.363V12.79C14.283 13.58 14.923 14.219 15.712 14.219H27.138ZM78.487 31.43C79.6234 31.43 80.7133 31.8815 81.5169 32.685C82.3205 33.4886 82.772 34.5785 82.772 35.715C82.772 36.8515 82.3205 37.9414 81.5169 38.745C80.7133 39.5485 79.6234 40 78.487 40H71.346C70.2095 40 69.1196 39.5485 68.316 38.745C67.5124 37.9414 67.061 36.8515 67.061 35.715C67.061 34.5785 67.5124 33.4886 68.316 32.685C69.1196 31.8815 70.2095 31.43 71.346 31.43H78.487ZM74.202 28.573C82.091 28.573 88.486 22.178 88.486 14.29C88.4894 11.8669 87.8736 9.48321 86.697 7.365L89.057 5.005C89.3288 4.73303 89.5444 4.41018 89.6915 4.05489C89.8386 3.6996 89.9142 3.31882 89.9141 2.93429C89.914 2.54976 89.8382 2.16902 89.691 1.8138C89.5437 1.45858 89.328 1.13584 89.056 0.863999C88.784 0.592163 88.4612 0.376557 88.1059 0.22949C87.7506 0.0824237 87.3698 0.00677741 86.9853 0.00687027C86.6008 0.00696314 86.22 0.0827934 85.8648 0.230031C85.5096 0.37727 85.1868 0.593032 84.915 0.865L82.855 2.925C80.3698 1.02691 77.3281 0.000967688 74.201 0.00599952C66.314 0.00699952 59.92 6.4 59.92 14.29C59.92 22.178 66.314 28.573 74.202 28.573ZM118.481 14.29C118.481 22.178 112.086 28.573 104.197 28.573C96.309 28.573 89.914 22.178 89.914 14.29C89.914 6.4 96.309 0.00699952 104.197 0.00699952C112.086 0.00699952 118.481 6.401 118.481 14.29Z"
                  fill="url(#paint0_linear_5_50)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_5_50"
                  x1="-4.90444e-06"
                  y1="16"
                  x2="119"
                  y2="16"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#64C2DB" />
                  <stop offset="0.307" stop-color="#7476ED" />
                  <stop offset="0.604" stop-color="#C994DF" />
                  <stop offset="1" stop-color="#E56F8C" />
                </linearGradient>
                <clipPath id="clip0_5_50">
                  <rect width="125" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="my-3 menuDiv">
            <button className="btn text-white" id="closeButton">
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <Link to="/" className="btn text-white mx-2">
              <FontAwesomeIcon icon={faHouse} className="hideElementCls" />
              <span>Home</span>
            </Link>
            <a href="#" className="btn text-white mx-2">
              <FontAwesomeIcon icon={faFileAlt} className="hideElementCls" />
              <span>Blog</span>
            </a>
            <a href="#" className="btn text-white mx-2">
              <FontAwesomeIcon icon={faPhone} className="hideElementCls" />
              <span>Contact Us</span>
            </a>
            <a href="#" className="btn text-white mx-2">
              <FontAwesomeIcon icon={faInfoCircle} className="hideElementCls" />
              <span>About Us</span>
            </a>
            <a href="http://localhost:3001/" className="btn text-white mx-2" id="getDummyTicketA">
              <FontAwesomeIcon icon={faTicket} className="hideElementCls colorForWBG"/>
              <span>Get Dummy Ticket</span>
            </a>
            <a href="#" className="btn text-white mx-2">
              <FontAwesomeIcon icon={faSignInAlt} className="hideElementCls" />
              <span>Login</span>
            </a>
            <button class="sign-up-button">Sign Up</button>
          </div>
          <div className="smallMenuDiv">
            <button className="btn text-white" id="menuButton">
              <FontAwesomeIcon icon={faBars} />
            </button>
            {/* <button className="btn text-white" id="closeButton">
              <FontAwesomeIcon icon={faXmark} />
            </button> */}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
