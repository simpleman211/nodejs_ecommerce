const userModel = require("../../models/userModel");


async function updateUser(req,res) {
    try {

        const sessionUser = req.userId

        const {userId, email, name, role} = req.body;

        const payload = {
            ...(email && {email: email}),
            ...(name && {name: name}),
            ...(role && {role: role})
        }

        const user = await userModel.findById(sessionUser);

        const updateUser = await userModel.findByIdAndUpdate(userId, payload);

        res.json({
            data: updateUser,
            message: "user updated",
            success: true,
            error: false
        })
    } catch (error) {
        res.status(404).json({
            message: error.message,
            error: true,
            success: false
        })
    }
}

const updateUserByCustomer = async (req,res) => {
    try {
        const sessionUser = req.userId;
        const {userId, email, name, phone, password,profilePic} = req.body;

        const payload = {
            ...(email && {email: email}),
            ...(name && {name: name}),
            ...(phone && {phone: phone}),
            ...(password && {password: password}),
            ...(profilePic && {profilePic: profilePic}),
        }

        const updatedUser = await userModel.findOneAndUpdate(
            { _id: sessionUser },
            payload,
            { new: true }
        );
        console.log('updated user', updatedUser)
        console.log('user ID: ', userId)
        res.json({
            data: updatedUser,
            message: 'Updated user successfully',
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

module.exports = {
    updateUser,
    updateUserByCustomer
};