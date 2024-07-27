export default function isAllow(...role){
    return (req,res,next)=>{
        if(role.includes(req.userInfo.role)){
            next();
        }else{
            res.status(401).json({message:"you are not allow"});
        }
    }
}