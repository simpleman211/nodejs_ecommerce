const { default: mongoose } = require("mongoose");

const distristSchema = new mongoose.Schema({
    districtName: {
        type: String,
        required: true
    },
    cities_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cities',
        required: true
    }
},
{
    timestamps: true,
})

const districtModel = new mongoose.model('District', distristSchema);
module.exports = districtModel;

