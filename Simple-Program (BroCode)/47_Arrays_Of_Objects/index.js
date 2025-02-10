/*
        Array of Objects = Represent storing multiple objects in a single name.
                           The data can be accessed randomly using the index number.
*/

const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37}];

//ADD/PUSH ARRAY                
//fruits.push({name: "grapes", color: "purple", calories: 62});

//REMOVE ARRAY
//fruits.pop();

//REMOVE ARRAY FROM 1ST ARGUEMENT TO 2ND ARGUEMENT
//fruits.splice(1, 2);

//FOREACH()
//fruits.forEach(fruit => console.log(fruit.name));

//MAP()
//const fruitNames = fruits.map(fruits => fruits.name);
//const fruitColors = fruits.map(fruits => fruits.color);
//const fruitCalories = fruits.map(fruits => fruits.calories);
//console.log(fruitNames);
//console.log(fruitColors);
//console.log(fruitCalories);

//Filter()
//const yellowFruits = fruits.filter(fruits => fruits.color === "yellow");
//const lowCaloriesFruits = fruits.filter(fruits => fruits.calories <= 100);
//const highCaloriesFruits = fruits.filter(fruits => fruits.calories >= 100);
//console.log(yellowFruits);
//console.log(lowCaloriesFruits);
//console.log(highCaloriesFruits);

//reduce()
const maxFruit = fruits.reduce((max, fruits) =>
                                fruits.calories > max.calories ?
                                fruits : max);
console.log(maxFruit);

const minFruit = fruits.reduce((min, fruits) =>
                               fruits.calories < min.calories ?
                               fruits : min);
console.log(minFruit);
                                
console.log(fruits);