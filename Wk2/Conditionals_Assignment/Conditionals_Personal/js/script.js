//Miranda Johnson
//05-22-2014
//Conditionals-Personal Assignment WPF


var cWeight = Number(prompt("What is your weight ?"));    //Input your current weight
console.log(cWeight);  //Print out current weight

var gWeight = Number(prompt("What is your goal weight ?"));   //Input your goal/ideal weight
console.log(gWeight); //Print out goal weight

//var ptLose = cWeight - gWeight;
//console.log(ptLose);

var dWorkedout = Number(prompt("How many days have you worked out ?")); //Input days you've exercised
console.log(dWorkedout); //Print out total days worked out

var lWeight = Number(prompt("How many pounds have you lost ?")); //Input total pounds you've lost
console.log(lWeight); //Print out total pounds lost

var perDay = lWeight / dWorkedout; //Total pounds you've lost per day.
console.log(perDay);  //Print out the total pounds you've lost per day.

var wlDays = gWeight / perDay; //Today days till weight loss goal.
console.log(wlDays);  //Print out total days until weight loss goal

