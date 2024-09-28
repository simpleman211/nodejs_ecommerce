const express = require('express');
const router = express.Router();

const userSigninController = require('../controller/user/userSignin');
const authToken = require('../middleware/authToken');
const userLogout = require('../controller/user/userLogout');
const allUser = require('../controller/user/allUser');
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
const deleteProduct = require('../controller/product/deleteProduct');
const uploadBrand = require('../controller/brand/uploadBrand');
const getBrands = require('../controller/brand/getBrands');
const deleteBrand = require('../controller/brand/deleteBrand');
const { uploadCountry, getCountry, updateCountry, deleteCountry } = require('../controller/address/countryController');
const { uploadCities, getCities, updateCities, deleteCities } = require('../controller/address/citiesController');
const { uploadDistrict, getDistrict, deleteDistrict, updateDistrict } = require('../controller/address/districtController');
const { uploadWarn, getWard, updateWard, deleteWard } = require('../controller/address/warnController');
const { updateUser, updateUserByCustomer } = require('../controller/user/updateUser');
const getUserById = require('../controller/user/getUserById');



router.post("/signup", userSignUpController);
router.post("/signin", userSigninController);

router.get('/user-details',authToken, userDetailController);
router.get('/logout', userLogout);
router.get('/all-user',authToken, allUser)
router.post('/update-user',authToken, updateUser)
router.post('/update-profile', authToken, updateUserByCustomer)
router.post('/get-user-single', authToken,getUserById);
// product
router.post('/upload-product', authToken,uploadProductController)
router.get('/get-product', getProductController)
router.post('/edit-product',authToken, editProductController)
router.get('/get-category-product', getCategoryProduct)
router.post('/category-product', getCategorySingle)
router.post('/product-details', getProductDetails)
router.get('/search', searchProduct)
router.post('/filter-product', filterProduct)
router.delete('/delete-product',authToken, deleteProduct)
// user add to cart 
router.post('/add-to-cart', authToken, addToCart)
router.get('/countAddToCartProduct',authToken, countAddToCartProduct)
router.get('/view-cart-product',authToken, addToCartView)
router.post('/update-cart',authToken, updateCart)
router.delete('/delete-cart',authToken, deleteCartProduct)
// brand
router.post('/upload-brand', authToken, uploadBrand)
router.get('/get-brand', getBrands)
router.delete('/delete-brand',authToken, deleteBrand)
// address 
router.post('/upload-country', authToken, uploadCountry);
router.get('/get-country', getCountry);
router.post('/update-country', authToken, updateCountry);
router.delete('/delete-country',authToken, deleteCountry);
// cities
router.post('/upload-cities', authToken, uploadCities);
router.get('/get-cities', getCities);
router.post('/update-cities', authToken, updateCities);
router.delete('/delete-cities',authToken, deleteCities);
// district
router.post('/upload-district', authToken, uploadDistrict);
router.get('/get-district', getDistrict);
router.delete('/delete-district', authToken, deleteDistrict);
router.post('/update-district', authToken, updateDistrict);
// warn
router.post('/upload-warn', authToken, uploadWarn);
router.get('/get-ward', authToken, getWard);
router.post('/update-ward', authToken, updateWard);
router.delete('/delete-ward', authToken, deleteWard);
module.exports = router