const tokenProvider = require('../common/tokenProvider');
const UserModel = require('../modules/auth/auth')

const getUser = async (req, res, next) => {
  const token = req.headers.authorization;

  try {
    if (!token) {
      next()
    }

    const identityData = tokenProvider.verify(token)

    if (!identityData) {
      next()
    }

    const existedUser = await UserModel
      .findById({ _id: identityData.userId })

    if (!existedUser) {
      next()
    }

    req.user = existedUser
    next()

  } catch (err) {
    next()

  }
}

module.exports = getUser;