// Dependencies
// import fetch from 'node-fetch';

// Global variables
var busRoute = process.argv[2];
var busStopName = process.argv[3];
var direction = process.argv[4];

try {
    if (process.argv.length > 5 || !busRoute || !busStopName || !direction) {
      throw new Error('Please enter 3 required parameters: (1) Bus Route, (2) Bus Stop Name, and (3) Direction')
    } else {
      console.log(busRoute, busStopName, direction);
    }
  
    function requestError (error) {
      console.log(error.message)
    }
  } catch(error) {
    console.log(error.message)
  }