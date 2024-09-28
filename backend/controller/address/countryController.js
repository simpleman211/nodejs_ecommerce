const countriesModel = require("../../models/countriesModel")

const uploadCountry = async (req, res, next) => {
    try {
        const countryExitst = req.body.countryName;
        const findCountry = await countriesModel.findOne({ countryName: countryExitst});
        if(findCountry) {
            return res.status(404).json({
                message: "Country have existed",
                error: true,
                success: false
            })
        }
        const country = await countriesModel(req.body);
        const uploadCountry = await country.save();

        res.json({
            data: uploadCountry,
            message: "Upload Country successfully",
            success: true,
            error: false
        })
    } catch (error) {
        res.status(404).json({
            message: error.message,
            error: true,
            success: false
        })
    }
}
const getCountry = async(req,res) => {
    try {
        const country = await countriesModel.find().sort({createdAt: -1});
        res.json({
            data: country,
            message: "Country successfully",
            error: false,
            success: true
        })
    } catch (error) {
        res.status(404).json({
            message: error.message,
            error: true,
            success: false
        })
    }
}
const updateCountry = async(req,res) => {
    try {
        const {_id, ...resBody} = req.body
        const updateCountry = await countriesModel.findByIdAndUpdate(_id,resBody)

        res.json({
            data: updateCountry,
            message: "Country successfully updated",
            error: false,
            success: true
        })
    } catch (error) {
        res.status(404).json({
            message: error.message,
            error: true,
            success: false
        })
    } 
}

const deleteCountry = async(req,res) => {
    try {
        const countryId = req.body._id;
        const deleteCountryId = await countriesModel.deleteOne({_id: countryId});
        console.log(deleteCountryId)
        res.json({
            data: deleteCountryId,
            message: "Country successfully deleted",
            error: false,
            success: true
        })
    } catch (error) {
        res.status(404).json({
            message: error.message,
            error: true,
            success: false
        })
    }
}

module.exports = {
    uploadCountry,
    getCountry,
    updateCountry,
    deleteCountry,
};
