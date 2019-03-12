const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

exports.index = (req, res) => {
  res.render('index');
}

exports.about = (req, res) => {
  res.render('about');
}

exports.notFound = (req, res) => {
  res.render('notFound');
}