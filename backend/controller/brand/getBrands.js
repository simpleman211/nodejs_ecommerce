const brandModel = require("../../models/brandModel")

const getBrands = async(req,res) => {
    try {
        const getBrands = await brandModel.find().sort({createdAt: -1});

        res.json({
            data: getBrands,
            message: "All Brands",
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

module.exports = getBrands;