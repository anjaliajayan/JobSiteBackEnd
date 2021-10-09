const models = require('../models');
function profile(req, res){
    const profile = {
    application_num:req.body.application_num,           
    jobTitle:req.body.jobTitle,            
    current_company:req.body.current_company,       
    industry:req.body.industry,            
    country:req.body.country,            
    high_education:req.body.highlevel,            
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
    
    models.Profile.create(profile).then(result => {
        res.status(201).json({
            message: "Profile created successfully",
            profile: result,
            status:true
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            error: error,
            status:false
        });
    });
}
 
module.exports = {
    profile:profile
}