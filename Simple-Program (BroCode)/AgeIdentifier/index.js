const myText = document.getElementById("myText");
const myButton = document.getElementById("myButton");
const resultAge = document.getElementById("resultAge");
let age;

myButton.onclick = function()
{
    age = myText.value;
    age = Number(age);
    if(age >= 18 & age <=99)
        {
           resultAge.textContent = "You're old";
        }
        else if (age == 0)
        {
            resultAge.textContent = "you in your mother stomach";
        }
        else if(age < 0)
        {
            resultAge.textContent = "you liar";
        }
        else if (age >= 100)
        {
            resultAge.textContent = "damn you old";
        }
        else
        {
            resultAge.textContent = "you're young";
        }
}
