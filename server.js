const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const amadeus = require('./amadeusApi');

const port = 5000;
// Example payment gateway SDK (e.g., Stripe, PayPal)
// const stripe = require("stripe")(YOUR_SECRET_KEY);

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/flightTicketDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema for form data
const formDataSchema = new mongoose.Schema({
  dataFor: String,
  tripType: String,
  fromInput0: String,
  fromInput1: String,
  fromInput2: String,
  fromInput3: String,
  fromInput4: String,
  fromInput5: String,
  fromInput6: String,
  toInput0: String,
  toInput1: String,
  toInput2: String,
  toInput3: String,
  toInput4: String,
  toInput5: String,
  toInput6: String,
  departDateInput0: String,
  departDateInput1: String,
  departDateInput2: String,
  departDateInput3: String,
  departDateInput4: String,
  departDateInput5: String,
  departDateInput6: String,
  returnDateInput: String,
  travelersNCabin: String,
  additionalPreferencesForFlight: String,
  additionalPreferencesForFlightYes: String,
  additionalPreferencesForHotel: String,
  additionalPreferencesForHotelYes: String,
  noOfTravelers: String,
  travelerEmail: String,
  travelerNo: String,
  travelTitle0: String,
  travelTitle1: String,
  travelTitle2: String,
  travelTitle3: String,
  travelTitle4: String,
  travelTitle5: String,
  travelTitle6: String,
  travelerFirstName0: String,
  travelerFirstName1: String,
  travelerFirstName2: String,
  travelerFirstName3: String,
  travelerFirstName4: String,
  travelerFirstName5: String,
  travelerFirstName6: String,
  travelerFirstName7: String,
  travelerFirstName8: String,
  travelerFirstName9: String,
  travelerLastName0: String,
  travelerLastName1: String,
  travelerLastName2: String,
  travelerLastName3: String,
  travelerLastName4: String,
  travelerLastName5: String,
  travelerLastName6: String,
  travelerLastName7: String,
  travelerLastName8: String,
  travelerLastName9: String,
  hearAboutUs: String,
  consulateApplying: String,
  flightItinerary: String,
  visaInterviewDate: String,
  timeZone: String,
  amount: Number,
  MUID: String,
  transactionId: String,
  CheckIn: String,
  CheckOut: String,
  destinationOrHotelName: String,
  guestsNRoom: String,
  onOfHotels: String,
});

const FormData = mongoose.model("FormData", formDataSchema);

// // Step 1: Define a route to handle payment processing
// app.post("/api/process-payment", async (req, res) => {
//   try {
//     const { amount, transactionId } = req.body;

//     // Create a payment intent with Stripe
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: amount * 100, // Stripe uses cents, so multiply by 100
//       currency: "usd",
//       metadata: { transactionId },
//     });

//     // Send the client secret to the frontend to confirm the payment
//     res.status(200).json({
//       success: true,
//       clientSecret: paymentIntent.client_secret,
//     });
//   } catch (error) {
//     console.error("Error processing payment:", error);
//     res.status(500).send("Error processing payment");
//   }
// });

// Step 1: Define a route to handle payment processing
app.post("/api/process-payment", async (req, res) => {
  try {
    const { amount, transactionId } = req.body;

    // Step 1.1: Call your payment gateway API here (e.g., Stripe, PayPal)
    // Example with Stripe:
    // const paymentIntent = await stripe.paymentIntents.create({
    //   amount: amount * 100, // Stripe uses cents
    //   currency: "usd",
    //   metadata: { transactionId },
    // });

    // For demonstration, we'll simulate success:
    const paymentIntent = { success: true }; // Simulated response

    // Step 1.2: Check if payment was successful
    if (paymentIntent.success) {
      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ success: false, message: "Payment failed" });
    }
  } catch (error) {
    res.status(500).send("Error processing payment");
  }
});

// Step 2: Define a route to handle form submissions
app.post("/api/submit-form", async (req, res) => {
  try {
    const newFormData = new FormData(req.body);
    await newFormData.save();
    res.status(200).send("Form submitted successfully!");
  } catch (error) {
    res.status(500).send("Error submitting form");
  }
});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


