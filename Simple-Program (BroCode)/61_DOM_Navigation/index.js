/*
    DOM Navigation = The process of navigating through the structure 
                     of an HTML document using JavaScript.
                     
    .firstElementChild
    .lastElementChild
    .nextElementSibling
    .previousElementSibling
    .parentElement
    .children
*/

// ----------------- .firstElementChild -----------------

const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow";

/* to highlight all first child of all matching elements
const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
});
*/

// ----------------- .lastElementChild -----------------

const lastElement = document.getElementById("fruits");
const lastChild = lastElement.lastElementChild;
lastChild.style.backgroundColor = "lightblue";

/* to highlight all last child of all matching elements
const lastUlElements = document.querySelectorAll("ul");

lastUlElements.forEach(lastUlElement => {
    const lastChild = lastUlElement.lastElementChild;
    lastChild.style.backgroundColor = "lightblue";
});
*/

// ----------------- .nextElementsSibling -----------------

const nextElements = document.getElementById("apple");
const nextSibling = nextElements.nextElementSibling;
nextSibling.style.backgroundColor = "orange";

// ----------------- .previousElementsSibling -----------------
const prevElements = document.getElementById("onions");
const prevSibling = prevElements.previousElementSibling;
prevSibling.style.backgroundColor = "pink";

// ----------------- .parentElement -----------------
const parentElement = document.getElementById("pie");
const parent = parentElement.parentElement;
parent.style.backgroundColor = "lightgreen";

// ----------------- .children -----------------
const childElement = document.getElementById("vegetables");
const child = childElement.children;

Array.from(child).forEach(childrens =>{
    childrens.style.backgroundColor ="red";
});