// ----------------- EXAMPLE 1 <h1> -----------------

// STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "I Like Pizza!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// STEP 3 APPEND ELEMENT TO DOM

// Append = put it as a last child
// document.body.append(newH1);

// prepend = put it as a first child
// document.body.prepend(newH1);

document.getElementById("box1").append(newH1);
//document.getElementById("box1").prepend(newH1);

//Insert before box2
// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);

//If there's no ID
// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[1]);

// REMOVE HTML ELEMENT

// If the newH1 is the child of the body
// document.body.removeChild(newH1);

//if the newH1 is inside the box 
document.getElementById("box1").removeChild(newH1);

// ----------------- EXAMPLE 2 <li> -----------------

// STEP 1 CREATE THE ELEMENT
const newListItem = document.createElement("li");
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";
// STEP 2 ADD ATTRIBUTES/PROPERTIES
newListItem.textContent ="coconut";

// STEP 3 APPEND ELEMENT TO DOM
//document.body.append(newListItem);

document.getElementById("fruits").append(newListItem);

// Using insertbefore with ID
//  const banana = document.getElementById("banana");
//  document.getElementById("fruits").insertBefore(newListItem,banana)

 // Using insertBefore without ID
//  const listItems = document.querySelectorAll("#fruits li");
//  document.getElementById("fruits").insertBefore(newListItem, listItems[2]);


// REMOVE HTML ELEMENT

document.getElementById("fruits").removeChild(newListItem);