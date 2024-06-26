const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config');
const authMiddleware = (req,res,next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({});
    }
    const token = authHeader.split(" ")[1]
    try{
        const user = jwt.verify(token,JWT_SECRET) 
        req.userId = user.userId
        next()
    }
    catch(e){
        return res.status(403).json({

        })
    }
    
}

module.exports = authMiddleware
