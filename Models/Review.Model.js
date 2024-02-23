const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//Review details schema 
const ReviewSchema = new Schema({
    reviewerName:{ type: String, required: true },//user name
    review: { type: String, required: true },//review given by user
    product: { type: String, required: true },// product name
    rating:{type:Number,required: true},//rating given by user
    overalrating: { type: Number, required: true}
    
  
});

const Review = mongoose.model('Review', ReviewSchemaSchema);

module.exports = Review;
