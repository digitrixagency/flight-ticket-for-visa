const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const paypal = require("paypal-rest-sdk");
const axios = require("axios");
require("dotenv").config(); // Use dotenv to load environment variables

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Configure PayPal
paypal.configure({
  mode: "sandbox",
  client_id:
    "ATuDVD7NAV1UUXMwnThh9E-lb2pP-Q1f07iSUL1Xh4IuJ22O_YBkLxdC6MX9WmUFy4uJ9UpEyLarRQjz",
  client_secret:
    "ECsUXVr_2mOqDlAY2V1VdAURluzU5tA5Diyc4LZfEAJqY2klmEL4gZbsYJtLYjLTW1ercp-RFfguBo0D",
});

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "prashant.digitrix@gmail.com",
    pass: "cwvr difd hujk tose",
  },
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
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

app.get("/failed", (req, res) => {
  res.send("Payment canceled by the user.");
});

app.get("/success", async (req, res) => {
  const { paymentId, PayerID } = req.query;

  const globalData = global.GlobalFormData;

  try {
    const execute_payment_json = {
      payer_id: PayerID,
      transactions: [
        {
          amount: {
            currency: "USD",
            total: globalData.amount, // Ensure amount is passed and stored in session
          },
        },
      ],
    };

    await paypal.payment.execute(
      paymentId,
      execute_payment_json,
      async (error, payment) => {
        if (error) {
          throw error;
        } else {
          const formData = globalData; // Retrieve form data from session

          await axios.post("http://localhost:5000/api/submit-form", formData);


          const filteredData = Object.entries(formData).reduce(
            (acc, [key, value]) => {
              if (key !== "dataFor" && value && value.trim() !== "") {
                let keyVal = key;
                let valueVal = value;
                if (valueVal !== "") {
                  acc['Payment-Id'] = paymentId;
                  acc['Payer-ID'] = PayerID;
                }
                if (key.startsWith("travelTitle")) {
                  const index = key.replace("travelTitle", "");
                  const firstNameKey = `travelerFirstName${index}`;
                  const lastNameKey = `travelerLastName${index}`;
      
                  const firstName = req.body[firstNameKey] || "";
                  const lastName = req.body[lastNameKey] || "";
      
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
      
                  valueVal = `${value} ${firstName} ${lastName}`.trim();
      
                  if (valueVal !== "") {
                    acc[keyVal] = valueVal;
                  }
                  return acc;
                }
      
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
                    keyVal = "Departure Date";
                    break;
                  case "departDateInput0":
                    keyVal = "Departure Date - 1";
                    break;
                  case "departDateInput1":
                    keyVal = "Departure Date - 2";
                    break;
                  case "departDateInput2":
                    keyVal = "Departure Date - 3";
                    break;
                  case "departDateInput3":
                    keyVal = "Departure Date - 4";
                    break;
                  case "departDateInput4":
                    keyVal = "Departure Date - 5";
                    break;
                  case "departDateInput5":
                    keyVal = "Departure Date - 6";
                    break;
                  case "returnDateInput":
                    keyVal = "Return Date";
                    break;
                  case "travelersNCabin":
                    keyVal = "Number of Travelers";
                    break;
                  case "additionalPreferencesForFlight":
                    keyVal = "Additional Preferences for Flight";
                    break;
                  case "additionalPreferencesForFlightYes":
                    keyVal = "Additional Preferences for Flight (Yes)";
                    break;
                  case "additionalPreferencesForHotel":
                    keyVal = "Additional Preferences for Hotel";
                    break;
                  case "additionalPreferencesForHotelYes":
                    keyVal = "Additional Preferences for Hotel (Yes)";
                    break;
                  case "noOfTravelers":
                    keyVal = "Number of Travelers";
                    break;
                  case "travelerEmail":
                    keyVal = "Traveler Email";
                    break;
                  case "travelerNo":
                    keyVal = "Traveler No";
                    break;
                  case "travelTitle0":
                    keyVal = "Traveler Title - 1";
                    break;
                  case "travelTitle1":
                    keyVal = "Traveler Title - 2";
                    break;
                  case "travelTitle2":
                    keyVal = "Traveler Title - 3";
                    break;
                  case "travelTitle3":
                    keyVal = "Traveler Title - 4";
                    break;
                  case "travelTitle4":
                    keyVal = "Traveler Title - 5";
                    break;
                  case "travelTitle5":
                    keyVal = "Traveler Title - 6";
                    break;
                  case "travelTitle6":
                    keyVal = "Traveler Title - 7";
                    break;
                  case "travelTitle7":
                    keyVal = "Traveler Title - 8";
                    break;
                  case "travelTitle8":
                    keyVal = "Traveler Title - 9";
                    break;
                  case "travelTitle9":
                    keyVal = "Traveler Title - 10";
                    break;
                  case "travelerFirstName0":
                    keyVal = "First Name - 1";
                    break;
                  case "travelerFirstName1":
                    keyVal = "First Name - 2";
                    break;
                  case "travelerFirstName2":
                    keyVal = "First Name - 3";
                    break;
                  case "travelerFirstName3":
                    keyVal = "First Name - 4";
                    break;
                  case "travelerFirstName4":
                    keyVal = "First Name - 5";
                    break;
                  case "travelerFirstName5":
                    keyVal = "First Name - 6";
                    break;
                  case "travelerFirstName6":
                    keyVal = "First Name - 7";
                    break;
                  case "travelerFirstName7":
                    keyVal = "First Name - 8";
                    break;
                  case "travelerFirstName8":
                    keyVal = "First Name - 9";
                    break;
                  case "travelerFirstName9":
                    keyVal = "First Name - 10";
                    break;
                  case "travelerLastName0":
                    keyVal = "Last Name - 1";
                    break;
                  case "travelerLastName1":
                    keyVal = "Last Name - 2";
                    break;
                  case "travelerLastName2":
                    keyVal = "Last Name - 3";
                    break;
                  case "travelerLastName3":
                    keyVal = "Last Name - 4";
                    break;
                  case "travelerLastName4":
                    keyVal = "Last Name - 5";
                    break;
                  case "travelerLastName5":
                    keyVal = "Last Name - 6";
                    break;
                  case "travelerLastName6":
                    keyVal = "Last Name - 7";
                    break;
                  case "travelerLastName7":
                    keyVal = "Last Name - 8";
                    break;
                  case "travelerLastName8":
                    keyVal = "Last Name - 9";
                    break;
                  case "travelerLastName9":
                    keyVal = "Last Name - 10";
                    break;
                  case "hearAboutUs":
                    keyVal = "How did you hear about us?";
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
                    keyVal = "Time Zone";
                    break;
                  case "amount":
                    keyVal = "Amount";
                    break;
                  case "MUID":
                    keyVal = "MUID";
                    break;
                  case "transactionId":
                    keyVal = "Transaction ID";
                    break;
                  case "CheckIn":
                    keyVal = "Check-In";
                    break;
                  case "CheckOut":
                    keyVal = "Check-Out";
                    break;
                  case "destinationOrHotelName":
                    keyVal = "Destination/Hotel Name";
                    break;
                  case "guestsNRoom":
                    keyVal = "Guests & Room";
                    break;
                  case "onOfHotels":
                    keyVal = "Number of Hotels";
                    break;
                }
      
                if (valueVal !== "") {
                  acc[keyVal] = valueVal;
                }
              }
              return acc;
            },
            {}
          );
      
          sendMailFun({ userdata: filteredData });


          res.send("Payment successful and data saved!");
        }
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).send("Error processing payment or saving data");
  }
});

