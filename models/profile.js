
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {          
    application_num : DataTypes.INTEGER,           
    jobTitle        : DataTypes.STRING,            
    current_company : DataTypes.STRING,       
    industry        : DataTypes.STRING,            
    country         : DataTypes.STRING,            
    high_education  : DataTypes.STRING,            
    university      : DataTypes.STRING,            
    date_completed  : DataTypes.STRING,            
    nationality     : DataTypes.STRING,            
    skills          : DataTypes.STRING,            
    userId          : DataTypes.INTEGER  

  }, {});
  Profile.associate = function(models) {
    // associations can be defined here
  };
  return Profile;
};