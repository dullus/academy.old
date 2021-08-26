const rootElem = document.getElementsByTagName('html').item(0);
const themeElem = document.getElementsByName('theme').item(0);
const formElem = document.getElementsByClassName('myForm')[0];

themeElem.addEventListener('change', function(ev) {
  const elem = ev.target;
  const theme = elem.value;
  switchTheme(theme);
});

function switchTheme(theme) {
  rootElem.setAttribute('data-theme', theme);
}

formElem.addEventListener('submit', (ev) => {
  ev.preventDefault();
  clearMessage();
  let error = false;

  if (formElem['firstName'].value.trim() === '') {
    error = true;
    showMessage('alert', 'Please fill "First Name".');
  }
  if (formElem['surName'].value.trim() === '') {
    error = true;
    showMessage('alert', 'Please fill "Surname".');
  }

  /*
  if (!error) {
  if (error !== true) {
  if (error === false) {
  */
  if (!error) {
    const full = fullName(
      formElem['firstName'].value,
      formElem['surName'].value
    );
    showMessage('success', full);
  }
});

function showMessage(type, txt) {
  const el = document.getElementById(type);
  el.style.display = 'block';
  el.innerText = el.innerText + ' ' + txt;
}

function clearMessage() {
  const elems = document.getElementsByClassName('alert');
  for (el of elems) {
    el.style.display = 'none';
    el.innerText = '';
  }
}