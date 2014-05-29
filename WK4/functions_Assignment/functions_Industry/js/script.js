//Miranda Johnson
//05-29-14
//Functions - Industry WPF Assignment


//Office/Work Budget/Debt

var cAmt = prompt("How much do you currently have for expenses ?");//Enter the amount you currently have for expenses
console.log("You currently have" +" "+ cAmt +" "+ "for expenses."); //Print the amount you have for expenses

var cmAmt = parseInt(cAmt) / 12; 
console.log("You have" +" "+ cmAmt +" "+ "per month for expenses."); //Print the amount you have per month for expenses

var hAmt = prompt("What is the amount you spend on monthly hosting ?"); //Enter the amount you spend on hosting monthly
console.log("You've spent" +" "+ hAmt +" "+ "for hosting expenses this month."); //Print the amount you have spent for monthly hosting

var aAmt = prompt("What is the amount you spend on monthly advertising ?"); //Enter the amount you spend on advertising monthly
console.log("You've spent" +" "+ aAmt +" "+ "for advertising expenses this month."); //Print the amount you have spent for monthly advertising

var oAmt = prompt("What is the amount you spend for office space?"); //Enter the amount you spend for office space rental
console.log("You've spent" +" "+ oAmt +" "+ "for office space rental this month."); //Print the amount you have spent for monthly office space rental

var lAmt = prompt("What is the amount you spend on software licenses ?"); //Enter the amount you spend for software licenses
console.log("You've spent" +" "+ lAmt +" "+ "software licenses this month."); //Print the amount you have spent for monthly software licenses

var ssAmt = prompt("What is the amount you spend to pay staff ?"); //Enter the amount you spend to pay staff salary
console.log("You've spent" +" "+ ssAmt +" "+ "for staff salary this month."); //Print the amount you have spent for monthly office space rental

var osAmt = prompt("What is the amount you spend to pay your own salary ?"); //Enter the amount you spend to pay yourself
console.log("You've spent" +" "+ osAmt +" "+ "for your own salary this month."); //Print the amount you have spent this month for your salary

var iAmt = prompt("What is the amount you have received from investors ?"); //Enter the amount received from investors
console.log("You've received" +" "+ iAmt +" "+ "from investors this month."); //Print the amount you have received from investors

var imAmt = parseInt(iAmt) / 12; 
console.log("Investors have given you" +" "+ imAmt +" "+ "per month to help pay for expenses."); //Print the amount received from investors you have per month for expenses

var bAmt = prompt("What is the amount you have borrowed to stay in business ?"); //Enter the amount you've borrowed
console.log("You've borrowed" +" "+ bAmt +" "+ "to stay in business."); //Print the amount you have borrowed to stay in business

var bmAmt = parseInt(bAmt) / 12; 
console.log("You have borrowed" +" "+ bmAmt +" "+ "per month to help pay for expenses."); //Print the amount borrowed you have per month for expenses

var ctExp = function (hAmt,aAmt,oAmt,lAmt,ssAmt,osAmt,iAmt)
		{return parseInt(hAmt) + parseInt(aAmt) + parseInt(oAmt) + parseInt(lAmt) + parseInt(ssAmt) + parseInt(osAmt) + parseInt(iAmt)}; //The function adding all the expenses with a return.
 
var tExp = ctExp(hAmt,aAmt,oAmt,lAmt,ssAmt,osAmt,iAmt);  //A variable to show the amount calculated by the function    

console.log("Your total expenses for the month are" + "$" +" "+ tExp +" "+ ".00."); //Print the total expenses


