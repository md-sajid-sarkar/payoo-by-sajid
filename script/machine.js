console.log("machine added");


//input value dhorar machine
function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}

//balance dhorar machine
function getBalance() {
    const balanceElement = document.getElementById('balance').innerText;
    return Number(balanceElement);
}

// set balance 
function setBalance(value) {
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
}

// machine id > hide all > show id 
function showOnly(id){
    // 1- dhorbo jetak show korte chai 
    const addmoney = document.getElementById("add-money");
    const cashout = document.getElementById("cashout");
    const history = document.getElementById("history");

    // console.log(`add Money - ${addmoney}, Cashout - ${cashout}`);

    // sobaik hide kore daw 
    addmoney.classList.add("hidden");
    cashout.classList.add("hidden");
    history.classList.add("hidden");

    // id wala element k show kore daw ;
    document.getElementById(id).classList.remove("hidden");

}