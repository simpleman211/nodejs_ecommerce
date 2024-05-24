const productModel = require("../../models/productModel")

const getCategorySingle = async(req,res) => {
    try {
        const {category} = req?.body || req?.query;
        const product = await productModel.find({category});

        res.json({
            data: product,
            message: "Pruduct",
            error: false,
            success: true
        })
    } catch (error) {
        res.status(404).json({
            message: error.message,
            error: true,
            success: false
        })
    }
}
module.exports = getCategorySingle;