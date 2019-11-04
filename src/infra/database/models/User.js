'use strict';

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('user', {
    face_id: DataTypes.STRING
  }, {
    classMethods: {
      associate() {
        // associations can be defined here
      }
    }
  });

  return User;
};
