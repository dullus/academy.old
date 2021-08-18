const rootElem = document.getElementsByTagName('html').item(0);
const themeElem = document.getElementsByName('theme').item(0);
const formElem = document.getElementsByTagName('form')[0];

themeElem.addEventListener('change', (evt) => {
  const target = evt.target;
  const theme = target.value;
  switchTheme(theme);
});

function switchTheme(theme) {
  rootElem.setAttribute('data-theme', theme);
}

formElem.addEventListener('submit', (e) => {
  let error = false;
  e.preventDefault();
  clearBanners();

  if (formElem['firstName'].value === '') {
    showBanner('alert', 'Please fill "First name" field.');
    error = true;
  } 
  if (formElem['surName'].value === '') {
    showBanner('alert', 'Please fill "Surname" field.');
    error = true;
  }
  if (!error) {
    showBanner('success', 'Full name is: ' + fullName(
      formElem['firstName'].value,
      formElem['surName'].value
    ));
  }
  // formElem.submit();
 });

function showBanner(type, msg) {
  const el = document.getElementById(type);
  el.innerText = el.innerText + ' ' + msg;
  el.style.display = 'block';
}

function clearBanners() {
  for (el of document.getElementsByClassName('alert')) {
    el.innerText = '';
    el.style.display = 'none';
  };
}