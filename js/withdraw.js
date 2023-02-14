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

    


});