'use strict';
module.exports = (sequelize, DataTypes) => {
  const Createjob = sequelize.define('Createjob', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    company: DataTypes.STRING
  }, {});
  Createjob.associate = function(models) {
    // associations can be defined here
  };
  return Createjob;
};
