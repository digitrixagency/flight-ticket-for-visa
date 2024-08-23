require('dotenv').config(); // Add this line at the top of your file
const Amadeus = require('amadeus');

const amadeus = new Amadeus({
  clientId: process.env.REACT_APP_AMADEUS_CLIENT_ID,
  clientSecret: process.env.REACT_APP_AMADEUS_CLIENT_SECRET
});

module.exports = amadeus;
