/*
    EventListener = listen for specific events to create interactive web pages
                    events: click, mouseover, mouseout
                    .addEventListener(event, callback/anonymous function/arrow function);
*/

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton")
// function changeColor(event){
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "Ouch! 🤕";
// }

// myBox.addEventListener("click", event => {
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "Ouch! 🤕";
// });

// myBox.addEventListener("mouseover", event => {
//     event.target.style.backgroundColor = "purple";
//     event.target.textContent = "Hehe~ 😘";
// });

// myBox.addEventListener("mouseout", event => {
//     event.target.style.backgroundColor = "orange";
//     event.target.textContent = "Orange~ 🍊";
// });

myButton.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "Ouch! 🤕";
});

myButton.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "purple";
    myBox.textContent = "Hehe~ 😘";
});

myButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "orange";
    myBox.textContent = "Orange~ 🍊";
});