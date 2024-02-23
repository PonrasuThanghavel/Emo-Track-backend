const mongoose = require('mongoose');

const sentimentDataSchema = new mongoose.Schema(
    {
      Product_Name: { type: String, required: true },
      Positive_Count: { type: Number, required: true },
      Negative_Count: { type: Number, required: true },
      Neutral_Count: { type: Number, required: true },
      Price: { type: Number, required: true },
      link:{ type: String, required: true},
      rating: { type: String, required: true },
    },
    { collection: 'Sentiment data' } // Specify the collection name
  );
  

module.exports = mongoose.model('SentimentData', sentimentDataSchema);