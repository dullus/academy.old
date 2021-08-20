const rootElem = document.getElementsByTagName('html').item(0);
const themeElem = document.getElementsByName('theme').item(0);
const formElem = document.getElementsByClassName('myForm')[0];

themeElem.addEventListener('change', function(ev) {
    console.log(ev);
    const elem = ev.target;
    const theme = elem.value;

switchTheme(theme)});

function switchTheme(theme){
    rootElem.setAttribute('data-theme', theme);
}

formElem.addEventListener('submit', (ev) => {     //arrow function, ktora bude vediet aj o veciach mimo nej..o zvysku sveta
    ev.preventDefault();
    clearMessage();
    let error = false;

    if (formElem['firstName'].value === ''){
        error = true;
        showMessage('alert', 'Please fill in your First Name.')
    }
    if (formElem['surName'].value === ''){
        error = true;
        showMessage('alert', 'Please fill in your Surname.')
    }

    if(!error) {
    const full = fullName(
        formElem['firstName'].value,
        formElem['surName'].value
        );
        showMessage('success', full);
        document.getElementById('success').innerText = full;
    }
});

function showMessage(type, txt) {
    const el = document.getElementById(type);
    el.style.display = 'block';
    el.innerText = el.innerText + ' ' + txt;
}

function clearMessage(){
    const elems = document.getElementsByClassName('alert');
    for (el of elems){
        el.style.display = 'none';
        el.innerText = '';
    }
}