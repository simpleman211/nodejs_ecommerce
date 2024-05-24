const cartModel = require("../../models/cartModel");

const deleteCartProduct = async (req, res) => {
        try {
            const currencyId = req.userId;
            const productId = req.body._id;
    
            const deleteProduct = await cartModel.deleteOne({_id: productId})
    
            if(deleteProduct.deletedCount === 0 ) {
                return res.json({
                    message: "Product not found in cart or already deleted",
                    error: true,
                    success: false,
                });
            }
    
            res.json({
                message: "Product deleted out from cart",
                error: false,
                success: true,
                data: deleteProduct
            })
    
        } catch (error) {
            res.json({
                message: error?.message || error,
                error: true,
                success: false,
            })
        }
    }
    module.exports= deleteCartProduct;