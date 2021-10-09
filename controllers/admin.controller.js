const models = require('../models');

function saveJob(req, res){
    const saveJob = {
            title: req.body.title,
            description: req.body.description,
            company: req.body.company_name
        
    }
  const validationResponse = true;
    if(validationResponse !== true){
        return res.status(400).json({
            message: "Validation failed",
            errors: validationResponse
        });
    }
    
    models.Createjob.create(saveJob).then(result => {
        res.status(201).json({
            message: "Post created successfully",
            Createjob: result,
            status:true
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    });
}

function getjobs(req, res){
    models.Createjob.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    });
}

 
module.exports = {
    saveJob:saveJob,
    getjobs:getjobs
}