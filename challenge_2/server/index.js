//server folder
  //express
    //use->middleware to output requests for posts
      //user sending body data (needs to be post)
      //passed to a function living in db folder that takes data and callback
    //load static page using express -- include:
      //in public folder
        //index.html
          //load css file
          //load header
          //body has html form for text input
        //[OPTIONAL]main.css
          //[OPTIONAL]color body lightgrey (to know loaded)
          //[OPTIONAL]center textField class in center of page
          //[OPTIONAL] use terralax
    //load listener
const converter = require('../db/convertJSON');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.all('*', (req, res, next) => {
  console.log('method, path: ', req.method, req.path)
  next();
});

app.use('*', express.static(path.join(__dirname, '../client/public')));
app.use(bodyParser.json());

app.post('*', (req, res) => {
  var csv = converter(req.body);
  res.status(200).send(csv);
});



//TODO update this to callback to database, must handle incoming req data
// app.get('/JSON', (req, res) => 'WELCOME');
// app.post('/JSON', (req, res) => 'POSTING');

app.listen(3000, () => console.log('Listening to 3000'));

//export?
