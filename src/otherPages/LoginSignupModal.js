import React, { useState } from "react";
import { Modal, Button, Form, Spinner, Alert } from "react-bootstrap";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { useAuth } from '../AuthContext'; // Import the useAuth hook
const buttonStyle = {
  backgroundColor: "#3059eb",
  color: "white",
  border: "none",
};

const buttonLinkStyle = {
  color: "#3059eb",
};

const LoginSignupModal = ({ show, handleClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth(); // Use the login function from context

  // Inside the handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isLogin) {
        const response = await axios.post("http://localhost:5000/api/login", { email, password });
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome back!",
        });
        login(); // Set authentication state on successful login
      } else {
        if (password !== confirmPassword) {
          // Show SweetAlert for password mismatch
          Swal.fire({
            icon: "error",
            title: "Passwords do not match",
            text: "Please ensure both passwords are the same.",
          });
          setLoading(false); // Stop loading spinner
          return;
        }
        const response = await axios.post("http://localhost:5000/api/signup", { email, password });
        Swal.fire({
          icon: "success",
          title: "Signup Successful",
          text: "Your account has been created!",
        });
      }
      handleClose(); // Close modal on success
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.response?.data?.message || "An error occurred. Please try again.",
      });
      setError("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{isLogin ? "Login" : "Sign Up"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mb-3"
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <div className="position-relative">
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Password"
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
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
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
              "Login"
            ) : (
              "Sign Up"
            )}
          </Button>
        </Form>
        <div className="d-flex justify-content-between">
          {isLogin && (
            <Button
              variant="link"
              onClick={() => alert("Forgot Password clicked")}
              style={buttonLinkStyle}
            >
              Forgot Password?
            </Button>
          )}
          <Button
            variant="link"
            onClick={() => setIsLogin(!isLogin)}
            style={buttonLinkStyle}
          >
            {isLogin
              ? "Need an account? Sign Up"
              : "Already have an account? Login"}
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LoginSignupModal;
