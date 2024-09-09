import React, { useState } from "react";
import { Modal, Button, Form, Spinner, Alert } from "react-bootstrap";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { useAuth } from "../AuthContext"; // Import the useAuth hook
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const buttonStyle = {
  backgroundColor: "#3059eb",
  color: "white",
  border: "none",
};

const buttonLinkStyle = {
  color: "#3059eb",
};

const LoginSignupModal = ({ show, handleClose }) => {
  const navigate = useNavigate();

  const handleForgotPasswordClick = () => {
    navigate("/forgot-password"); // Redirect to the forgot password page
  };

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth(); // Use the login function from context
  const { t, i18n } = useTranslation();

  // Inside the handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let response;

      if (isLogin) {
        // Attempt login
        response = await axios.post("http://localhost:5000/api/login", {
          email,
          password,
        });

        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Login Successful",
            text: "Welcome back!",
          });
          login(); // Set authentication state on successful login
        } else {
          // Handle unexpected response status
          Swal.fire({
            icon: "warning",
            title: "Unexpected Response",
            text: "Please check your login details and try again.",
          });
        }
      } else {
        // Signup process
        if (password !== confirmPassword) {
          Swal.fire({
            icon: "error",
            title: "Passwords do not match",
            text: "Please ensure both passwords are the same.",
          });
          setLoading(false); // Stop loading spinner
          return;
        }

        response = await axios.post("http://localhost:5000/api/signup", {
          email,
          password,
        });

        if (response.status === 201) {
          Swal.fire({
            icon: "success",
            title: "Signup Successful",
            text: "Your account has been created!",
          });
        } else {
          // Handle unexpected response status
          Swal.fire({
            icon: "warning",
            title: "Unexpected Response",
            text: "Something went wrong with your signup. Please try again.",
          });
        }
      }

      handleClose(); // Close modal on success
    } catch (err) {
      // Show SweetAlert for errors
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text:
          err.response?.data?.message || "An error occurred. Please try again.",
      });
    } finally {
      setLoading(false); // Ensure loading spinner is stopped regardless of success or error
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {isLogin
            ? `${t("loginNSignUp.title1")}`
            : `${t("loginNSignUp.title2")}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>{t("loginNSignUp.label1")}</Form.Label>
            <Form.Control
              type="email"
              placeholder={t("loginNSignUp.placeHolder1")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mb-3"
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>{t("loginNSignUp.label2")}</Form.Label>
            <div className="position-relative">
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder={t("loginNSignUp.placeHolder2")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mb-3"
              />
              <Button
                variant="link"
                style={{
                  ...buttonLinkStyle,
                  position: "absolute",
                  top: "50%",
                  right: "0",
                  transform: "translateY(-50%)",
                }}
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </Button>
            </div>
          </Form.Group>
          {!isLogin && (
            <Form.Group controlId="formConfirmPassword">
              <Form.Label>{t("loginNSignUp.label3")}</Form.Label>
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder={t("loginNSignUp.placeHolder3")}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="mb-3"
              />
            </Form.Group>
          )}
          <Button
            type="submit"
            style={buttonStyle}
            className="w-100 mb-3"
            disabled={loading}
          >
            {loading ? (
              <Spinner animation="border" size="sm" />
            ) : isLogin ? (
              `${t("loginNSignUp.title1")}`
            ) : (
              `${t("loginNSignUp.title2")}`
            )}
          </Button>
        </Form>
        <div className="d-flex justify-content-between">
          {isLogin && (
            <Button
              variant="link"
              onClick={handleForgotPasswordClick}
              style={buttonLinkStyle}
            >
              {t("loginNSignUp.forgotPassBtn")}
            </Button>
          )}
          <Button
            variant="link"
            onClick={() => setIsLogin(!isLogin)}
            style={buttonLinkStyle}
          >
            {isLogin
              ? `${t("loginNSignUp.signUpBtn")}`
              : `${t("loginNSignUp.LoginBtn")}`}
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LoginSignupModal;
