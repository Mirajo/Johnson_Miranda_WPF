//Miranda Johnson
//05-22-2014
//Conditionals-Wacky Assignment WPF


//stilts at the door

var height = prompt("Enter your height"); //user must enter their actual height
console.log("You are" + " " + height + " "+ "feet tall.");  //print out your actual height
var stilts = 4; //variable for the height of the stilts
console.log("The stilts are" + " "+ stilts + " " + "feet tall."); //print out the height of the stilts
var minHeight = parseInt(height) + parseInt(stilts); //this is the min height allowed to enter
console.log(minHeight + " " + "feet is your minimum height allowed to enter.");
var wStilts =  parseInt(minHeight); //variable for height with stilts on
console.log("You are" + " " + wStilts + " " + "feet tall with stilts on."); //print out the height with stilts on


if (wStilts >= minHeight) //compare height entered to min height required to enter
   console.log("You are tall enough to enter");  //print out you are tall enough to enter
   
   else if(wStilts < minHeight) {//Height is less than or equal to min height required
   console.log("You are not tall enough to enter."); //print you are not tall enough to enter
   alert("Enter your height with stilts on.") //Inform user he/she is not tall enough to enter
   height = prompt("Enter your height"); //User must re-enter his/her height
   
      }else{(wStilts == minHeight)
      console.log("You are still not tall enough to enter.");}