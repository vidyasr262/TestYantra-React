var todaysDate = new Date();
console.log("todays date ", todaysDate)

var date = todaysDate.getDate()
var month = todaysDate.getMonth() + 1
var day = todaysDate.getDay() + 1
var year = todaysDate.getFullYear()
var displayDate = date + '/' + month + '/' + year;

console.log("display date " + displayDate)

var months = ['jan', 'feb', 'mar','apr','may','june','july','aug','sep','oct','nov','dec']

var m = todaysDate.getMonth()
var m1 = months[m]
console.log("Month " +m1)

var days = ['Sat','Mon', 'Tue','Wed','Thu','Fri','Sat'];
var d1 = todaysDate.getDay()
var d2 = days[d1]
console.log("Day " + d2 )

var dateM = new Date(88,88,88,888); //milliseconds
console.log("Date with milliseconds constructor ", dateM)

var dateS = new Date("October 21 2019")
console.log("Date with string constructor ", dateS)

var dateY = new Date(2019, 10, 19, 2,1,1)
console.log("Date with year constructor ", dateY)


