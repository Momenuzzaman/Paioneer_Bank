// loging button event handler
var loginButton = document.getElementById("login");
loginButton.addEventListener("click",function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area")
    transactionArea.style.display = "block"
})

// deposit button event handler
 const depositButton = document.getElementById("addDeposit");
 depositButton.addEventListener("click",function(){
     const depositNumber = getInputNumber("depositAmount")
    

    updateSpantext("currentDeposite",depositNumber);
    
    updateSpantext("currentBalance",depositNumber);


    document.getElementById("depositAmount").value = "";
 })

// withdwar button event handelar 

const withdrawButton = document.getElementById("addWithdraw");
withdrawButton.addEventListener("click",function(){
   const withdrawNumber = getInputNumber("withdrawAmount");

   updateSpantext("currentWithdraw",withdrawNumber);
   updateSpantext("currentBalance" , -1*withdrawNumber)


   document.getElementById("withdrawAmount").value = "";

  
})

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
    
}

 function updateSpantext(id,depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalBalance = depositNumber + currentNumber;
    document.getElementById(id).innerText =totalBalance;
 }