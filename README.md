# Target Case Study: API Consumption

A program which will tell you how long it is until the next bus on “BUS ROUTE” leaving from “BUS STOP NAME” going “DIRECTION” using the api defined at <http://svc.metrotransit.org/.>

## Prerequisites

* [Nodejs](https://nodejs.org/en/download/) is required.

## Getting Started

* git clone or fork this repo </br>
* cd into the repo </br>
* npm install       </br>

Once the dependencies are installed, you are ready to use the application.

## Utilizing the Application

You will need the following parameters:

* Bus Route
* Bus Stop Name
* Direction

To run the program, enter the following in the terminal:

```
node app.js "Bus Route" "Bus Stop Name" "Direction"
```

After running this commnd in the terminal, you will receive a response of `x minutes`, where x is the number of minutes until the bus arrives at that stop.

The last bus for the day has already left if there is no output.

## Future development

* If I had time, I probably would refactor and add in [Inquirer.js](https://github.com/SBoudrias/Inquirer.js/) to have a more interactive command line interface for users. I should also use [Mocha](https://mochajs.org/) and write some unit testing for the application.

* I would also refactor the app.js and break down the functions into seperate handlers and functions for code readability and simplicity.
