const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    profilePic: String,
    role: String,
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
    },
    phone: String
      
});


const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
