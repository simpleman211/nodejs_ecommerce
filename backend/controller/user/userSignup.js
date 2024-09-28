
const bcrypt = require('bcryptjs');
const userModel = require("../../models/userModel");

async function userSignUpController(req,res) {
    try{
        
        const { email,password,name } = req.body;

        const user = await userModel.findOne({ email: email});
        
        if(user) {
            throw new Error("Email already in use")
        }

        if(!email) {
            throw new Error("Please provide email");

        }
        if(!password) {
            throw new Error("Please provide password");
            
        }
        if(!name) {
            throw new Error("Please provide name");
            
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(password, salt);

        if(!hashPassword) {
            throw new Error("Something is wrong with password");
        }

        const payload = {
            ...req.body,
            role: "GENERAL",
            password: hashPassword,
        }

        const userData = new userModel(payload)

        const saveUser = await userData.save()

        res.status(201).json({
            data: saveUser,
            success: true,
            error: false,
            message: "User created success"
        })
    } catch(e) {
        res.status(400).json({
            message: e.message || e,
            error: true,
            success:false
        })
    }
}

module.exports = userSignUpController