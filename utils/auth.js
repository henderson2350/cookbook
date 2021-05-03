const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    console.log("WithAuth function success", req.session.logged_in);
  }
  next();
};

module.exports = withAuth;
