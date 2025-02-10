/*Getter and Setter

    Getter = special methof that makes a property readable
    Setter = special method that makes a property writeable

    Validate and modify a value when reading/writing a property

*/
class Person{

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName) {
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.log("First Name must be a non-empty string")
        }
    }

    set lastName(newLastName) {
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.log("Last name must be a non-empty string")
        }
    }

    set age(newAge) {
        if (typeof newAge === "number" & newAge >= 0){
            this._age = newAge;
        }
        else
        {
            console.log ("Age must not be a non-empty integer")
        }
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get age(){
        return this._age;
    }

    get fullName(){
        return this._firstName + " " + this._lastName;
    }
}

const person = new Person("umi", "ok", 23);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);