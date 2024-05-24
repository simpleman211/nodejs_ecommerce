async function userLogout(req, res, next) {
    try {
        res.clearCookie('token');


        res.json({
            message: "User logged out Successfully",
            error:false,
            success: true,
            data: []
        })
    } catch (err) {
        res.status(200).json({
            message: err.message || err,
            error: true,
            success:false
        })
    }
}

module.exports = userLogout;