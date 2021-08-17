const rootElem = document.getElementsByTagName('html').item(0);
const themeElem = document.getElementsByName('theme').item(0);
/*
themeElem.addEventListener('change', function(evt) { console.log('changed'); console.log(evt);});
*/

/*
themeElem.addEventListener('change', (evt) => {
  const target = evt.target;
  const theme = target.value;
  switchTheme(theme);
});

function switchTheme(theme) {
  rootElem.setAttribute('data-theme', theme);
}
*/