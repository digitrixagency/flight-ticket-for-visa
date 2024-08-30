const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const port = 5000;
// Example payment gateway SDK (e.g., Stripe, PayPal)
// const stripe = require("stripe")(YOUR_SECRET_KEY);

// Send mail functionality start

const transporter = nodemailer.createTransport({
  service: "gmail", // You can use any email service here
  auth: {
    user: "prashant.digitrix@gmail.com", // Your email address
    pass: "cwvr difd hujk tose", // Your email password (or use an app password)
  },
});
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
  fromInput: String,
  fromInput0: String,
  fromInput1: String,
  fromInput2: String,
  fromInput3: String,
  fromInput4: String,
  fromInput5: String,
  fromInput6: String,
  toInput: String,
  toInput0: String,
  toInput1: String,
  toInput2: String,
  toInput3: String,
  toInput4: String,
  toInput5: String,
  toInput6: String,
  departDateInput: String,
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

const FormData = mongoose.model("flightNHotelData", formDataSchema);

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

// // Step 2: Define a route to handle form submissions
// app.post("/api/submit-form", async (req, res) => {
//   try {
//     const newFormData = new FormData(req.body);
//     await newFormData.save();

//     // Filter out empty values
//     const filterEmpty = (obj) => {
//       const result = {};
//       Object.keys(obj).forEach(key => {
//         if (obj[key]) {
//           result[key] = obj[key];
//         }
//       });
//       return result;
//     };

//     const filteredData = filterEmpty(req.body);

//     // Prepare email content
//     let emailContent = "<h1>New Flight/Hotel Booking</h1>";
//     Object.keys(filteredData).forEach(key => {
//       emailContent += `<p><strong>${key}:</strong> ${filteredData[key]}</p>`;
//     });

//     // Send the email
//     const mailOptions = {
//       from: "prashant.digitrix@gmail.com",
//       to: "prashantbasnet111@gmail.com",
//       subject: "New Flight/Hotel Booking",
//       html: emailContent,
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error("Error sending email:", error);
//         return res.status(500).send("Error sending email");
//       }
//       res.status(200).send("Form submitted and email sent successfully!");
//     });
//   } catch (error) {
//     res.status(500).send("Error submitting form");
//   }
// });