app.post("/api/process-payment", async (req, res) => {
  try {
    const { amount, transactionId } = req.body.formData;
    global.GlobalFormData = req.body.formData;
    const create_payment_json = {
      intent: "sale",
      payer: {
        payment_method: "paypal",
      },
      redirect_urls: {
        return_url: "http://localhost:5000/success",
        cancel_url: "http://localhost:5000/failed",
      },
      transactions: [
        {
          item_list: {
            items: [
              {
                name: `Transaction ${transactionId}`,
                sku: transactionId,
                price: amount,
                currency: "USD",
                quantity: 1,
              },
            ],
          },
          amount: {
            currency: "USD",
            total: amount,
          },
          description: `Payment for transaction ${transactionId}`,
        },
      ],
    };

    paypal.payment.create(create_payment_json, function (error, payment) {
      if (error) {
        // console.error(error);
        console.log("Error Response Status:", error.response.httpStatusCode);
        console.log("Validation Details:", error.response.details);
        console.log("Full Error:", error);
      } else {
        return res.json(payment);
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error processing payment");
  }
});

app.post("/api/submit-form", async (req, res) => {
  try {
    const newFormData = new FormData(req.body);
    await newFormData.save();

    const filteredData = Object.entries(req.body).reduce(
      (acc, [key, value]) => {
        if (key !== "dataFor" && value && value.trim() !== "") {
          let keyVal = key;
          let valueVal = value;

          if (key.startsWith("travelTitle")) {
            const index = key.replace("travelTitle", "");
            const firstNameKey = `travelerFirstName${index}`;
            const lastNameKey = `travelerLastName${index}`;

            const firstName = req.body[firstNameKey] || "";
            const lastName = req.body[lastNameKey] || "";

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

            valueVal = `${value} ${firstName} ${lastName}`.trim();

            if (valueVal !== "") {
              acc[keyVal] = valueVal;
            }
            return acc;
          }

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
              keyVal = "Departure Date";
              break;
            case "departDateInput0":
              keyVal = "Departure Date - 1";
              break;
            case "departDateInput1":
              keyVal = "Departure Date - 2";
              break;
            case "departDateInput2":
              keyVal = "Departure Date - 3";
              break;
            case "departDateInput3":
              keyVal = "Departure Date - 4";
              break;
            case "departDateInput4":
              keyVal = "Departure Date - 5";
              break;
            case "departDateInput5":
              keyVal = "Departure Date - 6";
              break;
            case "returnDateInput":
              keyVal = "Return Date";
              break;
            case "travelersNCabin":
              keyVal = "Number of Travelers";
              break;
            case "additionalPreferencesForFlight":
              keyVal = "Additional Preferences for Flight";
              break;
            case "additionalPreferencesForFlightYes":
              keyVal = "Additional Preferences for Flight (Yes)";
              break;
            case "additionalPreferencesForHotel":
              keyVal = "Additional Preferences for Hotel";
              break;
            case "additionalPreferencesForHotelYes":
              keyVal = "Additional Preferences for Hotel (Yes)";
              break;
            case "noOfTravelers":
              keyVal = "Number of Travelers";
              break;
            case "travelerEmail":
              keyVal = "Traveler Email";
              break;
            case "travelerNo":
              keyVal = "Traveler No";
              break;
            case "travelTitle0":
              keyVal = "Traveler Title - 1";
              break;
            case "travelTitle1":
              keyVal = "Traveler Title - 2";
              break;
            case "travelTitle2":
              keyVal = "Traveler Title - 3";
              break;
            case "travelTitle3":
              keyVal = "Traveler Title - 4";
              break;
            case "travelTitle4":
              keyVal = "Traveler Title - 5";
              break;
            case "travelTitle5":
              keyVal = "Traveler Title - 6";
              break;
            case "travelTitle6":
              keyVal = "Traveler Title - 7";
              break;
            case "travelTitle7":
              keyVal = "Traveler Title - 8";
              break;
            case "travelTitle8":
              keyVal = "Traveler Title - 9";
              break;
            case "travelTitle9":
              keyVal = "Traveler Title - 10";
              break;
            case "travelerFirstName0":
              keyVal = "First Name - 1";
              break;
            case "travelerFirstName1":
              keyVal = "First Name - 2";
              break;
            case "travelerFirstName2":
              keyVal = "First Name - 3";
              break;
            case "travelerFirstName3":
              keyVal = "First Name - 4";
              break;
            case "travelerFirstName4":
              keyVal = "First Name - 5";
              break;
            case "travelerFirstName5":
              keyVal = "First Name - 6";
              break;
            case "travelerFirstName6":
              keyVal = "First Name - 7";
              break;
            case "travelerFirstName7":
              keyVal = "First Name - 8";
              break;
            case "travelerFirstName8":
              keyVal = "First Name - 9";
              break;
            case "travelerFirstName9":
              keyVal = "First Name - 10";
              break;
            case "travelerLastName0":
              keyVal = "Last Name - 1";
              break;
            case "travelerLastName1":
              keyVal = "Last Name - 2";
              break;
            case "travelerLastName2":
              keyVal = "Last Name - 3";
              break;
            case "travelerLastName3":
              keyVal = "Last Name - 4";
              break;
            case "travelerLastName4":
              keyVal = "Last Name - 5";
              break;
            case "travelerLastName5":
              keyVal = "Last Name - 6";
              break;
            case "travelerLastName6":
              keyVal = "Last Name - 7";
              break;
            case "travelerLastName7":
              keyVal = "Last Name - 8";
              break;
            case "travelerLastName8":
              keyVal = "Last Name - 9";
              break;
            case "travelerLastName9":
              keyVal = "Last Name - 10";
              break;
            case "hearAboutUs":
              keyVal = "How did you hear about us?";
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
              keyVal = "Time Zone";
              break;
            case "amount":
              keyVal = "Amount";
              break;
            case "MUID":
              keyVal = "MUID";
              break;
            case "transactionId":
              keyVal = "Transaction ID";
              break;
            case "CheckIn":
              keyVal = "Check-In";
              break;
            case "CheckOut":
              keyVal = "Check-Out";
              break;
            case "destinationOrHotelName":
              keyVal = "Destination/Hotel Name";
              break;
            case "guestsNRoom":
              keyVal = "Guests & Room";
              break;
            case "onOfHotels":
              keyVal = "Number of Hotels";
              break;
          }

          if (valueVal !== "") {
            acc[keyVal] = valueVal;
          }
        }
        return acc;
      },
      {}
    );

    sendMailFun({ userdata: filteredData });

    res.send("Form data received and email sent!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving form data");
  }
});

function sendMailFun({ userdata }) {
  const mailOptions = {
    from: "prashant.digitrix@gmail.com",
    to: "prashantbasnet111@gmail.com",
    subject: `Reservation Confirmation for ${userdata.dataFor}`,
    html: `
      <h1>${
        userdata.dataFor === "flightReservation"
          ? "New Flight Reservation"
          : userdata.dataFor === "hotelBooking"
          ? "New Hotel Reservation"
          : "New Flight & Hotel Reservation"
      }</h1>
      <p>${Object.entries(userdata)
        .map(([key, value]) => `<strong>${key}:</strong> ${value}`)
        .join("<br>")}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
