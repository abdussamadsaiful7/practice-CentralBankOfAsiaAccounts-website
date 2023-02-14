
document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // danger: do not use for verify email & password
    
    if(email === 'bank2@gmail.com' && password === '12345'){
        window.location.href ='http://127.0.0.1:5500/js/bank.html';
    }
    else{
        alert('Please Correct Your Email and Password!')
    }
});