app.post("/api/submit-form", async (req, res) => {
  try {
    const newFormData = new FormData(req.body);
    await newFormData.save();

    // Filter out empty values and exclude `dataFor`
    const filteredData = Object.entries(req.body).reduce(
      (acc, [key, value]) => {
        if (key !== "dataFor" && value && value.trim() !== "") {
          let keyVal = key;
          let valueVal = value;

          // Handling traveler details
          if (key.startsWith("travelTitle")) {
            const index = key.replace("travelTitle", "");
            const firstNameKey = `travelerFirstName${index}`;
            const lastNameKey = `travelerLastName${index}`;

            // Get first name and last name from the req.body
            const firstName = req.body[firstNameKey] || "";
            const lastName = req.body[lastNameKey] || "";

            // Create descriptive key based on the index
            const travelerLabelMap = {
              0: "First Traveler Name",
              1: "Second Traveler Name",
              2: "Third Traveler Name",
              3: "Fourth Traveler Name",
              4: "Fifth Traveler Name",
              5: "Sixth Traveler Name",
              6: "Seventh Traveler Name",
              7: "Eighth Traveler Name",
              8: "Ninth Traveler Name",
              9: "Tenth Traveler Name",
            };

            keyVal =
              travelerLabelMap[index] ||
              `Traveler Name - ${parseInt(index, 10) + 1}`;

            // Combine title, first name, and last name
            valueVal = `${value} ${firstName} ${lastName}`.trim();

            // Add the full name to the accumulator only if it's non-empty
            if (valueVal !== "") {
              acc[keyVal] = valueVal;
            }

            // Skip adding individual firstName and lastName fields
            return acc;
          }

          // Default handling for other keys
          switch (key) {
            case "tripType":
              keyVal = "Trip";
              switch (valueVal) {
                case "oneWay":
                  valueVal = "One Way";
                  break;
                case "returnTrip":
                  valueVal = "Return Trip";
                  break;
                case "multipleCities":
                  valueVal = "Multiple Cities";
                  break;
              }
              break;

            case "fromInput":
              keyVal = "From";
              break;
            case "fromInput0":
              keyVal = "From - 1";
              break;
            case "fromInput1":
              keyVal = "From - 2";
              break;
            case "fromInput2":
              keyVal = "From - 3";
              break;
            case "fromInput3":
              keyVal = "From - 4";
              break;
            case "fromInput4":
              keyVal = "From - 5";
              break;
            case "fromInput5":
              keyVal = "From - 6";
              break;
            case "toInput":
              keyVal = "To";
              break;
            case "toInput0":
              keyVal = "To - 1";
              break;
            case "toInput1":
              keyVal = "To - 2";
              break;
            case "toInput2":
              keyVal = "To - 3";
              break;
            case "toInput3":
              keyVal = "To - 4";
              break;
            case "toInput4":
              keyVal = "To - 5";
              break;
            case "toInput5":
              keyVal = "To - 6";
              break;
            case "departDateInput":
              keyVal = "Depart-Date";
              break;
            case "departDateInput0":
              keyVal = "Depart-Date - 1";
              break;
            case "departDateInput1":
              keyVal = "Depart-Date - 2";
              break;
            case "departDateInput2":
              keyVal = "Depart-Date - 3";
              break;
            case "departDateInput3":
              keyVal = "Depart-Date - 4";
              break;
            case "departDateInput4":
              keyVal = "Depart-Date - 5";
              break;
            case "departDateInput5":
              keyVal = "Depart-Date - 6";
              break;
            case "returnDateInput":
              keyVal = "Return-Date - 6";
              break;
            case "travelersNCabin":
              keyVal = "No of travelers & No of seat/cabin";
              break;
            case "additionalPreferencesForFlight":
              keyVal = "Additional Preferences For Flight";
              break;
            case "additionalPreferencesForFlightYes":
              keyVal = "Additional Preferences For Flight Value";
              break;
            case "additionalPreferencesForHotel":
              keyVal = "Additional Preferences For Hotel";
              break;
            case "additionalPreferencesForHotelYes":
              keyVal = "Additional Preferences For Hotel Value";
              break;
            case "noOfTravelers":
              keyVal = "No Of Travelers";
              break;
            case "travelerEmail":
              keyVal = "Traveler Email";
              break;
            case "travelerNo":
              keyVal = "Traveler Mobile No";
              break;
            case "hearAboutUs":
              keyVal = "Hear About Us";
              break;
            case "consulateApplying":
              keyVal = "Consulate Applying";
              break;
            case "flightItinerary":
              keyVal = "Flight Itinerary";
              break;
            case "visaInterviewDate":
              keyVal = "Visa Interview Date";
              break;
            case "timeZone":
              keyVal = "TimeZone";
              break;
            case "amount":
              keyVal = "Amount";
              break;
            case "MUID":
              keyVal = "MUID";
              break;
            case "transactionId":
              keyVal = "Transaction Id";
              break;
            case "CheckIn":
              keyVal = "Check-In Date";
              break;
            case "CheckOut":
              keyVal = "Check-Out Date";
              break;
            case "destinationOrHotelName":
              keyVal = "Destination Or Hotel Name";
              break;
            case "guestsNRoom":
              keyVal = "No of guests & No of Room";
              break;
            case "onOfHotels":
              keyVal = "No Of Hotels";
              break;

            default:
              break;
          }

          // Add the transformed key and value to the accumulator
          acc[keyVal] = valueVal;
        }
        return acc;
      },
      {}
    );

    // Prepare the heading based on dataFor value
    let heading1 = "<h1>New Flight & Hotel Reservation</h1>"; // Default heading
    let heading2 = "New Flight & Hotel Reservation"; // Default heading
    switch (req.body.dataFor) {
      case "flightReservation":
        heading1 = "<h1>New Flight Reservation</h1>";
        heading2 = "New Flight Reservation";
        break;
      case "hotelBooking":
        heading1 = "<h1>New Hotel Reservation</h1>";
        heading2 = "New Hotel Reservation";
        break;
      case "FlightNHotelReservation":
        heading1 = "<h1>New Flight & Hotel Reservation</h1>";
        heading2 = "New Flight & Hotel Reservation";
        break;
    }

    // Prepare email content
    let emailContent = heading1;
    for (const [key, value] of Object.entries(filteredData)) {
      if (key != 'travelerFirstName0' || key != 'travelerLastName0' || key != 'travelerFirstName1' || key != 'travelerLastName1' || key != 'travelerFirstName2' || key != 'travelerLastName2'|| key != 'travelerFirstName3' || key != 'travelerLastName3' || key != 'travelerFirstName4' || key != 'travelerLastName4' || key != 'travelerFirstName5' || key != 'travelerLastName5') {
        emailContent += `<p><strong>${key}:</strong> ${value}</p>`;
      }
    }

    // Send the email
    const mailOptions = {
      from: "prashant.digitrix@gmail.com",
      to: "prashantbasnet111@gmail.com",
      subject: heading2,
      html: emailContent,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).send("Error sending email");
      }
      res.status(200).send("Form submitted and email sent successfully!");
    });
  } catch (error) {
    res.status(500).send("Error submitting form");
  }
});

app.post("/send-email", (req, res) => {
  const { to, subject, html } = req.body;

  const mailOptions = {
    from: "prashant.digitrix@gmail.com",
    to: to,
    subject: subject,
    html: html,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent: " + info.response);
  });
});

// Send mail functionality end

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
