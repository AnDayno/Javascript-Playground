/*
    classList = Element property in JavaScript used to interact 
                with an element's list of classes (CSS classes)
                Allows you to make reusable classes for many elements 
                across your webpage.

    add()
    remove()
    toggle(Remove if present, Add if not)
    replace(oldClass, newClass)
    contains()
*/
// ----------------- EXAMPLE 1 -----------------

// const myH1 = document.getElementById("myH1");
// const myButton = document.getElementById("myButton");

// ----------------- ADD And Remove -----------------
// myButton.classList.add("enabled");
// myButton.classList.remove("enabled")

// myButton.addEventListener("mouseover", e => {
//     e.target.classList.add("hover");
// });

// myButton.addEventListener("mouseout", e => {
//     e.target.classList.remove("hover");
// }); 

// ----------------- Toggle -----------------

// myButton.addEventListener("mouseover", e => {
//     e.target.classList.toggle("hover");
// });

// myButton.addEventListener("mouseout", e => {
//     e.target.classList.toggle("hover");
// });

// ----------------- Replace -----------------

// myButton.classList.add("enabled");

// myButton.addEventListener("click", e => {
//     e.target.classList.replace("enabled", "disabled");
// });

// ----------------- Contains -----------------
// myH1.classList.add("enabled");

// myH1.addEventListener("click", e => {
//     if(e.target.classList.contains("disabled")){
//         e.target.textContent += "😒";
//     }
//     else{
//         e.target.classList.replace("enabled","disabled");
//     }
// });

// myButton.classList.add("enabled");

// myButton.addEventListener("click", e => {

//     if(e.target.classList.contains("disabled")){
//         e.target.textContent = "It is already Disabled";
//     }
//     else{
//         e.target.classList.replace("enabled", "disabled");
//     }
// });

// ----------------- EXAMPLE 2 -----------------

let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button => {
    button.classList.add("enabled");
});

buttons.forEach(button => {
    button.addEventListener("mouseover", e => {
        e.target.classList.toggle("hover");
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", e => {
        e.target.classList.toggle("hover");
    });
});

buttons.forEach(button => {
    button.addEventListener("click", e => {
        if(e.target.classList.contains("disabled")){
            e.target.textContent = "disabled";
        }
        else{
            e.target.classList.replace("enabled","disabled");
        }
    });
});