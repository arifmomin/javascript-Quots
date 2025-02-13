const Name = document.querySelector('.name');
const email = document.querySelector('.email');
const nameinput = document.querySelector('.nameHeading');
const emailinput = document.querySelector('.emailHeading');
const button = document.querySelector('.button');
const from = document.querySelector('.form');
const fromHeading = document.querySelector('.from-heading');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');


button.addEventListener('click', () => {
    let nameValue = Name.value;
    let emailValue = email.value;
    if(nameValue == ''){
        nameinput.innerHTML = 'Please input a name'
        nameinput.style.color = 'red'
    }else if(!nameValue || emailValue == ''){
        nameinput.innerHTML = ''
        emailinput.innerHTML = 'Please input your email'
        emailinput.style.color = 'red'
        
    }else{
        h1.innerHTML += nameValue;
        h2.innerHTML += emailValue;
        fromHeading.style.display = 'block'
        from.style.display = 'none';

    }
});