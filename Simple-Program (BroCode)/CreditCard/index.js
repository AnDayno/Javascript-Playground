const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function()
{
    if(myCheckbox.checked)
        {
            subResult.innerHTML = `You are 
            <span style="color:blue"> subscribed! </span>`;
        }
        else
        {
            subResult.innerHTML = `You are 
            <span style="color:red"> NOT </span>
            subscribed!`;
        }

    if(visaBtn.checked)
        {
            paymentResult.innerHTML = `You have selected
            <span style="color:#0070b8"> Visa. </span>`;
        }
        else if(masterCardBtn.checked)
        {
            paymentResult.innerHTML = `You have selected
            <span style="color:#eb0822"> Mas</span><span style="color:#ff6409">ter c</span><span style="color:#f7a221">ard.</span>`;
        }
        else if(paypalBtn.checked)
        {
            paymentResult.innerHTML = `You have selected
            <span style="color:#2a4874">Paypal.</span>`;
        }
}

