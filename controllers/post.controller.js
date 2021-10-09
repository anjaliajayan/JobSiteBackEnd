const Validator = require('fastest-validator');
const models = require('../models');

function save(req, res){
    const post = {
    application_num:req.body.application_num,           
    jobTitle:req.body.jobTitle,            
    current_company:req.body.current_company,       
    industry:req.body.industry,            
    country:req.body.country,            
    high_education:req.body.high_education,            
    university:req.body.university,            
    date_completed:req.body.date_completed,            
    nationality:req.body.nationality,            
    skills:req.body.skills,            
    userId:req.body.userId 
    }
  const validationResponse = true;
    if(validationResponse !== true){
        return res.status(400).json({
            message: "Validation failed",
            errors: validationResponse
        });
    }
    
    models.Post.create(post).then(result => {
        res.status(201).json({
            message: "Post created successfully",
            post: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    });
}

function saveJob(req, res){
    const saveJob = {
            title: req.body.title,
            description: req.body.description,
            company: req.body.company
        
    }
  const validationResponse = true;
    if(validationResponse !== true){
        return res.status(400).json({
            message: "Validation failed",
            errors: validationResponse
        });
    }
    
    models.Post.create(post).then(result => {
        res.status(201).json({
            message: "Post created successfully",
            post: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    });
}


 
module.exports = {
    save: save,
    saveJob:saveJob
}
