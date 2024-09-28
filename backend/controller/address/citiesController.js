
const citiesModel = require("../../models/citiesModel");
const countriesModel = require("../../models/countriesModel");

const uploadCities = async(req,res) => {
    try {
        const country = await countriesModel.findOne({name: req.body.countryName});
        if(!country) {
            return res.status(404).json({
                message: "Country not found",
                error: true,
                success: false
            });
        }
        const sameCities = await citiesModel.findOne({cityName:  req.body.cityName});
        if(req.body.countries_id == country._id && req.body.cityName !== sameCities) {
            return res.status(404).json({
                message: "City already exists in the same country",
                error: true,
                success: false
            })
        }
        const payload = {
            cityName: req.body.cityName,
            countries_id: req.body.countries_id,
        };

        const newCities = new citiesModel(payload);
        const saveCities =  await newCities.save();
        res.json({
            data: saveCities,
            message: 'Updated cities successfully',
            success: true,
            error: false
        });
    } catch (error) {
        res.status(404).json({
            message: error.message,
            error: true,
            success: false
        });
    }
}


const getCities = async (req, res) => {
    try {
        const cities = await citiesModel.find().sort({created_at: -1}).populate('countries_id', 'countryName');
        res.json({
            data: cities,
            message: 'Cities',
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
const updateCities = async (req, res) => {
    try {
        const {_id, ...resBody} = req.body;
        const updateCities = await citiesModel.findByIdAndUpdate(_id,resBody);

        res.json({
            data: updateCities,
            message: 'Cities updated successfully',
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
const deleteCities = async(req,res) => {
    try {
        const citiesId  = req.body._id;
        const deleteCitiesRequest = await citiesModel.deleteOne({_id:citiesId});

        res.json({
            data: deleteCitiesRequest,
            message: 'Cities deleted successfully',
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
module.exports = {
    uploadCities,
    getCities,
    updateCities,
    deleteCities
}