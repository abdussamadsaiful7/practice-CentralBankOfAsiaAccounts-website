
document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // danger: do not use for verify email & password
    
    if(email === 'bank@gmail.com' && password === '12345'){
        console.log('valid User');
    }
    else{
        console.log('not valid')
    }
});