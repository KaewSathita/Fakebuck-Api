module.exports =(sequelize, DataTypes) => {
  const Post = require.define(
    'Post', 
    {
      profileImage: DataTypes.STRING,
      coverImage: DataTypes.STRING
    }, 
    { underscored: true}
  );

  return Post;
};
