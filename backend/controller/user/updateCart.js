const cartModel = require("../../models/cartModel");


const updateCart = async (req, res, next) => {
    try {
        const currecy = req.userId;
        const productId = req.body._id;

        const quantity = req.body.quantity;

        const updateCart = await cartModel.updateOne({_id: productId}, {
            ...(quantity && { quantity: quantity }),
        })

        res.json({
            message: "Updated quantity",
            data: updateCart,
            error: false,
            success: true
        })
    } catch (error) {
        res.json({
            message: error?.message || error,
            error: true,
            success: false,
        })
    }
}
// 
module.exports = updateCart;
