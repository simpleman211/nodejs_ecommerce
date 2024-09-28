const { populate } = require("../../models/userModel");
const warnModel = require("../../models/wardModel");

const uploadWarn = async(req,res) => {
    try {
        const wardExists = await warnModel.findOne({
            warnName: req.body.warnName,
            district_id : req.body.district_id
        });
        if (wardExists) {
            return res.status(404).json({
                message: "Warn already in the same district",
                error: true,
                success: false
            });
        }
        
        const payload = {
            warnName: req.body.warnName,
            district_id: req.body.district_id
        }

        const warn = new warnModel(payload)
        const savedWarn = await warn.save();
        res.json({
            data: savedWarn,
            error: false,
            success: true,
            message: "Upload successfully"
        })
    } catch (error) {
        res.status(404).json({
            message: error.message,
            error: true,
            success: false
        })
    }
}
const getWard = async (req, res) => {
    try {
        const ward = await warnModel.find().sort({createdAt: -1})
                                    .populate({
                                        path: 'district_id',
                                        select: 'districtName',
                                        populate: {
                                            path: 'cities_id',
                                            select: 'cityName',
                                            populate: {
                                                path: 'countries_id',
                                                Element: 'countryName',
                                            }
                                        }
                                    })
        res.json({
            data: ward,
            success: true,
            error: false,
            message: 'All Ward'
        })
    } catch (error) {
        res.status(404).json({
            message: error.message,
            error: true,
            success: false
        })
    }
}
const updateWard = async(req,res) => {
    try {
        const {_id, ...resBody} = req.body;
        const updateWarn = await warnModel.findByIdAndUpdate(_id,resBody);

        res.json({
            data: updateWarn,
            message: 'Update success',
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
const deleteWard = async(req,res) => {
    try {
        const idWard = req.body._id;
        const delWard = await warnModel.deleteOne({_id: idWard});

        res.json({
            data: delWard,
            success: true,
            error: false,
            message: 'Delete success'
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
    uploadWarn,
    getWard,
    updateWard,
    deleteWard
}