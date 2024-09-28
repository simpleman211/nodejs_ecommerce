const userModel = require("../../models/userModel");

const getUserById = async (req, res, next) => {
    try {
        const userId = req.userId;
        const user = await userModel.findById(req.userId);
        res.json({
            data: user,
            error: false,
            success: true
        })
    } catch (error) {
        res.status(404).json({
            message: error.message,
            error: true,
            success: false
        })
    }
}

module.exports = getUserById;