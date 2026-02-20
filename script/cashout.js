console.log("check if it's added");

document.getElementById("cashout-btn").addEventListener("click", function () {
    // 1- get the agent number & validate 

    const cashOutNumberInput = document.getElementById("cashout-number");
    const cashOutNumber = cashOutNumberInput.value;
    console.log(cashOutNumber);
    if (cashOutNumber.length != 11) {
        alert("Invalid Agent Number!");
        return;
    }

    //2- get the amount, validate, convert to Number
    const cashOutAmount = document.getElementById("cashout-amount").value;
    console.log(cashOutAmount);

    //3- get the Current Balance validate convert to Number
    const balanceElement = document.getElementById("balance");
    //input type theke catch korte gele .value use korte hoy. r normal span h2 esob theke nite hole innerText nite hoy
    const balance = balanceElement.innerText;
    console.log(balance);
    //4- Calculate new Balance
    const newBalance = Number(balance) - Number(cashOutAmount); //convert string to number

    if (newBalance < 0) {
        alert("Invalid Amount! Dure jaiya mor beta");
        return;
    }
    console.log("New balance is: ", newBalance);
    //5- Get the pin and verify
    const cashOutPin = document.getElementById("cashout-pin").value;
    if (cashOutPin == "4423") {
        //5-1 true:: show an alert > set Balance
        alert("Cashout Successful!");
        const newBalance = Number(balance) - Number(cashOutAmount);
        balanceElement.innerText = newBalance;
    }
    else {
        //5-2 true:: show an error alert > return
        alert("Invalid Pin! Tui ekta chor")
    }

})