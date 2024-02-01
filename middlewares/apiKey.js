module.exports.isApiKeyProvided = (req, res, next) => {
  const apiKey = req.get("API-Key");
  !apiKey || apiKey !== process.env.API_KEY ? next() : res.sendStatus(401);
};
