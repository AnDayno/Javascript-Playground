/*
    JSON = (JavaScript Object Notation) data-interchange format 
           Used for excchanging data between a server and a web application
           JSON files {key:value} OR [value1, value2, value3]

           JSON.stringify() = converts a JS object to a JSON string.
           JSON.parse() = converts a JSON string to a JS object.
*/

// ----------- JSON.stringify() -----------
const names = ["Umi","Roberto","Yani","Bianca"];
const person = {
    "name":"Umi",
    "age": 19,
    "isEmployed": true,
    "hobbies": ["Dancing","Coding","Gaming"]
};
const people = [{
    "name":"Umi",
    "age": 19,
    "isEmployed": true
},
{
    "name":"Yani",
    "age":25,
    "isEmployed": false
},
{
    "name":"Roberto",
    "age":36,
    "isEmployed": true
},
{
    "name":"Bianca",
    "age":46,
    "isEmployed": true
}]

const jsonString = JSON.stringify(people);

console.log(jsonString);

// ----------- JSON.parse() -----------

const jsonNames = `["Umi","Roberto","Yani","Bianca"]`;
const jsonPerson = `{
    "name":"Umi",
    "age": 19,
    "isEmployed": true,
    "hobbies": ["Dancing","Coding","Gaming"]
}`;
const jsonPeople = `[{
    "name":"Umi",
    "age": 19,
    "isEmployed": true
},
{
    "name":"Yani",
    "age":25,
    "isEmployed": false
},
{
    "name":"Roberto",
    "age":36,
    "isEmployed": true
},
{
    "name":"Bianca",
    "age":46,
    "isEmployed": true
}]`;

const parsedData = JSON.parse(jsonPeople);

console.log(parsedData);