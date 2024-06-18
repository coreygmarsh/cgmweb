const express = require('express');
const router = express.Router();
const CreativeAssessment = require('../models/CreativeAssessment');

router.post('/submit', async (req, res) => {
  try {
    const newSolution = new CreativeAssessment(req.body);
    await newSolution.save();
    res.status(201).send('Form submitted successfully');
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
