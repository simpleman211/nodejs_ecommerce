const productModel = require("../../models/productModel");
const uploadProductPermissions = require("../../helpers/permission");
const deleteProduct = async(req,res) => {
    try {
        if(uploadProductPermissions(req.userId)) {
            const productId = req.body._id;
            const deleteProduct = await productModel.deleteOne({_id: productId});

            res.json({
                data: deleteProduct,
                message: "Delete product successfully",
                error: false,
                success: true
            })
        }
    } catch (error) {
        res.json({
            message: error?.message || error,
            error: true,
            success: true
        })
    }
}

module.exports = deleteProduct;