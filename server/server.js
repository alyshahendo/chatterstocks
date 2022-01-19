var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var db = require('../database/database.js');
var app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/comment', (req, res) => {
  var comment = {
    username: req.body.user,
    text: req.body.text,
    stock: req.body.stock,
  };

  return db.create(comment)
  .then((collection) => {
    console.log(collection);
    // db.find({ stock: })
    res.send();
  }).catch((err) => {
    console.log('this is the err: ', err);
  });
});

app.listen(3000, () => {
  console.log('Server is connected...');
});