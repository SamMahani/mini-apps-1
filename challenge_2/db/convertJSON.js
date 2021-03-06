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

const JSONtoCSV = (input, callback) => {
  var resObj = {};
  var resStr = "";
  var count = 0;

  const recurse = (input) => {
    count++;
    for (var key in input) {
      if(!resObj[key] && key !== "children") {
        resObj[key] = [input[key]];
      } else if(key !== "children") {
        resObj[key].push(input[key])
      } else if(key === "children") {
        input[key].forEach(child => recurse(child));
      }
    }
  }
  recurse(input);

  //create output string
  let header = Object.keys(resObj).join(", ");
  resStr += `${header}\n`;

  for(var i = 0; i < count; i++) {
    var tempArr = [];
    for (var key in resObj) {
      tempArr.push(resObj[key][i]);
    }
    resStr += `${tempArr.join(", ")}\n`;
  }
  callback(null, resStr);
}

module.exports = JSONtoCSV;
