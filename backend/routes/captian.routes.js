const express=require('express')
const router=express.Router();
const {body}=require('express-validator');
const captainController=require('../controllers/captain.controller')

router.post('/register',[
    body('email').isEmail().withMessage('Invalid email'),
    body('fullname.firstname').isLength({min:3}).withMessage('Firstname must be atleast 3 characrter long'),
    body('password').isLength({min:6}).withMessage('password must be atleast 6 character long'),
    body('vehicle.color').isLength({min:3}).withMessage('color must be atleast 3 character long'),
    body('vehicle.plate').isLength({min:3}).withMessage('plate must be atleast 3 character long'),
    body('vehicle.capacity').isInt({min:1}).withMessage('capacity must be atleast  1'),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Invalid vehicle type')
], captainController.registerCaptain
  );  


module.exports=router;