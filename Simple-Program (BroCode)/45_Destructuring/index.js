/*
    Destructuring = extract values from arrays and objects then assign them to vaiables in a convenient way
                    [] = to perform array destructuring
                    {} = to perform object destructuring
                    5 examples
*/

// --------------------- EXAMPLE 1 ----------------------
// SWAP THE VALUE OF TWO VARIABLES 

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

// --------------------- EXAMPLE 2 ----------------------
// SWAP 2 ELEMENTS IN AN ARRAY 

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

// --------------------- EXAMPLE 3 ----------------------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const colors2 = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

// --------------------- EXAMPLE 4 ----------------------
// EXTRACT VALUES FROM OBJECTS

const person1 = {
    firstName: "Umi",
    lastName: "Kitsune",
    age: "18",
    job: "Programmer",
}

const person2 = {
    firstName: "bob",
    lastName: "bob",
    age: "bob",
}

const {firstName, lastName, age, job = "Unemployed"} = person1;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// --------------------- EXAMPLE 5 ----------------------
// DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({newFirstName, newLastName, newAge, newJob = "Unemployed"}) {
    console.log (`Name: ${newFirstName} ${newLastName}`);
    console.log (`Age: ${newAge}`);
    console.log (`Job: ${newJob}`);
}

const newPerson1 = {
    newFirstName: "Umi",
    newLastName: "Kitsune",
    newAge: "18",
    newJob: "Programmer",
}

const newPerson2 = {
    newFirstName: "bob",
    newLastName:  "bob",
    newAge: "bob",
}

displayPerson(newPerson2);