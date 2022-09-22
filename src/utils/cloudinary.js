const cloudinary = require('../config/cloudinary');

exports.upload = async (path, publicId) => {
  const option = {
    use_filename: true, 
    overwrite: true, 
    unique_filename: false 

  };

  if (publicId) {
    option.publicId = publicId;
  };


  const res = await cloudinary.uploader.upload(path, option);
  return res.secure_url;
  // console.log(res); 
};

exports.getPublicId = (url) => {
  const splitSlash = url.split('/');
  return splitSlash[splitSlash.length -1].split('.')[0];
};