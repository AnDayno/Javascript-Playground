const result = document.getElementById("result");

function GeneratePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols)
{
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVQXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+,./";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0)
    {
        return `(password length must be at least 1)`;
    }
    if(allowedChars.length === 0)
    {
        return `(At least 1 set of character needs to be selected)`;
    }

    for(let i = 0; i < length; i ++)
    {
        const randomIndex = Math.floor(Math.random() * allowedChars.length) + 1;
        password += allowedChars[randomIndex];
        result.value = password;
    }
    
    return password;
}

const passwordLenght = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = GeneratePassword 
(
    passwordLenght, 
    includeLowercase, 
    includeUppercase, 
    includeNumbers, 
    includeSymbols
);

console.log(`Generated password: ${password}`);