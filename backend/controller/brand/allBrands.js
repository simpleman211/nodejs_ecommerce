const brandModel = require("../../models/brandModel")

const allBrands = async(req,res) => {
    try {
        const brand = await brandModel.find();

        res.json({
            data: brand,
            message: "All brand",
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