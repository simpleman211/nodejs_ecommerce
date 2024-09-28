const { default: mongoose } = require("mongoose");

const warnSchema = new mongoose.Schema({
    warnName: {
        type: String,
        required: true
    },
    district_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'District',
        required: true
    }
}, {
    timestamps: true
})

const warnModel = new mongoose.model('Warn', warnSchema);
module.exports = warnModel;