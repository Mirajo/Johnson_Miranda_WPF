//Miranda Johnson
//WPF - Expressions Industry
//May 15, 2014


//Hours of Web design and development


var day1Hours = prompt("Enter hours worked on Day 1");
var day2Hours = prompt("Enter hours worked on Day 2");
var day3Hours = prompt("Enter hours worked on Day 3");
var day4Hours = prompt("Enter hours worked on Day 4");
var day5Hours = prompt("Enter hours worked on Day 5");
var day6Hours = prompt("Enter hours worked on Day 6");
var day7Hours = prompt("Enter hours worked on Day 7");

var monthHours = (day1Hours * 4) + (day2Hours * 4) + (day3Hours * 4) + (day4Hours * 4) + (day5Hours * 4) + (day6Hours * 4) + (day7Hours * 4);

console.log("You have worked" + " "+ monthHours + " "+ "hours this month.");

var avgHours = monthHours / 30;

console.log("Your average hours worked per day are"+ " "+ avgHours);

workLun = ["week1", "week2", "week3", "week4", "week5"];


