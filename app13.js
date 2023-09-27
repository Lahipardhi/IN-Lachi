// 1 day = 24 x 60 x 60 = 86400 seconds
// 1 day = 24 x 60 x 60 x 1000 = 86400000 milliseconds
// 1 hour = 60 mins
// 1 min  = 60 seconds
// 1 second = 1000 milliseconds

// 1 jan 1970

var date = new Date();
console.log(date);

var dob = new Date(1994, 5, 30, 8, 35, 10); //year month date hour mins seconds
console.log(dob);

var demo = new Date(86400000); //milliseconds
console.log(demo);

var demo = new Date(2002, 8);
console.log(demo);

//GET METHOD

var date = new Date();
console.log("---get method---", date);

var monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

var weekArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

//date
var getYear = date.getFullYear();
console.log(getYear);

var getMonth = date.getMonth();
console.log(getMonth);
console.log(monthArray[getMonth]);

var getDay = date.getDay();
console.log(getDay);
console.log(weekArray[getDay]);

var getDate = date.getDate();
console.log(getDate);

console.log(`${getDate} ${getMonth} ${getYear}`);

//time
var getHours = date.getHours();
console.log(getHours);

var getMins = date.getMinutes();
console.log(getMins);

var getSecs = date.getSeconds();
console.log(getSecs);

var getMs = date.getMilliseconds();
console.log(getMs);

var getTime = date.getTime(); //time in ms from 1 jan 1970
console.log(getTime);

//----------------------------------------------------
//1
var yesterday = new Date(2023, 8, 4);
console.log(yesterday);

var yesterdayTimeInMs = yesterday.getTime();
console.log(yesterdayTimeInMs);

//2
var today = new Date();
console.log(today);

var todaysTimeInMs = today.getTime()
console.log(todaysTimeInMs);

var result = todaysTimeInMs - yesterdayTimeInMs
console.log(result);

//--------------------------------------------------------

//SET METHOD

var date = new Date()
console.log(date);

date.setFullYear(2016)
console.log(date);

date.setMonth(10)
console.log(date);

date.setDate(20)
console.log(date);

date.setHours(4)
console.log(date);

date.setMinutes(10)
console.log(date);

date.setSeconds(45)
console.log(date);

date.setMilliseconds(5000)
console.log(date);

date.setTime(86400000)
console.log(date);