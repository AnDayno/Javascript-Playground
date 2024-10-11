const userInput = document.getElementById("userInput");
const toFarenheit = document.getElementById("toFarenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;

function convert(){
    const inputValue = parseFloat(userInput.value);

    if (isNaN(inputValue))
    {
        result.textContent = "Please enter a valid number";
        return;
    }

    if (toFarenheit.checked)
    {
        temp = (inputValue * 9/5) + 32;
        result.textContent = `${inputValue}°C converted to °F is = ${temp.toFixed(2)}°F`;
    }
    else if (toCelcius.checked)
    {
        temp = (inputValue - 32) * 5/9;
        result.textContent = `${inputValue}°F converted to °C is = ${temp.toFixed(2)}°C`;
    }
    else
    {
        result.textContent = "Please select a Unit";
    }
}

