document.getElementById('btn-deposit').addEventListener('click',function(){

   const depositField= document.getElementById('input-deposit');
   const depositValueString=depositField.value;
   const depositValueInt=parseFloat(depositValueString);
   depositField.value='';


   if(isNaN(depositValueInt)){
    alert('Ess asche ... ja bag')
    return;
}


    const depositAmountField =document.getElementById('deposit-balance');
    const depositAmountString =depositAmountField.innerText;
    const depositAmountValueInt=parseFloat(depositAmountString);
    const newSDepositAmount=depositValueInt+depositAmountValueInt;

    depositAmountField.innerText=newSDepositAmount;


    const totalBalanceField=document.getElementById('total-balance');
    const totalBalanceString=totalBalanceField.innerText;
    const totalBalanceInt=parseFloat(totalBalanceString);
    const newBalance=depositValueInt+totalBalanceInt;

    totalBalanceField.innerText=newBalance;



})