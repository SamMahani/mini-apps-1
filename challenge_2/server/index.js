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

const path = require('path');
const express = require('express');
const app = express();

app.all('*', (req, res, next) => {
  console.log('method, path: ', req.method, req.path)
  next();
});

app.use(express.static(path.join(__dirname, '../client/public')));

//TODO update this to callback to database, must handle incoming req data
app.get('/JSON', (req, res) => 'LOADING FROM SERVER');

app.listen(3000, () => console.log('Listening to 3000'));

