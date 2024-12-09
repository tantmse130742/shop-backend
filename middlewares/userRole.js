exports.checkUserRole = (req,res,next) =>{
    const role = req.headers['role'];
    if(role && role === 'admin'){
        return next();
    }else{
        res.status(401).json({message:"unauthorized access"})
    }
}