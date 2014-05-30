//Miranda Johnson
//05-29-14
//Functions - Personal WPF Assignment


//Party attendees

var pAten = prompt(Number("How many attendees are entering ?")); //Enter number of attendees entering
var ppAten = prompt(Number("How many attendees are present ?")); //Enter number of attendees present

var pMax = 300; //Maximun capacity for event
var mPh = parseInt(pMax) / 60; //Calculate maximum attendees permitted per min
console.log("The maximum number of attendees permitted per min is" + " " + mPh);

function tpAten(pAten, ppAten){
 return parseInt(pAten) + parseInt(ppAten); //Return total number of party attendees
 }
