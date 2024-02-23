const mongoose = require('mongoose');

const Userschema = new mongoose.Schema(
    {
        User_Name: { type: String, required: true },
        Password: { type: String, required: true },
        Email: { type: String, required: true },
        Phone_number: { type: Number, required: true },
     
    },
    { collection: 'User_Data' } // Specify the collection name
  );
  

module.exports = mongoose.model('User_Data', Userschema);