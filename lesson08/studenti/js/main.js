const rootElem = document.getElementsByTagName('html').item(0);
const themeElem = document.getElementsByName('theme').item(0);


themeElem.addEventListener("change",  function(ev) {
    console.log(ev);
    const elem = ev.target;
    const theme  = elem.value;

    rootElem .setAttribute('data-theme', them);
} )