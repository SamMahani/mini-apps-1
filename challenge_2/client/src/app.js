// I:
// O:
// C:
//  page cannot reload
// E:

//client


//TODO
  //create package json file
    //include nodemon to load server (test using postman)
    //


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


//db folder
  //methods.js
    //has a method to take in json and callback
      //create array to hold csv arrays in scope
      //[TODO] figure out how you want to store datta [[],[],[]] or obj?
      //or keys that will output for header
      //each key holds an array of strings corresponding to object data
      //[OPTIONAL]if an object is missing a string, input empty string to hold place and not mess up location
      //[INITIALLY] hardcode that child will input into object, and therefore not be part of output.
      //[ADVANCED] add unique id as inital key, increment as new input is inserted
      //------------------------------------------------
        //recursive function
        //[INITIALLY] hardcode the header [LATER] create header using first input
        //take values of current object (except for child), join and push text into array
          //continue with child
      //[ADVANCED]check if JSON has balanced paren
        //[ADVANCED]false->error handle with "incorrect input"
      //return array as data package to functino that will map over array and render strings into html

//------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
import React from 'react';

export default class app extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div></div>
    );
  }
}
componentDidMount() {

}




