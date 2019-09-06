# Target Case Study: API Consumption

A program which will tell you how long it is until the next bus on “BUS ROUTE” leaving from “BUS STOP NAME” going “DIRECTION” using the api defined at <http://svc.metrotransit.org/.>

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)
- [Reflection](#reflection)

## Prerequisites

* [Nodejs](https://nodejs.org/en/download/) is required.

## Installation

* git clone or fork this repo </br>
* cd into the repo </br>
* npm install       </br>

Once the dependencies are installed, you are ready to use the application.

## Usage

To run the application, enter the following in the terminal:

```
node app.js
```

After running this command in the terminal, you will receive a series of prompts requiring you to enter in the following parameters:

* Bus Route
* Bus Stop Name
* Direction

you will receive a response response of `x minutes`, where x is the number of minutes until the bus arrives at that stop.
The last bus for the day has already left if there is no output.

## Example

Use the following example as answers for the prompt:
```
Bus Routes: “METRO Blue Line” 
Bus Stop Name: “Target Field Station Platform 1” 
Direction: “south”
```
Which will return and console log the following result:
```
8 Minutes
```

## Reflection

* If I had time I would use [Mocha](https://mochajs.org/) and write some unit testing for the application so this can be used in a production environment.

* I would also refactor the app.js and break down the functions into seperate handlers and functions for code readability and simplicity.
