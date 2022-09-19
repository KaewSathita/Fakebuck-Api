module.exports =(sequelize, DataTypes) => {
  const Like = require.define(
    'Like', 
    {
      
    }, 
    { underscored: true}
  );

  return Like;
};
