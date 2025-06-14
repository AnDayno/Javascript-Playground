/*
    Element Selectors = Methods used to target and manipulate HTML elements
                        They allow you to select one or multiple HTML elements
                        from the DOM (Document Object Model)

    1. document.getElementById()       // ELEMENT OR NULL
    2. document.getElementsClassName() // HTML COLLECTION
    3. document.getElementsByTagName() // HTML COLLECTION
    4. document.querySelector()        // ELEMENT OR NULL
    5. document.querySelectorAll()     // NODELIST
*/

// document.getElementById() - returns an element if it finds it or return null if it doesn't
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading);

// document.getElemetsClassName()
const fruits = document.getElementsByClassName("fruits");

console.log(fruits);

/*
fruits[0].style.backgroundColor = "red";

for(let fruit of fruits){
    fruit.style.backgroundColor = "red"; 
}
*/
Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "red";
})

// document.getElementsByTagName()

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

console.log(h4Elements);

// h4Elements[0].style.backgroundColor ="lightblue";

// for(let h4Element of h4Elements){
//     h4Element.style.backgroundColor = "lightblue";
// }

// for(let liElement of liElements){
//     liElement.style.backgroundColor = "lightgreen";
// }

Array.from(h4Elements).forEach(h4Element =>{
    h4Element.style.backgroundColor = "lightblue";
})

Array.from(liElements).forEach(liElement =>{
    liElement.style.backgroundColor = "lightgreen";
})

// document.quarySelector() - will return the first matching elements or null if it doesn't find
//                            any matching elements.

const element = document.querySelector(".fruits");

element.style.backgroundColor = "darkred";

// document.quarySelectorAll() - Have built in methods similar to arrays. Nodelist are statics

const allElements = document.querySelectorAll("li");

allElements[5].style.backgroundColor = "pink";

console.log(allElements)

allElements.forEach(allElement => {
    allElement.style.backgroundColor = "purple";
})