const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JSON_WT_ = process.env.JSON_WT;
const User  = require('../models/User')
const fetchUser = require("../middleware/FetchUser");
const express = require('express')
const router = express.Router()
router.post('/signup',[
    body('mail',"Enter The Valid Email").isEmail(),
    body('name',"Enter The Valid Name").isLength({min:5}),
    body('password',"Enter The Valid Password").isLength({min:8})
],async (request,response)=>{
    const error = validationResult(request);
    if(!error.isEmpty()){
        response.status(400).json({error : error.array()})
    }else{
        // Check if The User Exist Already
        let user = await User.findOne({mail : request.body.mail})
        if(user){response.status(400).json({'error' : {'type' : "User Already Exist"}})}
        else{
            //Using For Secure Salting And Hashing
            let salt = await bcrypt.genSalt(10);
            let secPassword = await bcrypt.hash(request.body.password,salt)
            //Creating User in Database
            User.create({
                name: request.body.name,
                mail : request.body.mail,
                password : secPassword
            })
            .then((user)=>{
                //Using JSON WEB TOKEN To send The Secure Data
                const dispatchData = {
                   "data" : {"user": user._id}
                }
                const fialSignature = jwt.sign(dispatchData,JSON_WT_)
                response.status(200).json({'error' : {
                    'type' : "Success",
                    'token' : fialSignature
                }})})
            .catch(e=>
                {response.status(400).json({"error" : {'type' : e} })})    
            }
        }
    })

//This is For The Login/Sign In Purpose
router.post('/login',[
    body('mail','Invalid Credentials').isEmail(),
    body('password','Invalid Credentials').isString().exists()
],async (request,response)=>{
    let error = validationResult(request);
    if(!error.isEmpty()){response.status(400).json({'error' : error.array()})}
    else{
        const {mail,password} = request.body;
        try{
            let user = await User.findOne({'mail' : mail});
            if(!user)
            {response.status(400).json({"error" : {"type" : "Invalid Credentials"}})}
            else{
                const comparePassword = await bcrypt.compare(password,user.password);
                if(!comparePassword)
                {response.status(400).json({"error" : {"type" : "Invalid Credentials"}})}
                else{
                    const data = {"data" : {'user' : user._id}}
                    const dispatch = jwt.sign(data,JSON_WT_);
                    response.status(200).json({"error" : {
                        "type" : "Success",
                        "token" : dispatch
                    }})
                }

            }
        }catch(e){
            response.status(400).json({'error' : {"type" : "Some Error Occured"}});
        }
    }
})

// This is For Getting The User ID Using Auth Token
router.post('/get-details',fetchUser,async (request,response)=>{
    try{
        const user_S = await User.findById(request.data.user).select('-password -date -_id -__v');
        response.status(200).json({"error" : {
            "type" : "Success",
            "details" : user_S
        }})
    }
    catch(e){response.status(400).json({"error" : {"type" : "Bad Request"}})}

})

module.exports = router;