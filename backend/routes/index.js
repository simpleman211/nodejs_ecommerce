const express = require('express');
const router = express.Router();

const userSigninController = require('../controller/user/userSignin');
const authToken = require('../middleware/authToken');
const userLogout = require('../controller/user/userLogout');
const allUser = require('../controller/user/allUser');
const updateUser = require('../controller/user/updateUser');
const userDetailController = require('../controller/user/userDetail');
const userSignUpController = require('../controller/user/userSignup');
const uploadProductController = require('../controller/product/uploadProduct');
const getProductController = require('../controller/product/getProduct');
const editProductController = require('../controller/product/editProduct');
const getCategoryProduct = require('../controller/product/getCategoryProduct');
const getCategorySingle = require('../controller/product/getCategorySingle');
const getProductDetails = require('../controller/product/getProductDetals');
const addToCart = require('../controller/user/addToCart');
const countAddToCartProduct = require('../controller/user/countAddToCartProduct');
const addToCartView = require('../controller/user/addToCartView');
const updateCart = require('../controller/user/updateCart');
const deleteCartProduct = require('../controller/user/deleteProductCart');
const searchProduct = require('../controller/product/searchProduct');
const filterProduct = require('../controller/product/filterProduct');


router.post("/signup", userSignUpController);
router.post("/signin", userSigninController);

router.get('/user-details',authToken, userDetailController);
router.get('/logout', userLogout);
router.get('/all-user',authToken, allUser)
router.post('/update-user',authToken, updateUser)
// product
router.post('/upload-product', authToken,uploadProductController)
router.get('/get-product', getProductController)
router.post('/edit-product',authToken, editProductController)
router.get('/get-category-product', getCategoryProduct)
router.post('/category-product', getCategorySingle)
router.post('/product-details', getProductDetails)
router.get('/search', searchProduct)
router.post('/filter-product', filterProduct)
// user add to cart 
router.post('/add-to-cart', authToken, addToCart)
router.get('/countAddToCartProduct',authToken, countAddToCartProduct)
router.get('/view-cart-product',authToken, addToCartView)
router.post('/update-cart',authToken, updateCart)
router.delete('/delete-cart',authToken, deleteCartProduct)


module.exports = router