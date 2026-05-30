const express=require('express')
const router=express.Router();
const {body} = require("express-validator")
const userController=require('../controllers/user.controller')

router.post('/register',[
    body('email').isEmail().withMessage('Invallid email'),
    body('fullname.firstname').isLength({min:3}).withMessage('firstname should be at least 3 character'),
    body('password').isLength({min:6}).withMessage('password should be atleast 3 character long')
],

userController.registerUser

)






module.exports=router;