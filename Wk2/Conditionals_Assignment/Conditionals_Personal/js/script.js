//Miranda Johnson
//05-22-2014
//Conditionals-Personal Assignment WPF


var cWeight = Number(prompt("What is your weight ?"));    //Input your current weight
var gWeight = Number(prompt("What is your goal weight ?"));   //Input your goal/ideal weight
var ptLose = cWeight - gWeight;
console.log(ptLose);
var dWorkedout = Number(prompt("How many days have you worked out ?")); //Input days you've exercised
var lWeight = Number(prompt("How many pounds have you lost ?")); //Input total pounds you've lost
console.log(cWeight);
console.log(gWeight);
console.log(dWorkedout);
console.log(lWeight);
var perDay = lWeight / dWorkedout; //Total pounds you've lost per day.
console.log(perDay);  //Print out the total pounds you've lost per day.

var wlDays = gWeight / perDay; //Today days till weight loss goal.
console.log(wlDays);

