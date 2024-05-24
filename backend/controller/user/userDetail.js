const userModel = require("../../models/userModel");

async function userDetailController(req,res) {
    try {
        console.log('user id', req.userId)
        const user = await userModel.findById(req.userId);

        res.status(200).json( {
            data: user,
            error: false,
            success: true,
            message: 'User details'
        })
        console.log('user', user);
    } catch(e) {
        res.status(404).json({
            message: e.message,
            error: true,
            success: false
        })
    }
}

module.exports = userDetailController;