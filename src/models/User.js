module.exports =(sequelize, DataTypes) => {
  const User = require.define(
    'User', 
    {
      firstName: {
        tpye: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      LastName: {
        tpye: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      email: {
        type: DataTypes,STRING,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      mobile: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      profileImage: DataTypes.STRING,
      coverImage: DataTypes.STRING
    }, 
    { underscored: true}
  );

  return User;
};
