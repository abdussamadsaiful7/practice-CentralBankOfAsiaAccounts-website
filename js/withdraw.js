document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField =document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    
    const withdrawTotalElement =document.getElementById('withdraw-total');
    const previousWithdrawAmountString = withdrawTotalElement.innerText;
    const  previousWithdrawAmount =parseFloat(previousWithdrawAmountString);
    withdrawTotalElement.innerText = previousWithdrawAmount;

    const currentWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceAmountString = balanceTotalElement.innerText;
    const balanceAmount = parseFloat(balanceAmountString);

    const currentBalanceAmount = balanceAmount - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceAmount;

    withdrawField.value ='';

    if( currentBalanceAmount>=0){
        
    }
    else{
        alert("You have not much Money!");
    };




});