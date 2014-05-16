//Miranda Johnson
//WPF - Expressions Personal
//May 15, 2014


//This is a calculator for DVD purchases

alert ("How much have you spent on DVDs ?");
//Dvd title 1 purchased
var dvd1 = prompt("Enter Title of DVD 1");


//Dvd title 2 purchased
var dvd2 = prompt("Enter Title of DVD 2");


//Dvd title 3 purchased
var dvd3 = prompt("Enter Title of DVD 3");


//Dvd title 4 purchased
var dvd4 = prompt("Enter Title of DVD  4");

//Dvd title total 1
var dvd1Ttl = prompt("Enter Dvd total 1");

//Dvd title total 2
var dvd2Ttl = prompt("Enter Dvd total 2");

//Dvd title total 3
var dvd3Ttl = prompt("Enter Dvd total 3");

//Dvd title total 4
var dvd4Ttl = prompt("Enter Dvd total 4");


//Cost per year per dvd

//Cost per year if you purchase once a month
var dvd1Ttlyr = dvd1Ttl * 12;

//Cost per year if you purchase once a month
var dvd2Ttlyr = dvd2Ttl * 12;

//Cost per year if you purchase once a month
var dvd3Ttlyr = dvd3Ttl * 12;

//Cost per year if you purchase once a month
var dvd4Ttlyr = dvd4Ttl * 12;

console.log("You could spend $" + dvd1Ttlyr +" "+ "a year on DvD's if you spend" + " " + dvd1Ttl + "each month.");

console.log("You could spend $" + dvd2Ttlyr +" "+ "a year on DvD's if you spend" + " " + dvd2Ttl + "each month.");

console.log("You could spend $" + dvd3Ttlyr +" "+ "a year on DvD's if you spend" + " " + dvd3Ttl + "each month.");
 
console.log("You could spend $" + dvd4Ttlyr +" "+ "a year on DvD's if you spend" + " " + dvd4Ttl + "each month.");
 


//Total of all Dvd's

var dvdAll = dvd1Ttlyr +" "+ dvd2Ttlyr +" "+ dvd3Ttlyr +" "+ dvd4Ttlyr; 
 
console.log("$" + dvdAll);

console.log("You spent a total of $" +" "+ dvdAll +" "+ "on four dvds."); 
