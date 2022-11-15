const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('pswd');
const password2 = document.getElementById('pswd2');


form.addEventListener('submit',(e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
 
    if(usernameValue === ''){
        setErrorFor(username , 'this fleid cannot be empty');
    }else{
        setSuccessFor(username);
    }

    if(emailValue === ''){
        setErrorFor(email , 'this fleid cannot be empty');
    }else if(!isEmail(emailValue)){
        setErrorFor(email , 'invalid email');
    }
    else{
        setSuccessFor(email);
    }

    if(passwordValue === ''){
        setErrorFor(password , 'this fleid cannot be empty');
    }else{
        setSuccessFor(password);
    }

    if(password2Value === ''){
        setErrorFor(password2 , 'this fleid cannot be empty');
    }else if(passwordValue!==password2Value){
        setErrorFor(password2 , 'password do not match');
    }
    else{
        setSuccessFor(password2);
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-controls error';
}
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-controls success';

}

function isEmail(email) {
   return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
}
// .test(email)