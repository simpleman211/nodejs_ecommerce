const { default: mongoose } = require("mongoose");

const citiesSchma = new mongoose.Schema({
    cityName: {
        type: String,
        required: true
    },
    countries_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Countries',
        required: true
    }
}, {
    timestamps: true
})

const citiesModel = new mongoose.model('Cities', citiesSchma);
module.exports = citiesModel;