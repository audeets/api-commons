const mongoUrl = process.env.URL_MONGO;
const mongoose = require("mongoose");
mongoose.connect(mongoUrl);
require("./Users");
require("./Projects");
require("./Results");
module.exports = mongoose;
