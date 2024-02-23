const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 4000;

// MongoDB connection
mongoose.connect('mongodb+srv://ponrasuthanghavel:Admin09@cluster0.lnvpvbj.mongodb.net/Emo-track', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connection open to database'));

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Include the route
const route = require('./routes/products');
app.use('/data', route); // You can adjust the route path as needed

// Start the Express server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

