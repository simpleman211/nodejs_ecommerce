const cartModel = require("../../models/cartModel");

const addToCart = async(req,res) => {
    try {
        const {productId} = req?.body;
        const currentUser = req?.userId;

        const isProductAvailable = await cartModel.findOne({ productId })

        console.log('cart: ', isProductAvailable)

        if(isProductAvailable) {
            return res.json({
                message: "Product already have in your cart",
                success: true,
                error: false
            })
        }
        const payload = {
            productId: productId,
            quantity: 1,
            userId: currentUser
        }

        const newProductToCart = new cartModel(payload)

        const saveProduct = await newProductToCart.save();

        res.json({
            data: saveProduct,
            message: "Product added in cart",
            success: true,
            error: false
        })

    } catch (error) {
        res.json({
            message: error?.message || error,
            error: true,
            success: true
        })
    }
}

module.exports = addToCart;