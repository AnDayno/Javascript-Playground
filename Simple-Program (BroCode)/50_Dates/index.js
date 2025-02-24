/*
    Date objects = Objects that contain values that represent dates and times
                   These date objects can be changed and formatted.
*/

// Date(year, month, day, hour, minute, second, ms)
const date = new Date();

console.log(date);

// Date using arguement
const date2 = new Date("2024-01-02T12:00:00Z")

console.log(date2);

// Get Individual Date
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek = date.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayOfWeek);

// Set Individual Date
const dateset = new Date();

dateset.setFullYear(2028);
dateset.setMonth(0);
dateset.setDate(1);
dateset.setHours(2);
dateset.setMinutes(3);
dateset.setSeconds(4);

console.log(dateset);

// Compare Date
const dateone = new Date("2023-12-31");
const datetwo = new Date("2024-01-01");

if(datetwo > dateone){
    console.log("HAPPY NEW YEAR!");
}
