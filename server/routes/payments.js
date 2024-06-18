const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51PKoV7P1oisciUmNDEvPlbJX9U5nOVsB0keJ5EVP5RahEcE1K6YSpgcf5jHdo9Tn39QcPEhCycbjgkOZkkiaVIyG00khD2uzqp'); // Replace with your Stripe secret key

router.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
    });
    res.status(200).send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).send('Server error');
  }
});

router.get('/success', (req, res) => {
  res.send('Payment Successful! Thank you for your purchase.');
});

router.get('/cancel', (req, res) => {
  res.send('Payment Canceled. Your order was not processed.');
});

module.exports = router;
