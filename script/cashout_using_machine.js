document.getElementById("cashout-btn").addEventListener('click', function () {
    // 1- get the agent number & validate 
    const cashOutNumber = getValueFromInput('cashout-number');
    // console.log(cashOutNumber);
    if (cashOutNumber.length != 11) {
        alert("Invalid Agent Number!");
        return;
    }

    //2- get the amount, validate, convert to Number
    const cashOutAmount = getValueFromInput('cashout-amount');
    // console.log(cashOutAmount);

    //3- get the Current Balance validate convert to Number
    const currentBalance = getBalance()
    // const balanceElement = document.getElementById("balance");
    // //input type theke catch korte gele .value use korte hoy. r normal span h2 esob theke nite hole innerText nite hoy
    // const balance = balanceElement.innerText;
    // // console.log(balance);

    //4- Calculate new Balance
    const newBalance = currentBalance - Number(cashOutAmount); //convert string to number
    if (newBalance < 0) {
        alert("Invalid Amount! Dure jaiya mor beta");
        return;
    }
    //5- Get the pin and verify
    const pinNumber = getValueFromInput('cashout-pin');
    // console.log(pinNumber);
    if (pinNumber == "4423") {
        //5-1 true:: show an alert > set Balance
        alert("Cashout Successful!");
        // document.getElementById("balance").innerText = newBalance;
        setBalance(newBalance);

                //1- history-container ke shore niye ashbo
        const history = document.getElementById("history-container")
        //2-new div create korbo
        const newHistory = document.createElement("div");
        //3-new div innerHTML add korbo
        newHistory.innerHTML = `
            <div class="transation-card p-5 bg-base-100 ">
            CashOut ${cashOutAmount} tk. to ${cashOutNumber} at ${new Date()}
            </div>
        `;
        //4- history container e newDiv append korbo
        history.append(newHistory);
    }
    else {
        //5-2 true:: show an error alert > return
        alert("Invalid Pin! Tui ekta chor")
    }
});
