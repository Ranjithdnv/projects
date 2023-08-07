// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

const express = require('express');
const app = express();
const stripe = require('stripe')('sk_test_51NbyFlSB3FWmT5igidbCW0wxwaPYO2j1nUUI5OOgrhvetCF0CnPOeJvgfZTBUIb7PrrT1DuqzHefnfvkpXAIN0wj00HOgjDYbG')
const cors = require("cors")
const bodyParser = require('body-parser');

// middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'inr',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    payment_method_types:['card'],
    mode: 'payment',
    success_url: 'http://localhost:5000/',
    cancel_url: 'http://localhost:5000/',
  });

  res.send(session)
});

app.listen(5000, () => console.log(`Listening on port ${5000}!`));