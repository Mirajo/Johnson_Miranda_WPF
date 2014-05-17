//Miranda Johnson
//WPF - Expressions Industry
//May 15, 2014


//Hours of Web design and development


var day1Hours = prompt("Enter hours worked on Day 1"); //User enters hours worked on day one
var day2Hours = prompt("Enter hours worked on Day 2"); //User enters hours worked on day two
var day3Hours = prompt("Enter hours worked on Day 3"); //User enters hours worked on day three
var day4Hours = prompt("Enter hours worked on Day 4"); //User enters hours worked on day four
var day5Hours = prompt("Enter hours worked on Day 5"); //User enters hours worked on day five
var day6Hours = prompt("Enter hours worked on Day 6"); //User enters hours worked on day six
var day7Hours = prompt("Enter hours worked on Day 7"); //User enters hours worked on day seven

//Each day is multiplied by four and add for a total of hours per month
var monthHours = (day1Hours * 4) + (day2Hours * 4) + (day3Hours * 4) + (day4Hours * 4) + (day5Hours * 4) + (day6Hours * 4) + (day7Hours * 4);

//Print total hours worked for the entire month
console.log("You have worked" + " "+ monthHours + " "+ "hours this month.");

//Variable for the average hours worked per day
var avgHours = monthHours / 30;

//Print the average hours worked per day
console.log("Your average hours worked per day are"+ " "+ avgHours);

//Array for weeks worked
var workLun = ["week1", "week2", "week3", "week4"];

//Array values defined
[week1 = 71.26, week2 = 66.82, week3 = 75.53, week4 = 69.44];

//Array values added
var monLun = (week1 + week2 + week3 + week4);

//Print total amount spent on lunch during the month while working
console.log("You have spent a total of $" +" "+ monLun +" "+ "this month on lunch while at work.");

//Variable for average amount spent on lunch per day
var avgLun = monLun / 30;

//Print the average amount spent per day on lunch while at work.
console.log("Your average amount spent on lunch per day is $" +" "+ avgLun + ".");
