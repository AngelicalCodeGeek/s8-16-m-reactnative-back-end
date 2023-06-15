const User = require('../models/user.model');
const catchError = require('../utils/catchError');

const verifyRol = catchError(async (req, res, next) => {
  try {
    const user = req.user;
    const { isTheSameUser, id } = req.user;
    const isPublicURL = req.isPublicURL;
    const result = await User.findByPk(id);
    if (!result) return res.status(404);
    const type = result.profileType;
    if (isPublicURL) {
      req.isAdministrator = type === 0;
      return next();
    }
    if (!isPublicURL) {
      if (type === 0 || isTheSameUser) {
        return next();
      }
      return res.status(403).json({ message: 'Unauthorized' });
    }
    if (type === 0) return next();
    res.status(403).json({ message: 'Unauthorized', details: 'is not admin' });
  } catch (error) {
    next(error);
  }
});
// verifyIsTheSameUser
module.exports = {
  verifyRol,
};
