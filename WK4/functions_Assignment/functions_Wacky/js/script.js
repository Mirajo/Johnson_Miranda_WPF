//Miranda Johnson
//05-29-14
//Functions - Wacky WPF Assignment


//Silver dollars

var tSd = oSd(Number(prompt("How many people ? ")), Number(prompt("How many silver dollars ?")));
//Chances of getting a silver dollar
function oSd(tNp,tNs) {
	//Odds
    var odds = tNp / tNs;
    //return odds
    return odds; 
    }
console.log("You have a 1 in" + " "+ tSd + " " + "chance of getting a silver dollar"); //Print out the odds of getting a silver dollar

var message; //message for the odds of getting a silver dollar

var pch = 1/500; //min for poor chance of getting silver dollar

//set the odds
message = (1/tSd > pch) ? "You have great odds ! " : "The odds are not great.";
//Print out the message
console.log(message);

