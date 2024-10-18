function rollDice()
{
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = []; 

    if (isNaN(numOfDice) || numOfDice < 1 || numOfDice > 100)
    {
        diceResult.textContent = "Please enter number between 1-100";
        diceImages.innerHTML = "";
        return;
    }
    else
    {
        for (let i = 0; i < numOfDice; i++)
            {
                const value = Math.floor(Math.random() * 6) + 1;
                values.push(value);
                images.push(`<img src="DiceImages/${value}.png">`)
            }
        
            diceResult.textContent = `dice: ${values.join(', ')}`;
            diceImages.innerHTML = images.join('');
    }
}