const uploadProductPermissions = require("../../helpers/permission")
const brandModel = require("../../models/brandModel")

const uploadBrand = async(req,res) => {
    try {
        if(uploadProductPermissions(req.userId)) {
            const uploadBrand = await brandModel(req.body);
            const saveBrand = await uploadBrand.save();

            res.json({
                message: "Successfully uploaded brand",
                success: true,
                errors: false,
                data: saveBrand
            })
        } else {
            throw new Error("You don't have permission to do this")
        }
    } catch (error) {
        res.status(404).json({
            message: error.message,
            error: true,
            success: false
        })
    }
}

module.exports = uploadBrand;