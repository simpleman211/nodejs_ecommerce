const { default: mongoose } = require("mongoose");

const countriesSchema = new mongoose.Schema({
    countryName: String,
    code: Number,
    sign: String,
}, {
    timestamps: true
})

const countriesModel = mongoose.model('Countries', countriesSchema);
module.exports = countriesModel;