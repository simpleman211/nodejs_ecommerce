const mongoose = require('mongoose');

async function connectDB() {
    try {
        mongoose.connect(process.env.MONGO);
    }catch(e) {
        console.log(e)
    }
}
module.exports = connectDB;