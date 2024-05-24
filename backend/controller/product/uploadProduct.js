const uploadProductPermissions = require("../../helpers/permission");
const productModel = require("../../models/productModel")

async function uploadProductController(req,res,next) {
    try {

        const sessionUser = req.userId;
        if(uploadProductPermissions(sessionUser)) {
            const uploadProduct = await productModel(req.body);
            const saveProduct = await uploadProduct.save();
    
            res.status(201).json({
                message: "Product uploaded successfully",
                error: false,
                success: true,
                data : saveProduct
            })
        } else {
            throw new Error("You don't have permission to upload")
        }

        
    } catch (error) {
        res.status(404).json({
            message: error.message,
            error: true,
            success: false
        })
    }
}

module.exports = uploadProductController;