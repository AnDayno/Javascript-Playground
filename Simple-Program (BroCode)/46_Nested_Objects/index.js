/*
    Nested Objects = Objects inside of other Ojects.
                     Allows you to represent more complex data structures
                     Child object is enclosed by a Parent Object
                     
                     Person{Address{}, ContactInfo{}}
                     ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}
*/

//------------------------------ EXAMPLE 1 ----------------------------------

const person = {
    fullName: "Umi Kitsu",
    age: 18,
    isWorking: true,
    hobbies: ["Ok", "Nice", "K"],
    address: {
        street: "ExampleStreet",
        city: "ExampleCity",
        country: "ExampleCountry"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isWorking);
console.log(person.hobbies[0]);

//------------------------------ EXAMPLE 2 ----------------------------------

for(const property in person.address){
    console.log(person.address[property]);
}

class Person{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("example1", 18, "ExampleStreet",
                                           "ExampleCity",
                                           "ExampleCountry");

console.log(person1.address.country);