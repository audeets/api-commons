"use strict";

/**
 * Module dependencies
 */

var mongoose = require("mongoose");

// end module dependencies

var ProjectSchema = new mongoose.Schema(
  {
    url: String,
    title: String,
    description: String,
    user: mongoose.Types.ObjectId,
  },
  { timestamps: true }
);

mongoose.model("Project", ProjectSchema);
