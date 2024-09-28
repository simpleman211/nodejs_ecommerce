const brandModel = require("../../models/brandModel");

const deleteBrand = async(req,res) => {
    try {
        const brandId = req.body._id;
        const brandDel = await brandModel.deleteOne({_id: brandId});
        console.log('data: ', brandDel);
        res.json({
            data: brandDel,
            message: "Delete successfully",
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

module.exports = deleteBrand;