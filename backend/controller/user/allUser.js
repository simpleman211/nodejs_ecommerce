const userModel = require("../../models/userModel");

async function allUser(req,res) {
    try {
        console.log('all User: ', req.userId);

        const  allUser = await userModel.find(); 

        res.json( {
            message: 'All Users',
            data: allUser,
            error: false,
            success: true
        })
    } catch(e) {
        res.status(404).json({
            message: e.message,
            error: true,
            success: false
        })
    }
}

module.exports = allUser;