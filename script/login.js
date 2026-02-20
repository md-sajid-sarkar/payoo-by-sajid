// console.log("check if it's added");

document.getElementById("login-btn").addEventListener("click", function () {
    // console.log("login btn clicked");

    //1. get tge mobile number input
    const numberInput = document.getElementById("input-number");
    // console.log(numberInput)
    const contactNumber = numberInput.value;
    console.log(contactNumber);

    //2. get the pin input
    const pinNumber = document.getElementById("input-pin").value;
    console.log(pinNumber);

    // 3. match the mobile number & pin
    if (contactNumber == "01618877370" && pinNumber == "4423") {
        // 3-1 true>> alert >homepage
        alert("Login Success!");
        // window.location.replace("/home.html");
        window.location.assign("home.html");
    }
    else {
        // 3-2 false>> alert > return
        alert("Login failed!!");
    }
    return;



})