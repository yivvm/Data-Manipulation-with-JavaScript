/*

Part 2: Practical Math

Let’s look at a more practical scenario.

You are planning a cross-country road trip!

The distance of the trip, in total, is 1,500 miles.

Your car’s fuel efficiency is as follows:
At 55 miles per hour, you get 30 miles per gallon.
At 60 miles per hour, you get 28 miles per gallon.
At 75 miles per hour, you get 23 miles per gallon.
You have a fuel budget of $175.
The average cost of fuel is $3 per gallon.

Set up a program to answer the following questions:
How many gallons of fuel will you need for the entire trip?
Will your budget be enough to cover the fuel expense?
How long will the trip take, in hours?
Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
Log the results of your calculations using string concatenation or template literals.

*/

// The distance of the trip, in total, is 1,500 miles.
const totalDistance = 1500;
 
// At 55 miles per hour, you get 30 miles per gallon.
const speed55 = 30;
// At 60 miles per hour, you get 28 miles per gallon.
const speed60 = 28;
// At 75 miles per hour, you get 23 miles per gallon.
const speed75 = 23;

// Question 1: How many gallons of fuel will you need for the entire trip?
// At 55 miles per hour, you get 30 miles per gallon.
const gallon55 = totalDistance / speed55;
// At 60 miles per hour, you get 28 miles per gallon.
const gallon60 = totalDistance / speed60;
// At 75 miles per hour, you get 23 miles per gallon.
const gallon75 = totalDistance / speed75;
console.log(`${gallon55} of fuel is needed for the entire trip at the speed of 55 miles per hour.`);
console.log(`${gallon60} of fuel is needed for the entire trip at the speed of 60 miles per hour.`);
console.log(`${gallon75} of fuel is needed for the entire trip at the speed of 75 miles per hour.`);


// Question 2: Will your budget be enough to cover the fuel expense?
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.
const budget = 175;
const avgCost = 3;
const maxGallon = budget / avgCost;
const isBudget = (maxGallon >= gallon55) || (maxGallon >= gallon60) || (maxGallon >= gallon75);
console.log(`The budget is enough: ${isBudget}.`);


// Question 3: How long will the trip take, in hours?
const hours55 = totalDistance / 55;
const hours60 = totalDistance / 60;
const hours75 = totalDistance / 75;
console.log(`It will take ${hours55} hours for the entire trip at the speed of 55 miles per hour.`);
console.log(`It will take ${hours60} hours for the entire trip at the speed of 60 miles per hour.`);
console.log(`It will take ${hours75} hours for the entire trip at the speed of 75 miles per hour.`);