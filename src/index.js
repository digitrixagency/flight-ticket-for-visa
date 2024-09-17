import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './index.css';
import './i18n/i18n'; // Import the i18n configuration
import HomePage from './routePages/HomePage';
import FlightReservationPage from './routePages/FlightReservationPage';
import HotelBookingPage from './routePages/HotelBookingPage';
import FlightNHotelReservationPage from './routePages/FlightNHotelReservationPage';
import ResetPasswordPage from './otherPages/ResetPasswordPage';
import ResetPassword from './otherPages/ResetPassword';
import { useTranslation } from 'react-i18next';
import { AuthProvider } from './AuthContext'; // Import AuthProvider

const AppRoutes = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Extract language from URL
    const pathParts = location.pathname.split('/');
    const urlLang = pathParts[1];

    const validLanguages = ['en', 'hi','id']; // Add more valid languages here
    if (validLanguages.includes(urlLang)) {
      // Set language from URL
      i18n.changeLanguage(urlLang);
      localStorage.setItem('language', urlLang);
      
      // Ensure URL doesn't contain language twice
      if (pathParts.length > 2) {
        navigate(`/${urlLang}${location.pathname.replace(`/${urlLang}`, '')}`, { replace: true });
      }
    } else {
      // Redirect to default language if not valid
      navigate(`/en${location.pathname}`, { replace: true });
    }
  }, [location, i18n, navigate]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:lng" element={<HomePage />} />
      <Route path="/:lng/flight-reservation" element={<FlightReservationPage />} />
      <Route path="/:lng/hotel-booking" element={<HotelBookingPage />} />
      <Route path="/:lng/flight-hotel-reservation" element={<FlightNHotelReservationPage />} />
      <Route path="/:lng/Forgot-Password" element={<ResetPasswordPage />} />
      <Route path="/:lng/Reset-password/:token" element={<ResetPassword />} />
    </Routes>
  );
};

const App = () => (
  <Router>
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

// Wrapping the App in StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
