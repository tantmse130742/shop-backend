exports.checkUserRole = (req,res,next) =>{
    const role = req.headers['role'];
    if(!role){
        return res.status(400).json({message:"missing header",});
    }
    if(role && role === 'admin'){
        return next();
    }else{
        res.status(403).json({message:"unauthorized access"})
    }
}
