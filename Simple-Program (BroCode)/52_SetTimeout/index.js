/*
    setTimeout() = function in JavaScript that allows you to schedule
                   the execution of a function after an amount of time (milliseconds)
                   Times are approximate (varies based on the workload of the JavaScript runtime env.)

                   setTimeout (callback, delay);
                   clearTimeout(timeoutID) = can cancel a timeout before it triggers
              
*/

/*
function sayHello(){
    window.alert("Hello");
}

setTimeout(sayHello, 3000);
*/

/* Anonymous Function
setTimeout(function(){window.alert("Hello")}, 3000);
*/

/* Arrow Function with clearTimeout
const setTimeoutID = setTimeout(() => window.alert("Hello"), 3000);

clearTimeout(setTimeoutID);
*/

//setTimeout and clearTimeout with button
let setTimeoutID;

function startTimer(){
    setTimeoutID = setTimeout (() => window.alert("Hello"), 3000);
}

function clearTimer(){
    clearTimeout(setTimeoutID);
}