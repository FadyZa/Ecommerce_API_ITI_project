import jwt from "jsonwebtoken";


const verifyToken = (req,res,next)=>{
    jwt.verify(req.headers.token, 'MySecret', function(err, decoded) {
        if (err) return res.json({messae:err});
        req.userInfo = decoded;
        next();
    });
}

export default verifyToken;
