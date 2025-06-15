/*
    NodeList = Static collection of HTML elements by (id, class, element)
               Can be created by using querySelectorAll()
               Similar to an array, but no (map, filter, reduce)
               NodeList won't update to automatically reflect changes.
*/


let buttons = document.querySelectorAll(".myButtons");

/*
// ADD HTML/CSS PROPERTIES

buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += "😄";
});

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "#3387a3";
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "green";
    });
});
*/

// ADD AN ELEMENT

//STEP 1
const newButton = document.createElement("button");

//STEP 2
newButton.textContent = "Button 5";
newButton.classList = "myButtons";

//STEP 3
document.body.appendChild(newButton);

/*
buttons = document.querySelectorAll(".myButtons");

console.log(buttons);
*/

//My Version
function styleButton(button) {
    button.style.backgroundColor = "green";
    button.textContent += "😄";

    button.addEventListener("click", e => {
    e.target.remove();
    buttons = document.querySelectorAll(".myButtons");
    console.log("Updated buttons:", buttons);
    });

    button.addEventListener("mouseover", e => {
        e.target.style.backgroundColor = "#3387a3"});
    button.addEventListener("mouseout", e => {
        e.target.style.backgroundColor = "green"});
};

buttons.forEach(styleButton);
styleButton(newButton);

console.log(buttons)