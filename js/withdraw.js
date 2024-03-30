document.getElementById('btn-withdraw').addEventListener('click',function(){

    const withdrawField=document.getElementById('input-withdraw');
    const withdrawString=withdrawField.value;
    const withdrawInt=parseFloat(withdrawString);
    
    withdrawField.value='';



    if(isNaN(withdrawInt)){
        alert('Ess asche ... ja bag')
        return;
    }


    const withdrawAmountField=document.getElementById('withdraw-balance');
    const withdrawAmountString=withdrawAmountField.innerText;
    const withdrawAmountInt=parseFloat(withdrawAmountString);
    const newWithdrawAmount=withdrawInt+withdrawAmountInt;




    const totalBalanceField=document.getElementById('total-balance');
    const totalBalanceString=totalBalanceField.innerText;
    const totalBalanceInt=parseFloat(totalBalanceString);
    const newTotalBalance=totalBalanceInt-withdrawInt;

    if(totalBalanceInt<withdrawInt){
        alert('taka nai re toi gorib');
        return;
    };


    withdrawAmountField.innerText=newWithdrawAmount;
    totalBalanceField.innerText=newTotalBalance;







    console.log(withdrawInt);
})