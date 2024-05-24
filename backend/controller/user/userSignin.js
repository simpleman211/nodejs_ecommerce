const bcrypt = require('bcryptjs');
const userModel = require("../../models/userModel");
const jwt = require('jsonwebtoken');
async function userSigninController(req,res) {
    try {
        const  {email,password} = req.body;

        const user = await userModel.findOne({ email: email});

        if(!email) {
            throw new Error("Please provide email");

        }
        if(!password) {
            throw new Error("Please provide password");
            
        }

        if(!user) {
            throw new Error("Email not found");
        }

        const checkPassword = await bcrypt.compare(password, user.password);

        if(checkPassword) {
            const tokenData = {
                _id: user._id,
                email: user.email
            }
            const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: 60 * 60 * 4});

            const tokenOption = {
                httpOnly: true,
                secure: true,
            }
            res.cookie("token",token).json({
                message: "Login Success",
                data: token,
                success: true,
                error: false
            })
        } else {
            throw new Error("Please Check Password");
        }

    } catch(e) {
        res.status(200).json({
            message: e.message || e,
            error: true,
            success:false
        })
    }
}

module.exports = userSigninController;