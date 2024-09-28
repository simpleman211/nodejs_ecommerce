const { default: mongoose } = require("mongoose");

const brandSchema = new mongoose.Schema( {
    brandName: {
        type: String,
        required: true,
        trim: true,
    },
    brandImage: [],
    description: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    }
},
{
    timestamps: true,
})

const brandModel = mongoose.model('Brand', brandSchema);
module.exports = brandModel;