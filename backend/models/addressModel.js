const { default: mongoose } = require("mongoose");

const addressSchecma = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    address_line_1: {
        type: String,
        required: true
    },
    address_line_2: {
        type: String,
        required: true
    },
    warn_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Warn',
        required: true
    },
    district_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'District',
        required: true
    },
    city_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cities',
        required: true
    },
    coutry_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Countries',
        require: true
    }
})

const addressModel = mongoose.model('Address', addressSchecma);
module.exports = addressModel