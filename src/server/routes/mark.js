const express = require('express');

const markController = require('../controllers/markController');

const router = express.Router();

router.get('/',
  markController.getAllMarks,
  (req, res) => res.status(200).json([])
);


module.exports = router;