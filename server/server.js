var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var db = require('../database/database.js');
var app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/comment', (req, res) => {
  var stock = req.query
  return db.find(stock).sort({ created_at: 'desc' })
  .then((comments) => {
    res.send(comments);
  }).catch((err) =>{
    console.log('this is the err: ', err);
  });
});

app.post('/comment', (req, res) => {
  var comment = {
    username: req.body.username,
    text: req.body.text,
    stock: req.body.stock,
  };

  console.log(comment);

  return db.create(comment)
  .then((comments) => {
    // db.find({ stock: })
    res.send(comments);
  }).catch((err) => {
    console.log('this is the err: ', err);
  });
});

app.listen(3000, () => {
  console.log('Server is connected...');
});