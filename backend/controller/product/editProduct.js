const uploadProductPermissions = require("../../helpers/permission");
const productModel = require("../../models/productModel")

async function editProductController(req,res,next) {
    try {
        if(uploadProductPermissions(req.userId)) {
            const {_id, ...resBody} = req.body;

            const updateProduct = await productModel.findByIdAndUpdate(_id,resBody);

            res.json({
                message: 'Updated product successfully',
                data: updateProduct,
                success: true,
                error: false
            })

        } else {
            throw new Error("You don't have permission to edit this product")
        }
        
        
    } catch (error) {
        res.status(404).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

module.exports = editProductController;