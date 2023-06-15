const isPublicURL = async (req, res, next) => {
  req.isPublicURL = true;
  next();
};

module.exports = isPublicURL;