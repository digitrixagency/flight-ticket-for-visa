import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import './ResetPassword.css';
import fpBgImg from "../images/fpBgImg.png";


const ResetPassword = ({ onCancel, onSend, language }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { token } = useParams();
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/reset-password', {
        token,
        newPassword: password,
      });

      if (response.status === 200) {
        Swal.fire({
          title: 'Success!',
          text: 'Password reset successfully!',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          navigate('/');
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: response.data.message,
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to reset password. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div className="reset-password-container">
      {/* Illustration section */}
      <div className="illustration-section">
        <img src={fpBgImg} alt="Reset Password" />
      </div>

      {/* Form section */}
      <div className="form-section">
        <h2 className="reset-password-header">Reset Password</h2>

        <form>
          <input
            className="reset-password-input"
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="reset-password-input"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {password && confirmPassword && password !== confirmPassword && (
            <p className="password-matching">Passwords do not match</p>
          )}
          <div className="button-group">
            <button className="button-cancel" type="button" onClick={() => navigate('/')}>
              Cancel
            </button>
            <button className="button-reset button-reset-password" type="button" onClick={handleResetPassword}>
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
