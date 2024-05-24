
const productModel = require("../../models/productModel")

const getProductController = async(req,res) => {
    try {
        const allProduct = await productModel.find().sort({createdAt : -1});

        res.json({
            message: 'All Products',
            success: true,
            error: false,
            data: allProduct
        })
    } catch (error) {
        res.status(404).json({
            message: error.message,
            error: true,
            success: false
        })
    }
}

module.exports = getProductController;