//Miranda Johnson
//05-22-2014
//Conditionals-Personal Assignment WPF


// Workout days until weight loss goal

var cWeight = Number(prompt("What is your weight ?"));    //Input your current weight
console.log("Your current weight is" +" " + cWeight + "lbs.");  //Print out current weight

var gWeight = Number(prompt("What is your goal weight ?"));   //Input your goal/ideal weight
console.log("Your goal weight is" +" " + gWeight + "lbs."); //Print out goal weight

//var ptLose = cWeight - gWeight;
//console.log(ptLose);

var dWorkedout = Number(prompt("How many days have you worked out ?")); //Input days you've exercised
console.log("You have worked out" + " "+ dWorkedout + " " + "days."); //Print out total days worked out

var lWeight = Number(prompt("How many pounds have you lost ?")); //Input total pounds you've lost
console.log("You have lost" + " " + lWeight + "lbs."); //Print out total pounds lost

var perDay = lWeight / dWorkedout; //Total pounds you've lost per day.
console.log("Your weight loss rate is" + " " + perDay + "lbs. per day");  //Print out the total pounds you've lost per day.

var wlDays = gWeight / perDay; //Today days till weight loss goal.
console.log("You are" + " " + wlDays + " " + "workout days away from your goal.");  //Print out total days until weight loss goal

if(perDay == " "){
	//
	console.log("Your daily weight loss is on target. Good Job !");
}else{
	//
	console.log("Your daily weight loss is not on target !");
}
