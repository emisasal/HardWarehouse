module.exports.isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.sendStatus(401)
  }
}
