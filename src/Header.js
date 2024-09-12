import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFileAlt,
  faPhone,
  faInfoCircle,
  faTicket,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import LoginSignupModal from "./otherPages/LoginSignupModal";
import { useAuth } from "./AuthContext";
import { Button } from "react-bootstrap";
import headLogo350x75px1 from "./images/headLogo350x75px1.png";

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [sideMenuVisible, setSideMenuVisible] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const { t, i18n } = useTranslation();
  const currentLanguage =
    i18n.language || localStorage.getItem("language") || "en";

  const toggleSideMenu = () => setSideMenuVisible(!sideMenuVisible);

  return (
    <>
      <header className="navbarDiv">
        <div className="container px-5 header">
          <div className="logo my-3">
            <Link to={`/${currentLanguage}`}>
              <img src={headLogo350x75px1} alt="Logo" />
            </Link>
          </div>
          <div className="d-flex align-items-center">
            <LanguageSwitcher/>
            <a
              href="http://localhost:3001/"
              className="btn getDummyTicket mx-2"
              aria-label={t("header.TestTicketBtn")}
            >
              <FontAwesomeIcon icon={faTicket} />{" "}
              <span>{t("header.TestTicketBtn")}</span>
            </a>
            <Button
              className="sign-up-button headerLSNLS"
              variant="primary"
              onClick={isAuthenticated ? logout : handleShow}
              aria-label={
                isAuthenticated
                  ? t("header.LogoutBtn")
                  : t("header.SignUpNLoginBtn")
              }
            >
              {isAuthenticated
                ? t("header.LogoutBtn")
                : t("header.SignUpNLoginBtn")}
            </Button>
            <button
              className="btn text-white ms-2 menuButton"
              onClick={toggleSideMenu}
              aria-label={
                sideMenuVisible ? "Close side menu" : "Open side menu"
              }
            >
              <FontAwesomeIcon icon={sideMenuVisible ? faXmark : faBars} />
            </button>
          </div>
        </div>
      </header>

      {/* Side Menu */}
      <div className={`sideMenu ${sideMenuVisible ? "visible" : ""}`}>
        <button
          className="closeMenu"
          onClick={toggleSideMenu}
          aria-label="Close side menu"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <Link
          to={`/${currentLanguage}`}
          className="btn"
          onClick={toggleSideMenu}
        >
          <FontAwesomeIcon icon={faHouse} /> <span>{t("header.HomeBtn")}</span>
        </Link>
        <Link
          to={`/${currentLanguage}/Blog`}
          className="btn"
          onClick={toggleSideMenu}
        >
          <FontAwesomeIcon icon={faFileAlt} />{" "}
          <span>{t("header.BlogBtn")}</span>
        </Link>
        <Link
          to={`/${currentLanguage}/Contact-Us`}
          className="btn"
          onClick={toggleSideMenu}
        >
          <FontAwesomeIcon icon={faPhone} />{" "}
          <span>{t("header.ContactUsBtn")}</span>
        </Link>
        <Link
          to={`/${currentLanguage}/About-Us`}
          className="btn"
          onClick={toggleSideMenu}
        >
          <FontAwesomeIcon icon={faInfoCircle} />{" "}
          <span>{t("header.AboutUsBtn")}</span>
        </Link>
        <LanguageSwitcher/>
        <Button
          className="sign-up-button sidebarLSNLS"
          variant="primary"
          onClick={isAuthenticated ? logout : handleShow}
          aria-label={
            isAuthenticated
              ? t("header.LogoutBtn")
              : t("header.SignUpNLoginBtn")
          }
        >
          {isAuthenticated
            ? t("header.LogoutBtn")
            : t("header.SignUpNLoginBtn")}
        </Button>
      </div>

      <LoginSignupModal show={showModal} handleClose={handleClose} />
    </>
  );
};

export default Header;
