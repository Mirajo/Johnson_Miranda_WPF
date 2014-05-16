//Miranda Johnson
//WPF - Expressions Personal
//May 15, 2014


//This is a calculator for DVD purchases

alert ("How much have you spent on DVDs ?");
//Dvd title 1 purchased
var dvd1 = prompt("Enter Title 1");


//Dvd title 2 purchased
var dvd2 = prompt("Enter Title 2");


//Dvd title 3 purchased
var dvd3 = prompt("Enter Title 3");


//Dvd title 4 purchased
var dvd4 = prompt("Enter Title 4");

//Dvd title total 1
var dvd1Ttl = prompt("Enter Dvd total 1");

//Dvd title total 2
var dvd2Ttl = prompt("Enter Dvd total 2");

//Dvd title total 3
var dvd3Ttl = prompt("Enter Dvd total 3");

//Dvd title total 4
var dvd4Ttl = prompt("Enter Dvd total 4");

//Total of all Dvd's

var dvdAll = Math.floor(dvd1Ttl +" "+ dvd2Ttl +" "+ dvd3Ttl +" "+ dvd4Ttl); 

alert("$" + dvdAll);

dvdAvg = dvdAll / 4;

console.log("You have spent a total of $" +" "+ dvdAll +" "+ "on four dvds. That's an Average of" +" "+ dvdAvg +" "+ "per DVD."); 
