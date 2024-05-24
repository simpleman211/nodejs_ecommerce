const jwt = require('jsonwebtoken')

async function authToken(req,res, next) {
    try {
        const token = req.cookies?.token;//lấy token từ cookies hoặc từ header của HTTP của web

        console.log("token     ", token);
        if(!token) {
            return res.status(200).json({
                message: 'User not logged in',
                error: true,
                success: false
            })
        }

       jwt.verify(token,process.env.TOKEN_SECRET_KEY, function(err,decoded) {
            console.log(err);
            console.log("decoded",decoded)

            if(err) {
                console.log("error", err)
            }
            req.userId = decoded?._id;//gán giá trị giải mã của id
            next();

       })
        
        

    } catch(e) {
        res.status(400).json( {
            message: e.message || e,
            data: [],
            error: true,
            success: false,
        })
    }
}

module.exports = authToken