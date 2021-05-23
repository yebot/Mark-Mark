const db = require('../models/markModel');

const markController = {};

markController.getAllMarks = (req, res, next) => {
  // write code here

  next();
};

module.exports = markController;