//Miranda Johnson
//05-29-14
//Functions - Personal WPF Assignment


//Party attendees

var pAten = prompt("How many attendees are entering ?"); //Enter number of attendees entering
console.log("There are" + " " + pAten + " " + "people entering now."); //Print number of people entering now

var ppAten = prompt("How many attendees are present ?"); //Enter number of attendees present

var pMax = 300; //Maximun capacity for event
var mPh = parseInt(pMax) / 60; //Calculate maximum attendees permitted per min
console.log("The maximum number of attendees permitted per min is" + " " + mPh);

function tpAten(pAten, ppAten){
 return parseInt(pAten) + parseInt(ppAten); //Function is the total of attendees present and entering
 }
 
 var aAten = tpAten(pAten, ppAten); //variable for all attendees
 
 console.log("There are" + " " + aAten + " " + "people here now"); //This is the current number attending now
 
