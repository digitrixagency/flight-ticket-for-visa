// src/index.js
import React,{useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './index.css';
import './i18n/i18n'; // Import the i18n configuration
import HomePage from './routePages/HomePage';
import FlightReservationPage from './routePages/FlightReservationPage';
import HotelBookingPage from './routePages/HotelBookingPage';
import FlightNHotelReservationPage from './routePages/FlightNHotelReservationPage';
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

    if (['en', 'hi'].includes(urlLang)) {
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
      <Route path="/:lng/Flight-Reservation" element={<FlightReservationPage />} />
      <Route path="/:lng/Hotel-Booking" element={<HotelBookingPage />} />
      <Route path="/:lng/Flight+Hotel-Reservation" element={<FlightNHotelReservationPage />} />
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
root.render(<App />);
