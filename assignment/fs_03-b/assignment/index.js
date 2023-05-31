//Create a variable called "num" and assign it a value of your choice.

var num = 25;

//Use the Math.sqrt() method to calculate the square root of "num". Use console.log() to display the result.

console.log(Math.sqrt(num));
// question-3
//Use the Math.random() method to generate a random number between 0 and 1. Multiply the result by 10 and round it to the nearest whole number using the Math.round() method. Use console.log() to display the result.

let x = Math.random() * 10;

console.log(Math.round(x));

//Use the Date() constructor to create a new date object called "today". Use console.log() to display the current date and time.

let today = new Date();
console.log(today);

//Use getter functions to extract the following information from the "today" object and display it in the console: Year Month (in numeric format) Day of the month Day of the week (in numeric format)





const year = today.getFullYear();
const month = today.getMonth();
const day = today.getDay();

console.log("year=", year);
console.log("month=", month);
console.log("Day=", day);

//Use setter functions to set the following values in the "today" object:

//Year to 2022
// to December
//Day of the month to 31


const copy = today;

copy.setFullYear(2022);
console.log("new year =",copy)
copy.setMonth(11);
console.log("new month =",copy)

copy.setDate(31);
console.log("new day =",copy)



//Use getter functions to extract the updated values from the "today" object and display them in the console.

console.log("New Date =",copy );



//Use the Date() constructor to create a new date object called "birthday". Set the year, month, and day of the month to your own birthday.

var myBirthday = new Date();

myBirthday.setFullYear(1998,2,10);

console.log("My Birthday Date is",myBirthday );

//Use the getTime() method to extract the number of milliseconds between the "birthday" object and the "today" object. Use console.log() to display the result.

var todayTime = today.getTime();
var birthdayTime =myBirthday.getTime();


var nmilliseconds =1000;
var nMinutes =1000*60;
var nHours =nMinutes*60;
var nDay =nHours*24;
var nYear =nDay*365;

var diff = todayTime-myBirthday;

var realDiff = Math.round(diff/nmilliseconds);

console.log("diff. in milliseconds =",realDiff);




//Use the getTime() method to extract the number of days between the "birthday" object and the "today" object. Use console.log() to display the result



var realDiff = Math.round(diff/nDay);

console.log("diff. in Days =",realDiff);

