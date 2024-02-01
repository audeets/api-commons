const isUserAuthenticated = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
};

const isAuthenticated = (req, res, next) => {
  const apiKey = req.get("API-Key");
  if (apiKey && apiKey === process.env.API_KEY) {
    next();
  } else {
    isUserAuthenticated(req, res, next);
  }
};

module.exports = {
  isUserAuthenticated,
  isAuthenticated,
};
