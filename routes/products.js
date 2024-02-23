const express = require('express');
const SentimentData = require('../Models/SentimentDataModel'); // Import the Mongoose model

const router = express.Router();

// Get all elements from the collection
router.get('/', async (req, res) => {
  try {
    const elements = await SentimentData.find();
    res.json(elements);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
