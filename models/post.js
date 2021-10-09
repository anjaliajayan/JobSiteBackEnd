'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
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
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};
