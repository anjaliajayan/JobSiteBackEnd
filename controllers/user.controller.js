const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

function signUp(req, res){
    
    //Sign up
    models.User.findOne({where:{email:req.body.email}}).then(result => {
        if(result){
            res.status(409).json({
                message: "Email already exists!",
            });
        }else{
            bcryptjs.genSalt(10, function(err, salt){
                bcryptjs.hash(req.body.password, salt, function(err, hash){
                    const user = {
                        name: req.body.name,
                        email:req.body.email,
                        password: hash,
                        role:req.body.role,
                        gender:req.body.gender,
                        contact:req.body.contact,
                        username:req.body.username

                    }
                
                    models.User.create(user).then(result => {
                        res.status(201).json({
                            msg: "User created successfully",
                            status:true,
                            code:200,
                            success:true
                        });
                    }).catch(error => {
                        res.status(500).json({
                            message: "Something went wrong!",
                        });
                    });
                });
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
        });
    });
}


function login(req, res){
    models.User.findOne({where:{email: req.body.email}}).then(user => {
        // console.log("user_____________",user);
        if(user === null){
            res.status(401).json({
                message: "Invalid credentials!",
            });
        }else{
            bcryptjs.compare(req.body.password, user.password, function(err, result){
                if(result){
                    const token = jwt.sign({
                        email: user.email,
                        userId: user.id,
                        name:user.name
                    }, process.env.JWT_KEY, function(err, token){
                        res.status(200).json({
                            msg: "Authentication successful!",
                            status:true,
                            code:200,
                            success:true,
                            token: token,
                            role:user.role,
                            id:user.id

                        });
                    });
                }else{
                    res.status(401).json({
                        message: "Invalid credentials!",
                    });
                }
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
        });
    });
}


function getAllRegisterUsers(req, res){
    models.User.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    });
}


module.exports = {
    signUp: signUp,
    login: login,
    getAllRegisterUsers:getAllRegisterUsers
} 