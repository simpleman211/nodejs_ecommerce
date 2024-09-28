const citiesModel = require("../../models/citiesModel");
const { populate } = require("../../models/countriesModel");
const districtModel = require("../../models/districtModel");

const uploadDistrict = async(req,res) => {
    try {
        const citiesId = await citiesModel.findOne({name: req.body.cityName});
        if(!citiesId) {
            return res.status(404).json({
                message: "Can't find cities in the database",
                error: true,
                success: false
            })
        }
        const sameDistrict = await districtModel.findOne({districtName: req.body.districtName});
        if( sameDistrict && sameDistrict.cities_id._id === req.body.cities_id._id)  {
            return res.status(404).json({
                message: "District already exists in same City",
                error: true,
                success: false
            })
        }
        const payload = {
            districtName: req.body.districtName,
            cities_id:  req.body.cities_id
        }
        const district = new districtModel(payload);
        const saveDistrict = await district.save();

        res.json({
            message: "District saved successfully",
            error: false,
            success: true,
            data: saveDistrict
        })
    } catch (error) {
        res.status(404).json({
            message: error.message,
            error: true,
            success: false
        });
    }
}
const getDistrict = async(req,res) => {
    try {
        const districtId = await districtModel.find().sort({createdAt: -1}).populate({
            path: 'cities_id', 
            select: 'cityName',
            populate: {
                path: 'countries_id',
                select: 'countryName'
            }
        });
        res.json({
            data: districtId,
            message: "Get District Successfully",
            error: false,
            success: true
        })
    } catch (error) {
        res.status(404).json({
            message: error.message,
            error: true,
            success: false
        });
    }
}
const deleteDistrict = async(req,res) => {
    try {
        const districtId = req.body._id
        const delDistrict = await districtModel.deleteOne({_id: districtId});

        res.json({
            data: delDistrict,
            success: true,
            error: false,
            message: "Delete Successfully"
        })
    } catch (error) {
        res.status(404).json({
            message: error.message,
            error: true,
            success: false
        });
    }
}
const updateDistrict = async(req,res) => {
    try {
        const {_id,...resBody} = req.body;
        const districtUpdate = await districtModel.findByIdAndUpdate(_id,resBody);

        res.json({
            data: districtUpdate,
            success: true,
            error: false,
            message: "Update Successfully"
        })
    } catch (error) {
        res.status(404).json({
            message: error.message,
            error: true,
            success: false
        });
    }
}
module.exports = {
    uploadDistrict,
    getDistrict,
    deleteDistrict,
    updateDistrict
}