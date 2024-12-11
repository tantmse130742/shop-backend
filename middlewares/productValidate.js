const Joi = require('joi');

const proudctSchema = Joi.object({
    name:Joi.string().min(3).max(50).required(),
    category:Joi.string().required(),
    price:Joi.number().required(),
    stock:Joi.number().required(),
    supplierId:Joi.string().min(1).required(),
    ratings:Joi.array().items(Joi.number().min(1).max(5)).required()
})

exports.validateRequest = (req,res,next) => {
    const {error} = proudctSchema.validate(req.body);
    if(error){
        return res.status(400).json({message: error.details[0].message});
    }
    next();
}

exports.stockValidate = (req, res, next) => {
    if(req.body.stock < 0){
        return res.status(400).json({message: "Stock must be a positive number"});
    }
    next();
}
   
