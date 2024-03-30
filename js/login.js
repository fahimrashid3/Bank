document.getElementById('btn-login').addEventListener('click',function(){
    // get the email address
    const emailField=document.getElementById('email');
    const email=emailField.value;
  
    // get the email password
    const passwordField=document.getElementById('password');
    const password=passwordField.value;

    // verify user (thats the wrong process ) 
    if(email==='fahimrashid350@gmail.com' && password==='fahim'){
        window.location.href='bank.html';
    }
    else{
        alert('Fuck you')
    }
  


});