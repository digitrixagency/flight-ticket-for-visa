import React, { useState } from "react";
import "./ForgotPassword.css";
import axios from "axios";
import Swal from "sweetalert2";

const ForgotPassword = ({ onCancel, onSend, language }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an API call to send the reset password email
      const response = await axios.post(
        "http://localhost:5000/send-reset-password-email",
        {
          email: email, // Email state value
          language: language // Language state value
        }
      );

      if (response.status === 200) {
        // Success: Show SweetAlert2 success message
        Swal.fire({
          title: 'Success!',
          text: 'A reset password email has been sent.',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          onSend();
        });
      } else {
        // Failure: Show SweetAlert2 error message with response data if available
        const errorMessage = response.data?.message || 'Failed to send reset password email.';
        Swal.fire({
          title: 'Error!',
          text: errorMessage,
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      // Error: Show SweetAlert2 error message with detailed error information
      let errorMessage = 'An error occurred while sending the email.';

      // Check if error has a response from the server
      if (error.response && error.response.data && error.response.data.message) {
        errorMessage = error.response.data.message;
      } else if (error.message) {
        errorMessage = error.message;
      }

      Swal.fire({
        title: 'Error!',
        text: errorMessage,
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot password?</h2>
      {/* <p>No worries, we'll send you reset instructions.</p> */}
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="button-group">
          <button type="button" className="cancel-button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="send-button">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
