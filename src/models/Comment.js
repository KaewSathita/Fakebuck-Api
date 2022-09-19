module.exports =(sequelize, DataTypes) => {
  const Comment = require.define(
    'Comment', 
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    }, 
    { underscored: true}
  );

  return Comment;
};
