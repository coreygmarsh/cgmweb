const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

router.post('/send', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).send('Message sent successfully');
  } catch (error) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
