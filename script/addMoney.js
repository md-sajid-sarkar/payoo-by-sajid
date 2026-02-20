document.getElementById("add-meney-btn").addEventListener("click", function () {
    // console.log("add money btn clicked")

    // 1. get bank account 
    const bankAccount = getValueFromInput("add-money-bank");
    // console.log(bankAccount)
    if (bankAccount == "Select a bank") {
        alert("Please select a bank!");
        return;
    }

    //2.  get ac number 
    const ACNumber = getValueFromInput("add-money-number");
    if (ACNumber.length != 11) {
        alert("Invalid AC number!");
        return;
    }

    // 3. get amount 
    const amount = getValueFromInput("add-money-amount");
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(amount);
    console.log(newBalance);

    const pin = getValueFromInput("add-money-pin");
    if (pin == "4423") {
        // alert("Add money Successful!");
        alert(`Add money from ${bankAccount} at ${new Date()}`);
        setBalance(newBalance);

        //1- history-container ke shore niye ashbo
        const history = document.getElementById("history-container")
        //2-new div create korbo
        const newHistory = document.createElement("div");
        //3-new div innerHTML add korbo
        newHistory.innerHTML = `
            <div class="transation-card p-5 bg-base-100 ">
            Add money from ${bankAccount} , acc-no ${ACNumber} at ${new Date()}
            </div>
        `;
        //4- history container e newDiv append korbo
        history.append(newHistory);

    }
    else {
        alert("Sothik Pin de beta");
        return;
    }





})