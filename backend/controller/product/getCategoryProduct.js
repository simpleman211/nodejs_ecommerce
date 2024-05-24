const productModel = require("../../models/productModel")

const getCategoryProduct = async(req,res) => {
    try {
        const productCategory = await productModel.distinct('category');
        console.log('data: ',productCategory);
        // array to store product category
        const productByCategory = [];

        for(const category of productCategory) {
            const product = await productModel.findOne({category});
            if(product) {
                productByCategory.push(product);
            }
        }

        res.json({
            message: 'category product',
            data: productByCategory,
            success: true,
            error: false
        })
    } catch (error) {
        res.status(404).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

module.exports = getCategoryProduct;