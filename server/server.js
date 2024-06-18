const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

// Configuration settings
// const MONGO_URI = 'mongodb+srv://coreymarshpm:zY07IgXuauC3Pq51@cluster0.bhwc5qn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// const PORT = 5002; 

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5002; // Use the port from .env or default to 5002


const app = express();
app.use(cors());
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
// Middleware to force HTTPS
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(`https://${req.headers.host}${req.url}`);
  }
  next();
});

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

// // Message Model
// const Message = mongoose.model('Message', new mongoose.Schema({
//   name: String,
//   email: String,
//   message: String,
// }));

// Routes
app.get('/', (req, res) => {
  res.send('Server is running');
});
// Message Routes
const messageRoutes = require('./routes/messages');
app.use('/api/messages', messageRoutes);

app.post('/api/messages/send', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).send('Message sent successfully');
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Payment Routes
const paymentRoutes = require('./routes/payments');
app.use('/api/payments', paymentRoutes);

// Creative Assessment Routes
const creativeAssessmentRoutes = require('./routes/CreativeAssessments');
app.use('/api/creative-assessment', creativeAssessmentRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
