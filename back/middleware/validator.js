import { check,validationResult } from "express-validator";

export const userValidator=[
    check("name").trim().not().isEmpty().withMessage("Name is Missing"),
    check("email").normalizeEmail().isEmail().withMessage("Email is not Valid"),
    check("password").trim().not().isEmpty().withMessage("Password is Missing").isLength({min:8,max:20}).withMessage("Password must be 8 char long")
];


export const validate=(req,res,next)=>{
    const error=validationResult(req).array();
    // console.log(error);
    if(error.length>0){
        return res.json({error:error[0].msg});
    }
    next();
};