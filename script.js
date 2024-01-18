let inputSlider = document.getElementById('inputSlider');
let passBox = document.getElementById('passBox');
let sliderValue = document.getElementById('sliderValue');
let lowercase = document.getElementById('lowercase');
let uppercase = document.getElementById('uppercase');
let numbers = document.getElementById('numbers');
let symbols = document.getElementById('symbols');
let genBtn = document.getElementById('genBtn');
let copyIcon = document.getElementById('copyIcon');


sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input',()=>{
    sliderValue.textContent = inputSlider.value;
})

genBtn.addEventListener('click',()=>{
    passBox.value = generatePassword();
})

// function for generate password 




function generatePassword(){
    let genPassword = '';
    let allChars = '';



    let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    let allNumber = '0123456789';
    let allSymbol = '!@#$%^&*()_+/-.';


    allChars += lowercase.checked ? lowerCase : '';
    allChars += uppercase.checked ? upperCase : '';
    allChars += numbers.checked ? allNumber : '';
    allChars += symbols.checked ? allSymbol : '';

    if(allChars == ''||allChars.length == 0){
        return genPassword;
    }

    let i = 1;
    while(i<=inputSlider.value){
    genPassword += allChars.charAt(Math.floor(Math.random()*allChars.length));
    i++;
    }
    return genPassword;
}

copyIcon.addEventListener('click',()=>{
    if(passBox.value != ''|| passBox.value.length >= 1){
    navigator.clipboard.writeText(passBox.value);
    copyIcon.innerHTML = 'check';
    copyIcon.title = 'Password Copied';

    setTimeout(()=>{
        copyIcon.innerHTML = 'content_copy';
        copyIcon.title = '';
    },5000)
    }
})